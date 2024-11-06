## Document
- SQL DB often require ORMs (Hibernate). Document however reflects the way application uses data. ODM (Mongoose) is not not necessary in Document DBs.
- Document can have more than one "field" (Document DB do not follow 1NF - multi-valued attributes are allowed)
- Terminology
    * Path (MongoDB) <=> Field (SQL)
    * Collection (MongoDB) <=> Table (SQL)
    * Document (MongoDB) <=> Row (SQL)
- Schemaless - schema is not necessary