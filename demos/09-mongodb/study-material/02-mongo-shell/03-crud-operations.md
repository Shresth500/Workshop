# CRUD operations
- We will switch to test namespace and work there
```
> use test
```

## insert() | insertOne() | insertMany()
- Documents are represented as plain JS objects. When you insert a document for the first time into a collection of an empty namespace, the database, collection and document all get created!
```
> db.users.insert({
    username: 'johndoe',
    fullname: 'John Doe',
    age: 32
});
```
This creates database test, collection users and inserts the document into it. The newly inserted document gets a unique _id. Due to this, the first document insertion usually takes more time.
- To read all of the documents in a collection (here users)
```
> db.users.find()
```
- Insert a user document with a more complex structure, say an array of interests.
```
> db.users.insert({
    username: 'janedoe',
    fullname: 'Jane Doe',
    age: 24,
    interests: [
        'Web Development', 'Cloud Computing'
    ]
});
> db.users.insert({
    username: 'marksmith',
    fullname: 'Mark Smith',
    age: 48,
    interests: [
        'Web Development', 'Devops', 'Databases'
    ]
});
> db.users.insert({
    username: 'johnswift',
    fullname: 'Jonathan Swift',
    age: 40,
    interests: [
        'Cloud Computing', 'Devops', 'Databases'
    ]
});
```
In order to find all users interested in Databases we can issue the query
```
> db.users.find( { interests: 'Databases'} );
```
Note how the query structure does not distinguish between a single-valued item, and a multi-valued item like interests.

__Exercises__:
- Explore the use of db.[[collection]].insertMany() to insert multiple documents at once, and insertOne() to insert a single document.
- Read https://stackoverflow.com/questions/36792649/whats-the-difference-between-insert-insertone-and-insertmany-method to understand the difference between insert(), insertOne() and insertMany()

## _id
- It is mandatory in a document
- If it is not present Mongo will create one for the document
- The data type of an auto-generated _id is ObjectID
- _id is unique for all documents in a given collection  

__Exercises__:
- Try inserting a document with _id set to ObjectID("[[an already existing id]]"). You will see Mongo report an error
- Try inserting a document with an _id set to any value. Mongo will insert the document (given that it is unique in the collection). The _id value may be an ObjectID, a number, string, or any other value (even a document). As long as it is unique, the insert is allowed.
- There is an alternative to using insert() - it is save(). Understand the differences between the two. The following links will be helpful.
    * https://alvinalexander.com/source-code/scala/mongodb-whats-difference-between-save-and-insert-mongodb
    * https://docs.mongodb.com/manual/reference/method/db.collection.save/index.html
    * You can verify the working of save by viewing the source code for it too - simply omit the parentheses.
```
> db.users.save
```

## count()
- count() is used to count the number of documents in a collection
- __Note__: It si different from the count() which is chained to find() - that is used on a cursor
```
> db.users.count();
> db.users.find().count();
```

## find()
- Query predicate (aka query selector) is a document (i.e. a plain JS object) that specifies a set of conditions and is used to select a subset of documents in a collection (i.e. filtering based on conditions).
- Since they are plain JS objects, it becomes trivial to build up complex queries in application code!
```
> db.users.find({
    username: 'johndoe'
});
```
- Calling find() without arguments is exactly same as calling with an empty predicate
```
> db.users.find({})
```
- To limit the fields retrieved in a query (called projection), you pass a second argument to find() like so
```
> db.users.find(
    {},
    {
        username: 1,
        age: 1
    }
);
```  
To retrieve all fields except a given set of fields (age and lastname in this case)
```
> db.users.find(
    {},
    {
        age: 0,
        lastname: 0
    }
);
```  

__Exercise__: Find out how you can list all users whose username begins with john (Hint: Regular expressions are allowed for value)  

- Specifying multiple fields, does an AND (documents that match all field values mentioned are selected)
```
> db.users.find({
    fullname: 'John Doe',
    age: 32
});
```
- The behavior for matching can be specified explicitly using $and, $or operators too. These appear as keys in the document (object properties) and take as value an array of predicates.
```
> db.users.find({
    $and : [
        { fullname: 'John Doe'},
        { age: 32 }
    ]
});
```   

__Notes__:
- When there is an option, please use the simpler syntax instead of $and. It is more readable and faster.  
- find() actually returns a cursor. The next() method of a cursor is used to iterate over documents in the result. However, the Mongo shell calls next() automatically, fetching 20 documents by default.  
- The documents are by default returned in natural order, i.e. the order they are found in the DB. This is not necessarily the order in which they have been inserted. There is no built-in way to retrieve documents in insertion order (except for capped collections).  

__Exercise__: Try the same $and query with a $or query instead and observe the difference.

