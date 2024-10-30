# List of software to be installed
The list of software to be installed before training starts can be found [here](./mongodb-training-list-of-software-to-be-installed.pdf)

# Download links
- [Stocks DB](https://www.dropbox.com/s/r8bnc39heewptbc/stocks.zip?dl=0)

# Exercises
Once you complete the training, you can try the [exercise problems](./10-exercises). These will be good practice on different types of queries.

# References
- [Documentation](docs.mongodb.com)
- [Training from MongoDB](university.mongodb.com)
- [MongoDB for .NET developers](https://university.mongodb.com/courses/M101N/about)
- [MongoDB driver for C# and .NET](https://docs.mongodb.com/ecosystem/drivers/csharp/)
- [MongoDB driver for Node.js](https://mongodb.github.io/node-mongodb-native/?jmp=docs)
- [Mongoose ODM for Node.js apps](https://mongoosejs.com/)
- [Schema Design - Part 1](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1)
- [Schema Design - Part 2](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)
- [Schema Design - Part 3](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3-)
- [Comparison of different NoSQL DBs under various workloads - with different read-write ratios](https://jaxenter.com/evaluating-nosql-performance-which-database-is-right-for-your-data-107481.html)

# Chapters and Topics

## MongoDB basics
- [RDBMS vs NoSql DBs](./01-mongodb-basics/01-rdbms-vs-nosql-dbs.md) 
- [Types of NoSQL DBs](./01-mongodb-basics/02-types-of-nosql-dbs.md) 
- [Pros and Cons of NoSQL DBs](./01-mongodb-basics/03-pros-and-cons-nosql.md) 
- [Document data model](./01-mongodb-basics/04-document-data-model.md) 
- [Introduction to MongoDB](./01-mongodb-basics/05-introduction-to-mongodb.md) 
- [Features of MongoDB](./01-mongodb-basics/06-features-of-mongodb.md) 
- Installation and getting started 
- Using Robo 3T 

## Mongo Shell 
- [Getting started ](./02-mongo-shell/01-getting-started.md)
- [Databases, collections, and documents](./02-mongo-shell/02-databases-collections-and-documents.md) 
- [CRUD operations – Inserts, queries, updates, deletes](./02-mongo-shell/03-crud-operations.md) 
- [Creating and querying with indexes - Indexing and explain()](./02-mongo-shell/04-working-with-indexes.md) 
- [Basic administration](./02-mongo-shell/05-basic-administration.md) 
 
## Using MongoDB in Node.js 
- Quick introduction to Node.js 
- Using MongoDB in Node.js via the Mongo DB driver 
- Introduction to the Mongoose ODM 
- CRUD operations – Inserts, queries, updates, deletes 
- Installing Mongoose and using it 
- Schemas and Models 
- Operation Hooks 
- Data Validation during operations 
- Building a simple application 

## Schema Design for Document-oriented Data
- [Principles of schema design](./04-schema-design/01-principles-of-schema-design.md)
- [Designing an e-commerce Schema](./04-schema-design/02-designing-e-commerce-schema.md)
- [Sample schema specification](./04-schema-design/03-specifying-schema.md)
 
## Constructing Queries 
- [Getting Started ](./05-constructing-queries/01-getting-started.md)
- [Query Criteria and Selectors](./05-constructing-queries/02-query-criteria-and-selectors.md) 
- [Overview of the aggregation framework](./05-constructing-queries/03-overview-of-aggregation-framework.md)  
 
## Document Updates, Atomic Operations, and Deletes 
- [Introduction to document updates](./06-updates-atomic-operations-deletes/01-introduction-to-atomic-updates.md) 
- [Modify by replacement vs Modify by operator](./06-updates-atomic-operations-deletes/02-modify-by-replacement-vs-modify-by-operator.md)
- [Update operators](./06-updates-atomic-operations-deletes/03-update-operators.md) 
- [The findAndModify command](./06-updates-atomic-operations-deletes/04-findAndModify.md) 
- [Deletes](./06-updates-atomic-operations-deletes/05-deletes.md)  
 
## Indexing and Query Optimization 
- [Core concepts](./07-indexing-and-query-optimization/01-core-concepts.md) 
- [Index types](./07-indexing-and-query-optimization/02-index-types.md) 
- [Index administration](./07-indexing-and-query-optimization/03-index-administration.md) 
- [Query optimization](./07-indexing-and-query-optimization/04-query-optimization.md)
 
## Replication 
- [Introduction to replication](./08-replication/01-introduction-to-replication.md) 
- [Replica sets and setup](./08-replication/02-replica-sets-and-setup.md) 
- [Verifying replication and failover](./08-replication/03-verifying-replication-and-failover.md) 
- [Connections](./08-replication/04-connections.md) 
  
## Sharding 
- [Introduction to sharding](./09-sharding/01-introduction-to-sharding.md) 
- [When to shard](./09-sharding/02-when-to-shard.md) 
- [Components of a sharded cluster](./09-sharding/03-components-of-a-sharded-cluster.md) 
- [Ways to shard](./09-sharding/04-ways-to-shard.md)
- [Building a shard](./09-sharding/05-building-a-shard.md) 
- [Strategies for distributing data](./09-sharding/06-strategies-for-distributing-data.md) 
 
## Deployment and Administration 
- Hardware and provisioning 
- Cluster topology 
- Deployment environment 
- Provisioning 
- Monitoring and diagnostics 
- Logging 
- MongoDB diagnostic tools and commands 
