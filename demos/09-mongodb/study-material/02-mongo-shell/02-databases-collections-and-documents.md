# Databases, collections, and documents 
- Data stored in BSON and outpu as JSON
- BSON is a binary representation for JSON formatted data
- Terminology parallels RDBMS
    - Database (RDBMS) is Database (Mongo DB)
    - Table is Collection
    - Row/Record is Document
    - Column/Field is Path

## Using Databases
- Default DB (actually namespace) is test
```
> db;
```
- To list all DBs
```
> show dbs;
```
- DBs are more like namepsaces rather than traditional DBs in RDBMS. To switch DBs, say
```
> use mydb;
```
- If you switch to a non-existent DB, it switches to that one!
```
> use newdb;
```
- However the newdb namespace is temporary and is not persistent until it has a collection with a document

__Exercises__:
- Switch to a different DB and verify there is no DB with name newdb

__Self-exploration__:
- Explore the following
    - db.createCollection() method
    - db.renameCollection() method
    - Capped collection
    - TTL collection  

- Switch to DB local and check its collections. Also list its documents.
```
> use local
> show collections
> db.startup_log.find();
```
- You can pretty-print the output like so
```
> db.startup_log.find().pretty()
```

__Notes__:
- Since semi-colons are optional in JavaScript to indicate end of line, they may be imitted in our queries
- Use Ctrl + D to exit a query in between. Use exit to exit the Mongo shell.
- For help type
```
> help
```
- For help on DB related commands
```
> db.help()
```
- For help on collection related methods use db.[[collection_name]].help()
```
> db.startup_log.help()
```
- To clear the shell
```
> cls
```

<div>
    <a href="./01-getting-started.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-crud-operations.md">Next -></a>
</div>