__Aside__:  
- Let's say you have a document structured this way in a stocks collection
```
{
    _id: {
        sym: 'SPILI',
        date: 20181005
    },
    open: 70.50,
    high: 75.35,
    low: 68.80,
    close: 72.20
}
```
You can make a query where the the _id sub-document is matched as a whole too (this applies to fields that are not the primary field too)
```
> db.stocks.find({
    _id: {
        sym: 'SPILI',
        date: 20181005
    }
});
```
__IMPORTANT__: The order of the fields sym and date should be the same as the order in the document. This is true even if we had inserted { stock: { sym: 'SPILI', date: 20181005 } } ) - thus querying for an exact sub-document match is cumbersome.   

## findOne()
- The findOne() method behaves like find(), except that only one document (first match in natural sort order) is returned. The natural sort order is usually the order in which the documents got inserted, but this is not guaranteed.  
__Exercise__: Try out a few queries with findOne()  

## update()
- All updates require at least two arguments
    - first tells which documents to update
    - second tells how the selected documents should be modified
- By default a single document is updated - but multiple documents can be updated too. For this pass a third argument { multi : true } or call updateMany() instead of update().
- There are 2 kinds of updates
    - modify an existing document
    - replace an existing document

### Modify updates
- To update john's age while having the rest of document intact, use the $set operator like so
```
> db.users.update(
    { 
        username: 'johndoe'
    },
    {
        $set: {
            age: 33 
        }
    }
);
```  
__Note__: Even if multiple document match this predicate, only the first match is updated.
- To remove a field, use the $unset operator
```
> db.users.update(
    { 
        username: 'johndoe'
    },
    {
        $set: {
            age: 34 
        },
        $unset: {
            fullname: 1
        }
    }
);
```  
__Note__: Using 1 is a common pattern to complete a key-value pair in Mongo DB queries.

### Replace updates
- To replace a document with another, pass the new document as the second argument. The replaced document will maintain the id of the original document.
```
> db.users.update(
    { 
        username: 'johndoe'
    },
    {
        age: 33 
    }
);
```  
__Note__: Be careful when making updates. Usually you would like to use $set in order to make a modification rather than replacement.
__Exercises__:
- Try updating the _id field by specifying it in the replacing document. What happens?  
- Explore how to use replaceOne() insead of update() in this case - it's intent is clear and hence preferred when compared to update().  

### Updating complex data
- Add a few documents with a more complex structure
```
> db.users.insert({
    username: 'Honey Singh',
    favorites: {
        cities: [
            'London',
            'Amritsar'
        ],
        movies: [
            'Namaste England',
            'Singh is King'
        ]
    }
});
```
__Exercise__: Use the $set operator to add favorites with cities and movies for some other users which don't have it currently.

### Predicate for find() that uses nested fields
- In order to find users who have 'Namaste England'as one of their favorite movies, the following query can be executed. Note the use of the '.' operator. Though the value of favorites.movies is an array, the right side of 'favorites.movies' is a single string item to be matched. This is a recurring theme in Mongo DB queries.
```
> db.users.find({
    'favorites.movies': 'Namaste England'
});
```  
__Note__: The quotes around favorites.movies is a requirement of the JavaScript object literal syntax which allows only property names involving letters of the alphabet, digits, _ and $ to be unquoted (again digits cannot occur at the beginning of a property name). Since there is a '.', the quotes is necessary.  

### More advanced updates
- The following query adds 'Ye Jawaani Hain Deewani' to the list of Honey Singh's favorite movies.
- The third argument tells if upsert (i.e. insert if no matching document exists)., multi-update etc. is allowed
```
> db.users.update(
    { username: 'Honey Singh' },
    {
        $addToSet: {
            'favorites.movies': 'Ye Jawaani Hain Deewani'
        }
    },
    {
        multi: false,
        upsert: true
    }
);
```  
__ Exercises__:
- Repeat the above with a non-existent username and upsert argument set to true. Verify that a new document is created. Observe that the fields in the predicate too are part of the upserted document. Try giving an array of movies too along with a non-existent username and see what upsert does.
- Verify that the fourth argument does multi-update when set to true and single-update when false.

### remove() and drop()
- To remove documents from a collection use remove()
```
> db.users.remove({
    username: 'Honey Singh'
});
```
- The following removes all documents from a collection - be very careful using remove(). Note that remove() does not remove the collection even when used this way.
```
> db.users.remove();
```
__Exercise__: Remove all users who have 'Chennai Express' as one of their favorite movies.
- To drop a collection
```
> db.users.drop();
```
- To drop a database, first switch to the database and then drop it
```
> use mydb;
> db.dropDatabase();
```

<div>
    <a href="./02-databases-collections-and-documents.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-working-with-indexes.md">Next -></a>
</div>
