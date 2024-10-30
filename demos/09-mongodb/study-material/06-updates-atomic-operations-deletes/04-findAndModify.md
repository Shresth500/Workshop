# findAndModify
- The findAndModify command atomically updates a document and return it in the same round-trip. No other operation can interrupt the update.
- Every update in MongoDB is atomic, but findAndModify also atomically returns the document to you. If you fetch and then update a document (or update then fetch it), there can be changes made to the document by another MongoDB user in between those operations. Thus it's impossible to know the true state of the document you updated, before or after the update, even though the update is atomic, unless you use findAndModify.
- The findAndModify command eliminates the need for transactions in many cases - example order state transitions during order checkout process.
```
> doc = db.orders.findAndModify({
    query: {
        user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    },
    update: {
        $set: {
            state: "AUTHORIZING"
        }
    }
});
> doc // displays how the document was just before it was updated
```
__Note__: The command updates only the first match in case of multiple matches.

## Options
Apart from _query_ and _update_, the following are some of the options that may also be passed.
- _new_: By default, the findAndModify command returns the document as it appears prior to the update. To return the modified document, you must specify new: true
- _remove_: Setting remove: true removes the document and returns it. The update is not passed in this case
- _upsert_: When set to true, treats findAndModify as an upsert. If the document queried does not exist, it will be created. If you want to return the newly created document, you also need to specify { new: true }.
- _sort_: A document specifying a sort direction. Because findAndModify will modify only one document, the sort option can be used to help control which matching document is processed.
- _fields_ — If you only need to return a subset of fields, use this option

__Exercise__: Suppose the user's credit card information is verified during the checkout process. The relevant API for authorization returned the following details about the user's credit card.
```
{
    type: 'MASTERCARD',
    active: true,
    expires: '2020-10-25'
}
```
Write a query to update the order to AUTHORIZED state. Make sure to do the state change ONLY IF current state is AUTHORIZING. Also store the information returned by the API in a subdocument (say, in a new field called authorization_result).

<div>
    <a href="./03-update-operators.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./05-deletes.md">Next -></a>
</div>