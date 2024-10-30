# Overview of Aggregation Framework
- The aggregation framework is the equivalent of the SQL "GROUP BY" clause. It allows you to group documents by some criteria and calculate aggregate values like sum, average, count etc.
- It also let's you filter out groups that do not macth some criteria.
- It is useful especially for generating summaries and reports. 
- A call to the aggregation framework defines a pipeline, the aggregation pipeline, where the output from each step in the pipeline provides input to the next step.
- Each step executes a single operation
- The general syntax for using aggregation framework is
```
> db.[[collection]].aggregate(
    [
        { $op1 : { criteria1 } },
        { $op2 : { criteria1 } },
        { $op3 : { criteria1 } },
        ...
    ]
]);
```
- Some important operators that define an operations are
    - $project — Specify fields to be placed in the output document (projected)
    - $match — Select documents to be processed, similar to find()
    - $limit — Limit the number of documents to be passed to the next step
    - $skip - Skip a specified number of documents
    - $unwind — Expand an array, generating one output document for each array entry
    - $group — Group documents by a specified key
    - $sort — Sort documents
    - $out — Write the results of the pipeline to a collection
- The SQL - Mongo DB equivalence for some of these operators may help understand better.
    - SELECT x, y, ... <=> $project
    - WHERE conditions <=> $match
    - JOIN <=> $unwind (only roughly speaking - it joins a document with an array of sub-documents)
    - GROUP BY <=> $group
    - HAVING <=> $match (yes, WHERE and HAVING are both done using $match in Mongo DB)
    - ORDER BY <=> $sort
    - Aggregate functions SUM(), AVG(), MAX() etc. <=> $sum, $avg, $max etc.

## Getting started
We will solve data requirements of scenarios in the store application by executing queries. Some of the situations are the same ones we saw in an earlier section. But the solutions will now use aggregation framework operators instead.
__Requirement 1__: Count the number of reviews for a product given by
```
> product = db.products.findOne( { slug: 'wheel-barrow-9092' } );
```
The solutions would be to filter products by product id ($match), and group ($group) to count ($count) the resulting number of rows.
```
> ratingSummary = db.reviews.aggregate(
    [
        { 
            $match : { 
                product_id: product._id
            }
        },
        {
            $group : {
                _id: '$product_id',
                count: { $sum: 1 }
            }
        }
    ]
).next();
```  
- The $group defines the structure of output documents, and $sum: 1 causes 1 to be added for every row in the group (resulting in the count of rows). The input document field product_id needs to be prefixed with a $ in the grouping clause (as in $product_id).
- The $match could go after $group, but that would make it an inefficient query. Why?
__Note__: The result of the aggregate call is a cursor that is converted to an object using next()  
__Exercises__:
- Write a query that finds number of reviews for every product.  
- Write a query that counts the number of products for each main category.  

__Requirement 2__: Calculate the average rating for each product along with the count of reviews
__Exercises__:
- Solve the above by adding average : { $avg: '$rating' } to the grouping clause. The $avg takes the field on which average is calculated. Again we need to prefix field name with a $.
- Write another query to group reviews by user, and show how many reviews each reviewer has, and how many helpful votes each reviewer has on average.  

__Requirement 3__: Calculate the number of reviews for a given product by rating value (eg. four 5-star ratings, two 4-star ratings, etc.)
```
> reviewsSummary = db.reviews.aggregate(
    [
        {
            $match: {
                product_id: product._id
            }
        },
        {
            $group: {
                _id: '$rating',
                count: { $sum : 1 }
            }
        }
    ]
).toArray();
```
__Note__: The result of the aggregate call is a cursor that is converted to an array using toArray()
__Exercise__: Obtain a similar review summary for each product. The output should have a document for each product, rating combination.  

