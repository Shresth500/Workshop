# Types of NoSQL DBs

## Document DB
- Rows (SQL) <=> Documents (Document DB)
{
    name: 'John Doe',
    age: 32,
    address: {
        street: '32, Rhenius St',
        pinCode: 560100
    },
    emailids: [
        { contact: 'john@gmail.com', type: 'personal' }
        { contact: 'john@cgi.com', type: 'work' }
    ]
}
- Examples: MongoDB, Couch DB
- Query capabilities rival that of SQL
- Only MongoDB 4.0+ supports transaction

## Graph DB
- store information about networked entities (eg. social media network like LinkedIn)
- Example: Neo4J, Giraph

## Wide-column stores
- Splits data into groups of columns and stores the data
- Message queues, analyzing network logs
- Example: DynamoDB, Cassandra

## Key-value stores
- Session data, caching of search results
- Example: Redis, Memcache