# Working with Indexes
Indexes are key to enhancing query performance. Indexes help reduce write times etc. when constructed right.

## Creating a large collection
- You can use JS code inside the shell and create a large collectiion this way.
```
> for( var i = 0; i < 25000; i++ ) {
    db.numbers.insertOne({
        num: i
    });
} 
```
__Note__: The command 'it' continues iteration over the next set of 20 results displayed after a call to find(). If you do not want to view more, simply continue executing other queries.  

## Range queries
- Mongo DBs relational operators can be used to perform range queries.
```
> db.numbers.find({
    num: {
        $gt: 24990
    }
});
> db.numbers.find({
    num: {
        $gt: 10000,
        $lt: 10050
    }
});
```  

## Indexing and explain()
- When any database receives a query, it must plan out how to execute it - this is called a query plan.
- explain() describes query paths and allows developers to diagnose slow operations by determining which indexes a query has used.
- Often a query can be executed in multiple ways, and sometimes this results in behavior you might not expect.
- Run the following
```
> db.numbers.find({
    num: {
        $gt: 24990
    }
}).explain( 'executionStats' );
```
__Exercise__: Try to understand the execution statistics to determine how many documents were scanned in order to get the results. You will be surprised :-) Also check what the value of totalKeysExamined is - this is the number of index entries scanned. This brings us to the need for an index.

### Creating an index
- Indexes on collections are created using createIndex() method. We create an ascending index on num in this case (ascending indicated by 1, descending by -1)
```
> db.numbers.createIndex({
    num: 1
});
```
__Exercises__:
- Repeat the previous exercise and note down the statistics. Make sure to note down the winning plan. Also note down the different stages in the execution of your query.
- Use the following to understand indexes on the numbers collection. Note that an index is automatically created on the _id field when the collection is created.
```
> db.numbers.getIndexes();
```
An alternative way to get the indexes for the numbers collection is
```
> db.runCommand({
    listIndexes:'numbers'
});
```
Note that we are running this on the db itself.  

### Downside of indexes
- Inserts take slightly more time with indexes. This can get worse if the number of indexes for a collection is large.
- More hard disk space (required for index data structures)

<div>
    <a href="./03-crud-operations.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./05-basic-administration.md">Next -></a>
</div>