__Requirement 3b__: In order to get product name with the review summary, we need to "join" the review and product collection. This is done using the $lookup stage.
```
db.reviews.aggregate(
    [
        {
            $lookup: {
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        },
        {
            $project: {
                product_id: "$product_id",
                name: "$product.name",
                rating: '$rating'
            }
        },
        {
            $group: {
                _id: {
                    product_id: "$product_id",
                    name: "$name"
                },
                avgRating: {
                    $avg: '$rating'
                }
            }
        }
    ]
)
```

__Requirement 4__: Find the number of products in each main category. Save the results of an aggregation into a new collection
```
> db.products.aggregate(
    [
        {
            $group : {
                _id: '$main_cat_id',
                count: { $sum: 1 }
            }
        },
        {
            $out: 'mainCategorySummary'
        }
    ]
);
```
- To improve the performance of the query, we can add a $project clause - this limits the fields in documents sent to the $group step, and makes the query more performant (time and memory-wise).  
```
> db.products.aggregate(
    [
        {
            $project: {
                main_cat_id: 1
            }
        },
        {
            $group : {
                _id: '$main_cat_id',
                count: { $sum: 1 }
            }
        },
        {
            $out: 'mainCategorySummary'
        }
    ]
);
```  

__Requirement 5__: Calculate the number of products for each category regardless of whether it was the main category. The $unwind operator allows you to expand an array, generating one output document for every input document array entry. In effect, it provides a type of MongoDB join, where you can join a document with each occurrence of a subdocument. We can put this to effect here.
```
> db.products.aggregate(
    [
        {
            $project: {
                category_ids: 1
            }
        },
        {
            $unwind: '$category_ids'
        },
        {
            $group: {
                _id: '$category_ids',
                count: { $sum: 1 }
            }
        },
        {
            $out: 'productCountByCategory'
        }
    ]
);
```
__IMPORTANT__: The use of $project becomes almost essential in the case of $unwind as this greatly limits the size of documents (which increases many-fold due to the $unwind). Always use $project to take in only essential fields, especially when using $unwind.  

__Requirement 6__: Summarizes orders (i.e. show net sales) by month and year for orders beginning in 2010. Make sure to sort this by year and month (in that order!). To solve this we will $project only orders after 2010, then use $year and $month reshaping functions to shape the document to have year and month fields. This can thus be summarized using $group. Note that the reshaping functions $year and $month are not aggregation opertors and hence are to be used inside the $project or $group clause.
```
> db.orders.aggregate(
    [
        {
            $match: {
                purchase_data: { $gte: new Date( 2010, 0, 1 ) }
            }
        },
        {
            $project: {
                sub_total: 1,
                year: {
                    $year: '$purchase_data',
                },
                month: {
                    $month: '$purchase_data'
                }
            }
        },
        {
            $group: {
                _id: {
                    year: '$year',
                    month: '$month'
                },
                total: { $sum : '$sub_total' }
            }
        },
        {
            $sort: {
                _id: -1
            }
        }
    ]
);
```
__Exercises__:
- Add a count of number of orders for every year and month to the summary.
- Try the above query with the reshaping functions being applied directly in the $group phase. This way, the $project step can be avoided altogether.
- The sorting happens according to the order of fields in _id. Thus sorting is by year first, then month - this is the way we expect this report (it is helpful to see year-wise details). Suppose we wanted month-wise sorting first, then year-wise - one way is to change the order of fields in _id generated in group. Can you think of another way?  

__Requirement 7__: We want a list of customers who have spent in total more than 10000. The results should be sorted in descending order of total order amount.
```
> db.orders.aggregate(
    [
        {
            $group: {
                _id: '$user_id',
                total: {
                    $sum: '$sub_total'
                }
            }
        },
        {
            $match: {
                total: {
                    $gte: 10000
                }
            }
        },
        {
            $sort: {
                total: -1
            }
        }
    ]
);
```
Note how $match is applied on the grouped documents. This is the equivalent of a HAVING clause in SQL. $match thus performs the dual role of WHERE as well as HAVING of SQL.  

<div>
    <a href="./02-query-criteria-and-selectors.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../06-updates-atomic-operations-deletes/01-introduction-to-atomic-updates.md">Next -></a>
</div>