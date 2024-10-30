# Principles of Schema Design
- Schema design
    - The process of choosing the best representation for a data set, given
        - the features of the database system
        - the nature of the data
        - the application requirement
- RDBMS schema design
    - Normalized schema
    - Denormalization for efficiency
    - Well-established principles for normalization and modeling relationships between entities
- Questions that we ask for designing schema
    - What are the application access patterns?
        - What is the read/write ratio?
        - Will queries be simple, such as looking up a key, or more complex?
        - Will aggregations be necessary?
        - How much data will be stored?
    - What is the basic unit of data?
        - In an RDBMS, you have tables with columns and rows
        - In a key-value store, you have keys pointing to amorphous values
        - In MongoDB, the basic unit of data is the BSON document
    - What are the capabilities of your database?
        - RDBMSs feature ad hoc queries and joins, usually written in SQL. Transaction support exists.
        - Key-value stores permit fetching values only by a single key. No transaction support. Updates replace te old value entirely.
        - MongoDB also allows ad hoc queries, but joins are not supported. Transactions supported in new version. Old versions support variety of atomic update operations.
    - What makes a good unique id or primary key for a record?
<div>
    <a href="../02-mongo-shell/05-basic-administration.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-designing-e-commerce-schema.md">Next -></a>
</div>