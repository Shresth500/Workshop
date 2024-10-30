# Getting started
We will solve data requirements of scenarios in the store application by executing queries.

## Scenarios
__Scenario 1__: You are to display the product details when navigating to product detail page. Say, the slug is wheel-barrow-9092.  

__Requirement 1__: You need the main category details and reviews for product
```
> product = db.products.findOne({
    slug: 'wheel-barrow-9092'
});
db.categories.findOne({
    _id: product.main_cat_id
});
db.reviews.find({
    product_id: product._id
});
```  

__Requirement 2__: You need to paginate reviews. 5 reviews per page. How will you get the first page?
```
> db.reviews.find({
    product_id: product._id
}).skip(0).limit(5);
```  
__Note__: The order in which skip(), limit(), sort() etc. is applied, does not matter!  

__Exercise__: Write a query to fetch documents for second page of reviews.  

__Requirement 3__: The reviews need to be displayed by number of helpful votes. The one with most number of votes goes first.
```
> db.reviews.find({
    product_id: product._id
}).sort({
    helpful_votes: -1
}).limit(5)
```  

__Exercises__:
- You need to display total number of reviews for the product. Write the query.  
- Create an index on the product slug.
- Create an index on the product_id field of reviews.  

__Scenario 2__: You are to display the products belonging to a category when navigating to product listing page (you may call it category page too). Say, the slug for the category is gardening-tools.

__Requirement 1__: You need the category details and products for that category

__Exercises__:
- Write the queries that fetch required details. 
- Fetch 6 products of first page   

__Requirement 2__: Sibling categories are ones which share the same parent. Say, we want to display category names of all sibling category names which have current page category as parent, in a sidebar on the product listing page.

__Exercise__:
- Write the query/queries to fetch required details.  

__Note__: Root-level categories may be represented using null as value for parent_id

<div>
    <a href="../04-schema-design/02-designing-e-commerce-schema.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-query-criteria-and-selectors.md">Next -></a>
</div>





