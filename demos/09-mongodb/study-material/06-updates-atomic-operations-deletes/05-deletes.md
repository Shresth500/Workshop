# Deletes
You can pass a query selector to the remove method to delete a subset of a collection, or you can remove an entire collection.
```
> db.reviews.remove( { user_id: ObjectId('4c4b1476238d3b4dd5000001') } )
> db.reviews.remove( {} )
```

<div>
    <a href="./04-findAndModify.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../07-indexing-and-query-optimization/01-core-concepts.md">Next -></a>
</div>