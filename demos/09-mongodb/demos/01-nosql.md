NoSQL DB?
- Data is stored in non-relational fashion
- Schemaless (unstructured)
- SQL is not used - APIs (non-relational makes more sense)
- Scalability (replication and sharding)
- Availability
- Durability
- Low latency (data is denormalized, make fewer joins)
- Agile development - speed of development is fast

Cons
- Denormalized - so developer has to be aware of the data duplications and be careful
- You will miss the SQL syntax and convenience
- Sacrifice strong consistency for eventual consistency