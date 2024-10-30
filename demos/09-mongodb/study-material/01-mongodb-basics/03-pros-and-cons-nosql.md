# NoSQL: Pros and Cons
## NoSQL Pros
- Fast
- Simple
- Scalable
- Available
- Flexible schema

## NoSQL Cons
- Data integrity is an application's responsibility
- Limited queryability (Document DBs like MongoDB provides SQL like query features)
- Lack of transactions that span multiple tables/collections (introduced in MongoDB 4)
- Lack of joins (database schema design principles will thus be different and denormalization will be used - again complicating data integrity issues)
- Still evolving

__Note__: Eventual consistency may be treated as a pro or a con. It makes for faster writes at the cost of possibly getting stale data on a read. An application should decide if it can take that. MongoDB allows you to choose between strong consistency and eventual consistency when making writes to the DB.

<div>
    <a href="./02-types-of-nosql-dbs.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-document-data-model.md">Next -></a>
</div>
