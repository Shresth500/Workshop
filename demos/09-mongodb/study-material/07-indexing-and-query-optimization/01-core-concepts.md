# Core concepts

## Need for Indexes - Recipe book
- Imagine a recipe book with 10,000 pages - a lot of recipes. The recipes are in random order and there is no index. How would you find your recipe? Wht is the number of pages you may have to flip through?
- Now suppose you create an index by recipe names. If you knew the first few letters of the name of the recipe you are looking for things would be simpler. But what if you needed to search for recipe by ingredients? What if you wanted to search by cuisine? What if you wanted to list all recipes from a cuisine? We need more indexes!
- What if you want to search for a recipe by an ingredient and only vaguely remember the recipe name (you can recognize the recipe when you see its name). Wouldn't it be good if you had an index with ingredients listed, and under each ingredient had the recipes using it listed too? This is a __compound index__.  

__Exercises__:
- If we had following 3 indexes. Which of these is redundant?
    - recipes
    - ingredients
    - ingredient-recipe
- Will ingredient-recipe index behave exactly same as recipe-ingredient?

## Single-key Indexes
- Each entry in the index corresponds to a single value from each of the documents indexed.
- A primary index is created on _id column by default.  

__Note__: Indexes are stored as B-Trees in MongoDB  

## Compound-key Indexes
- Imagine that you've built two indexes on the products collection
    - manufacturer
    - price  

__Exercise__: What kind of queries would become faster due to this? How would it be helpful in the context of the store web application?  

Imagine a query that looks like this
```
db.products.find({
    'details.manufacturer': 'Acme',
    'pricing.sale': {
        $lt: 7500
    }
});
```
If you issue this query with single-key indexes on manufacturer and price, only one of them will be used. The query optimizer will pick the more efficient of the two, but neither will give you an ideal result. To satisfy the query using these indexes, you have to traverse each structure separately and then grab the list of disk locations that match and calculate their intersection.

__Exercise__:
What kinds of compund index would you build in this case? Would the order of the keys matter? Can you picture how this would affect the number of lookups to fetch the results?  

__Tip__: On manufacturer, you want to match the term exactly. But on price, you want to match a range of values, beginning with 7500. As a general rule, a query where one term demands an exact match and another specifies a range requires a compound index where the range key comes second.

## Index Efficiency
- Each new index imposes a small maintenance cost
- When adding/removing/updating a document to a collection, each index on that collection must be modified to include the new document.
- The more the number of idnexes on a collection, the more the time for these operations.
- For read-intensive applications, the cost of indexes is justified. 
- Even with all the right indexes in place, it's still possible that those indexes won't result in faster queries. This occurs when indexes and a working data set don't fit in RAM. The data files, which include all documents, collections, and their indexes, are then swapped in and out of RAM by the operating system (paging). If the page faults start increasing (thrashing), read and write operations will eventually slow down.
- You can always discover total index size by looking at the results of the stats command. The working set is the subset of total data commonly queried and updated, which is different for every application.  

__Tip__: 
- Do not have redundant indexes.
- Be aware of your index sizes and working data set size

<div>
    <a href="../06-updates-atomic-operations-deletes/05-deletes.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-index-types.md">Next -></a>
</div>
