# Index administration
We have already seen index creation. Let's see index retrieval, deletion.

## Deleting Indexes
- Delete indexes using the collection command dropIndex().
```
> db.users.dropIndex( { username: 1 } );
```

## Viewing indexes
- You can then check the index specifications with getIndexes().
```
> db.users.getIndexes()
```

<div>
    <a href="./02-index-types.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-query-optimization.md">Next -></a>
</div>