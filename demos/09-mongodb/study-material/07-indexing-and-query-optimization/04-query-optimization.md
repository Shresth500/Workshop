# Query optimization
Query optimization is the process of identifying slow queries, discovering why they are slow, and then taking steps to speed them up. The causes of slow queries vary too much. Poor application design inappropriate data models, and insufficient physical hardware are all common culprits, and their remedies require a significant time investment. Here we'll look at ways to optimize queries by restructuring the queries themselves and by building the useful indexes.

## Identifying slow queries
MongoDB logger has this assumption ingrained because it prints a warning whenever any operation, including a query, takes longer than 100 ms. The logs, therefore, are the first place you should look for slow queries.
```
$ unzip stocks.zip
```
Finally, after starting the mongod process if necessary, traverse to the unzipped folder and restore the dump like this
```
$ mongorestore -d stocks dump/stocks
```
Try querying
```
> use stocks
> db.values.find({
    stock_symbol: "GOOG"
}).sort( { date: -1} ).limit( 1 );
```
You'll notice that this takes some time to run, and if you check the MongoDB log, you'll see the exection time. 
```
grep -E '[0-9]+ms' mongod.log
```
To check queries that took more than 100 ms
```
> grep -E '[1-9][0-9]{2}ms' mongod.log
```

## Using the profiler
To start profiling
```
> use stocks
> db.setProfilingLevel(2)
```
Setting profiling level to 2 sets most verbose level. To log only slow (100 ms) operations, set the profiling level to 1. To disable the query profiler altogether, set it to 0. And to log only operations taking longer than a certain threshold in milliseconds, pass the number of milliseconds as the second argument
```
use stocks
db.setProfilingLevel(1, 50)
```
Now try this
```
> db.values.find({}).sort({close: -1}).limit(1)
```

## Profiling results
The profiling results are stored in a special capped collection called system.profile which is located in the database where you executed the setProfilingLevel command. You can find all queries that took longer than 150 ms like this
```
> db.system.profile.find({
    millis: {
        $gt: 150
    }
});
```
Because capped collections maintain natural insertion order, you can use the $natural operator to sort so that the most recent results are displayed first.
```
> db.system.profile.find().sort({
    $natural: -1
}).limit(5).pretty();
```

## Using and understanding explain
MongoDB's explain command provides detailed information about a given query's path. The explain() command displays more information when used with the executionStats
```
> db.values.find({}).sort({close: -1}).limit(1).explain( 'executionStats' );
```
The millis field from system.profile entry indicates that the find-sort-limit query takes a long time. The "docsExamined" shows that the query engine had to scan 4,308,303 documents to fulfill the query. That is the total number of documents! A complete collection scan was performed (planSummary: "COLLSCAN"). All this to get one document ("nreturned": 1).
```
> db.values.count()
```

## Add an index and retry
- Build an index on the close field and try again. This may take a few minutes.
```
> db.values.createIndex( { close: 1 } )
```
- Once built, try the query again:
```
> db.values.find({}).sort({close: -1}).limit(1).explain( 'executionStats' );
```
You will see a huge difference in the time taken to process the query. You can see it does an Index Scan now (IXSCAN) using the new index (close_1), while iterating over the index in reverse order ("direction" : "backward"). In the indexBounds field, you see the values MaxKey and MinKey. These indicate that the query spans the entire index. In this case, the query optimizer walks the rightmost edge of the B-tree until it reaches the maximum key and then works its way backward. Because you've specified a limit of 1, the query is complete once the maxKey is
found.

__Exercise__:
- __Query 1__: Take at look at the plan for this query
```
> db.values.find({close: {$gt: 500}}).explain( 'executionStats' )
```
    - What is the total number of results aas a percentage of documents examined?
    - How are the index boundaries specified?  
- __Query 2__: Take at look at the plan for this query
```
> db.values.find({stock_symbol: "GOOG", close: {$gt: 200}}).explain( 'executionStats' );
```
    - What is the winning query plan?
    - What is the total number of results as a percentage of documents examined?
    - How are the index boundaries specified? 
    - Build a sorted index on the stock_symbol and then run the above query. What are the answers to the questions above now?
    - Build an index on stock_symbol, followed by close (compound index) and repeat the above query. What are the answers to the questions now?

__Notes__:
- As seen in the theory on indexing, the order of keys in a compound query affects the results. So maintain order. The key with the range query comes last.
- You can use hint() to to force the query optimizer to use a particular index.
```
> db.values.find({stock_symbol: "GOOG", close: {$gt: 200}}).hint({close: 1}).explain( 'executionStats' );
```

<div>
    <a href="./03-index-administration.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../08-replication/01-introduction-to-replication.md">Next -></a>
</div>