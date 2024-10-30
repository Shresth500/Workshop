## Basic Administration
- Use stats() for lower level insights into DBs and collections
```
> db.stats()
> db.numbers.stats()
```
__Exercise__: FInd out how much space the numbers collection and its indexes are occupying.

## Database commands
- A certain set of MongoDB operations, distinct from the insert, update, remove, and query operations, are known as database commands.
- They are usually administrative
- The db.runCommand() is used to run all such commands.
- The stats() method on a db can be alternatively run as
```
> db.runCommand({
    dbStats: 1
});
```
- The stats() method on a collection can be alternatively run as
```
> db.runCommand({
    collStats: 'numbers'
});
```

<div>
    <a href="./04-working-with-indexes.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../03-mongodb-with-nodejs/README.md">Next -></a>
</div>