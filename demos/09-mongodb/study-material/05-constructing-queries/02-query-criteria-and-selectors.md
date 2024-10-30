# Query criteria and selectors

## Case-insensitive matches
String matches are case-sensitive, so you will need to use a regular expression with case-insensitive matching
```
> db.users.find({
    username: 'Johndoe'
});
> db.users.find({
    username: /Johndoe/i
});
```

## Ranges
- Operators: $gt, $gte, $lt, $lte
- You can use them to specify range matches. We have seen examples previously. Note the correct way to combine them.
```
> // incorrect way - only the last birth_year selector is applied
> db.users.find(
    {
        birth_year: {
            $gte: 1985
        },
        birth_year: {
            $lte: 2015
        }
    }
);

> // correct way - both $gte and $lte are used together in the selector document
> db.users.find(
    {
        birth_year: {
            $gte: 1985,
            $lte: 2015
        }
    }
);
```

## Set operators
- Operators: $in, $nin, $all
- These take an array of values as predicate. Use-cases are illustrated using the exercises.  
- Find all products that belong to one of the two categories
    - lawnmowers - ObjectId("6a5b1476238d3b4dd5000048")
    - hand tools - ObjectId("6a5b1476238d3b4dd5000051")
    - Note: The product should have main category as one of the two.
This can be solved with $in as below.
```
> db.products.find({
    main_cat_id: {
        $in: [
            ObjectId("6a5b1476238d3b4dd5000048"),
            ObjectId("6a5b1476238d3b4dd5000051")
        ]
    }
});
```  
__Exercise__:
- Write a query to find all products that do not have main category as lawnmowers or hand tools.
- Write a query to list all products that are tagged as both tools and gardening  

__Note__:
- $all makes sense only when applied to a field whose value is an array
- $in and $all can make use of indexes. $nin cannot, and requires a collection scan. Hence minimize its use.

## Boolean operators
- Operators: $ne, $not, $or, $and, $nor, $exists, $type
- $ne works on keys pointing to single values as well as arrays. Use $ne to find all products manufactured by Acme that aren't tagged with gardening.
```
> db.products.find(
    {
        'details.manufacturer': 'Acme',
        tags: {
            $ne: "gardening"
        }
    }
);
```   
- $or takes an array of query selectors, where each selector can be arbitrarily complex and may itself contain other query operators. Use $or to find all products that are either blue or made by Acme like so.
```
> db.products.find({
    $or: [
        { 'details.color': 'blue' },
        { 'details.manufacturer': 'Acme' }
    ]
});
```
- $and too takes an array of query selectors. To find all products that are tagged with one of gift or holiday and one of gardening or landscaping, we use the following $and query expressing the conjunction
of two $in queries.
```
> db.products.find({
    $and: [
        {
            tags: { $in: ['gift', 'holiday'] }
        },
        {
            tags: { $in: ['gardening', 'landscaping'] }
        }
    ]
});
```  
__Exercise__: The following query does not work like the above one. Why? What will its result be?
```
> db.products.find({
    tags: { $in: ['gift', 'holiday'] },
    tags: { $in: ['gardening', 'landscaping'] }
});
```  
- $exists is used to query for existence of a field (path). To list all products that don't have a color specified.
```
> db.products.find({
    'details.color': {
        $exists: false
    }
});
- $type is used to query the data type
```  

## Arrays
- Operators: $elemMatch, $size  
Arrays are used to store lists of strings, object IDs, and even other documents. The simplest array queries look like queries on any other document type.  
__Exercise__:
- Write a query to list products tagged with 'soil'
- The above query can take advantage of an index on the tags field. Create an index using
```
> db.products.createIndex( { tags: 1 } )
```
- Now use explain() to see the execution path.  

- When you need more control over your array queries, you can use dot notation to query for a value at a particular position within the array.
```
> db.products.find( { 'tags.2': 'soil' } )
```  
__Exercises__:
- Find all users who have an address in the state of New York (NY).
- The first address in user table reresents the primary shipping address of a user. Find all users whose primary shipping address in the state of New York.  

- Suppose you want to fetch a list of all users whose home address is in New York. Can you think of a way to express this query? You cannot at this point of time. The following won't work. Why?
```
> db.users.find({
    'addresses.name': 'home',
    'addresses.state': 'NY'
});
```
This requires use of $elemMatch which matches all supplied terms against the same subdocument.
```
> db.users.find({
    addresses: {
        $elemMatch: {
            name: 'home',
            state: 'NY'
        }
    }
});
```  
- The $size operator allows you to query for an array by its size. To find all users with exactly 3 addresses,
```
> db.users.find({
    addresses: {
        $size: 3
    }
});
```

## Others operators

### $expr
```
/**
 * Use $expr when you have a condition relating values of 2 paths (fields) in a document
 */
use financeData;

db.sales.insertMany(
    [
        { person: 'John Doe', volume: 120, target: 100 },
        { person: 'Jane Doe', volume: 150, target: 160 },
        { person: 'Mark Doe', volume: 200, target: 170 },
        { person: 'Melanie Doe', volume: 260, target: 200 }
    ]
);

// find all sales records with volume > target
// $gt can be used in $expr but takes an array of values to compare as its value
// prefix paths with $ in $expr expressions
db.sales.find( { $expr: { $gt: [ "$volume", "$target" ] } } );

// find all sales records with volume exceeds target by more than 25
db.sales.find( { $expr: { $gt: [ { $subtract: [ "$volume", 25 ] }, "$target" ] } } );

// find all sales records with volume exceeds target by more than 20 if volume is below 150, and exceeds by more than 50 if volume is greater than or equal to 150
// the value of "if then else" is the value of "then" or "else". The value of $cond is the valueof the condition, in this case the value of "if then else"
db.sales.find({
    $expr: {
        $gt: [
            {
                $cond: {
                    if: {
                        $gte: [
                            "$volume",
                            150
                        ]
                    },
                    then: {
                        $subtract: [
                            "$volume",
                            50
                        ]
                    },
                    else: {
                        $subtract: [
                            "$volume",
                            20
                        ]
                    }
                }
            },
            "$target"
        ]
    }
});

```

<div>
    <a href="./01-getting-started.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-overview-of-aggregation-framework.md">Next -></a>
</div>
