# Modify by Replacement vs Modify by Operator

## Modify by Replacement (fetch document in first step, and update in second step)
To replace the document altogether, you first query for the document, modify it on the client side (shell), and then issue the update with the modified document. Let's say you want to update a user's email.
```
> user = db.users.findOne( { username: 'johndoe' } );
> user_id = user._id;
> user.email = 'johndoe@gmail.com';
> db.users.update( { _id: user_id }, doc )
```
It is important to remember that the update operation replaces the entire document, which is why it must be fetched first. If multiple users update the same document, the last write will be the one that will be stored.

## Modify by Operator (Atomic updates - query and update in one go)
Let's look at modification by operator
```
> user = db.users.findOne( { username: 'johndoe' } );
> user_id = user._id;
> db.users.update(
    { _id: user_id },
    {
        $set: {
            email: 'johndoe@gmail.com'
        }
    }
);
```
The example uses $set, one of several special update operators, to modify the email address in a single request to the server. In this case, the update request finds the given user document and set its email field to johndoe@gmail.com in one go.

__Notes__:
- You cannot combine modify by operator with modify by replacement style. The first update will not work. Instead use second - you HAVE TO use the update operators ($set, $addToSet etc. as may be the case) for each and every field you specify.
```
> // wrong
> db.users.update(
    { _id: user_id },
    {
        $set: {
            email: 'johndoe@gmail.com'
        },
        name: 'John Doe Junior'
    }
);
> // right
> db.users.update(
    { _id: user_id },
    {
        $set: {
            email: 'johndoe@gmail.com',
            name: 'John Doe Junior'
        }
    }
);
```
- By default, only first document matched is updated. To update all matched documents specify { multi: true } as third argument. Updates are atomic at a document level - if the following update matched 10 documents might, could failed after updating the first 3, leaving rest 7 untouched. The application has to deal with such failures according to its policy.
```
> db.products.update(
    {
        'pricing.sale' : {
            $lte: 1000
        }
    },
    {
        $addToSet: {
            tags: 'cheap'
        }
    },
    {
        multi: true
    }
);
```
- To insert an item if it does not exist, and update it if it does use { upsert: true } option. The new document’s attributes will be a merge of the query selector and the targeted update document. Supposing, no product has slug: 'hammer', the below update creates a new document with that slug and tags with array value [ 'cheap' ].
```
> db.products.update(
    {
        slug: 'hammer'
    },
    {
        $addToSet: {
            tags: 'cheap'
        }
    },
    {
        upsert: true
    }
);
```

## Another example
__Exercise__: Let's say you want to increment the number of reviews on a product. Can you do so using replacement? Say, the product id is ObjectId("4c4b1476238d3b4dd5003982");  

To do so by operator, we need the $inc operator, used so.
```
> db.products.update(
    { _id: ObjectId("4c4b1476238d3b4dd5003982") },
    {
        $inc: {
            total_reviews: 1
        }
    }
);
```  

## Choosing between the two
__Scenario 1__:
Imagine that your application presents an HTML form for modifying user information (say profile page with current user profile information pre-filled, so that user can make changes). With document replacement, data from the form post (modified profile details), once validated, can be passed right to MongoDB; the code to perform the update is the same regardless of which user attributes are modified. Hence updates by replacement makes sense here.  

__Scenario 2__:
If you need to increment a counter field (like the the total_reviews for product which needs to be updated when a new review is added) - updates via replacement are not good. What if the document changes in between when you read and write it? With targeted updates, you can use $inc to modify a counter atomically. This means that even with a large number of concurrent updates, each $inc will be applied in isolation, and the data integrity is preserved.   

__Notes__
- Atomic updates generally yield better performance as
    - There is no initial round-trip to the server to fetch the document to modify
    - Document specifying the update is generally small  
- Projection to fetch only part of a document is not an option in modify by replacement - since
the replacement step will end up losing information.

<div>
    <a href="./01-introduction-to-atomic-updates.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-update-operators.md">Next -></a>
</div>