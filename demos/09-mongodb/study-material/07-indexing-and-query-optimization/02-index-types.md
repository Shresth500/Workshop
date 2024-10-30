# Index Types
MongoDB allows you to apply several characteristics to indexes.

## Unique Indexes
- Often you want to ensure that a field such as _id or username, is unique to that document
- Unique indexes can enforce this characteristic
- Index on _id is used by MongoDB to ensure that _id is a unique primary key
- To create a unique index
```
> db.users.createIndex(
    { username: 1 },
    { unique: true }
);
```
- Duplicate username inserts will now fail
- It's usually best to create the index before inserting any data. When duplicate keys exist, the index creation fails  

## Sparse Indexes
- Indexes are dense by default - for every document in an indexed collection, a corresponding entry exists in the index, even if the document lacks the indexed key.  

__A Problem__
Suppose, products are entered into the system before a SKU is assigned. If you have a unique index on sku and attempt to insert more than one product without a SKU, the first insert will succeed, but rest will fail.  

__A Solution__
A unique and sparse index will help. In a sparse index, only those documents having some value for the indexed key will appear. Create using
```
> db.products.createIndex(
    { sku: 1 },
    { unique: true, sparse: true }
);
```
- Sparse index is desirable also when a large number of documents in a collection don't contain the indexed key. For example, suppose you allowed anonymous reviews on your e-commerce site. In this case, half the reviews might lack a user_id field, and if that field were indexed, half the entries in that index would be null - a waste of space, and also increased time when when adding or removing such reviews. To create a sparse index in this case
```
> db.reviews.createIndex(
    { user_id: 1 },
    { sparse: true, unique: false }
);
```  

## Multi-key Indexes
- For indexing fields whose values are arrays
- Allows multiple entries in the index to reference the same document
- A multi-key index is created when you create an index for tags
```
{
    name: 'Wheelbarrow',
    tags: [ 'tools', 'gardening', 'soil' ]
}
```
- However creating, updating, or deleting multikey indexes is more expensive than creating, updating, or deleting single-key indexes.  

## Hashed Indexes
- Useful when natural ordering of index key values in not desired
- In hashed indexing, entries are first passed through a hash function
- Not useful in general, but useful in sharded collections where the shard index determines which shard each document will be assigned to. Hashed indexes change the locality of index entries, which can be useful in sharded collections.
- If we had a collection of recipes, we could create it like so. Since recipe_name is hashed, index will NOT store entries in alphabetical order of recipe names.
```
> db.recipes.createIndex(
    { recipe_name: 'hashed' }
);
```

## Geospatial Indexes
__Exercise__: Explore this. It is useful, for example, in applications which let you search for a rental online.

<div>
    <a href="./01-core-concepts.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-index-administration.md">Next -></a>
</div>