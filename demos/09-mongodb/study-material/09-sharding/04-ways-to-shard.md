# Distributing data in a sharded cluster
Let us see how data is grouped and organized in MongoDB - this helps understand the different boundaries on which we can partition our data. 

There are four different levels of granularity (representing the units of data) in MongoDB
- document - represents a single object in the system and can't be divided further Example: a product document.
- chunk - exists only in sharded cluster - is group of documents clustered by values on a field (called shard key). Example: the group of product documents with skus between 10001 a 20000
- collection - a named grouping of documents within a database
- database  

__Note__: The combination of database name and collection name together is unique throughout the system, and is commonly referred to as the namespace.

Let us imagine how the data for a Google Docs–like application would be structured in MongoDB. The collection is _spreadsheets_ and is within _cloud-docs_ database. Let's say a document has username along with document's data, and the chunk consists of documents for users between "johndoe" and "marksmith" (alphabetically speaking). The namespace is _cloud-docs.spreadsheets_

# Ways data can be distributed in a sharded cluster
Data can be distributed in a sharded cluster in the following ways
- Database-level: Each database along with all its collections is put on its own shard
- Chunks-level: Here the documents within a collection are divided up and spread out over multiple shards, based on values of a field or set of fields called the shard key.

## Database-level distribution to shards
As you create new databases in a sharded cluster, each database is assigned to a different shard. An example where this method is really useful is "MongoDB as a service" (i.e. MongoDB in the cloud). Customers can pay for access to a single MongoDB database, and, each database is created in a sharded cluster. A shard is necessary as all customers' DBs cannot fir on a single DB server. If each client uses roughly the same amount of data, the distribution of the data will be optimal due to the distribution of the databases throughout the cluster.

## Chunk-level distribution to shards (sharding collections)
Here we shard an individual collection into chunks. This is called automatic sharding as MongoDB makes all the partitioning decisions, without any direct intervention from the application. You choose a predetermined field or set of fields called a shard key. Consider a document from the speadsheet collection.
```
{
    _id: 123
    filename: "spreadsheet-1",
    updated_at: ISODate("2018-09-02T19:22:54.845Z"),
    username: "johndoe",
    data: "raw document data"
}
```
We could choose shard key, say, the _ _id, username_ (compound key). MongoDB will then use _ _id, username_ field value in each document to determine what chunk the document belongs to. Sharding is range-based, which means each chunk represents a range (of a union of ranges) of shard keys. To determine what chunk a document belongs to, MongoDB extracts the values for the shard key and then finds the chunk whose shard key range contains the given shard key values.

<div>
    <a href="./03-components-of-a-sharded-cluster.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./05-building-a-shard.md">Next -></a>
</div>