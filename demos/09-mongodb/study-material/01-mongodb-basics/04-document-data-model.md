# Document data model
- Store data in documents
- Documents typically use a structure that is like JSON
    - provides an intuitive and natural way to model data that is closely aligned with object-oriented programming
    – each document is effectively an object
    - no "impedance mismatch" - use of ORM equivalents (called ODMs) is not necessary
- Documents contain one or more fields
    - field contains a typed value, such as a string, date, binary, decimal value, or array.
- Document contains single, hierarchical data
    - do not spread out a record across multiple columns and tables connected with foreign keys
    - each record and its associated data are stored together in document in hierarchical fashion
    - this accelerates developer productivity, simplifies data access and, often, eliminates the need for expensive JOINs, and complex, multi-record transactions.
- Documents are "schemaless"
    - each document can contain different fields
    - helpful for modeling unstructured and polymorphic data
    - makes it easier to evolve an application during its lifecycle
- Provide the query expressivity of RDBMSes
    - data can be queried based on any combination of fields
    - rich secondary indexes provide efficient access paths to support almost any query pattern

<div>
    <a href="./03-pros-and-cons-nosql.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./05-introduction-to-mongodb.md">Next -></a>
</div>