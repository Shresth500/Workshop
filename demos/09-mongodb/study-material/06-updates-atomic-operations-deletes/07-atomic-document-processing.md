# Atomic document processing
findAndModify() helps implement basic transactional semantics, which greatly expand the range of applications you can build using MongoDB.

## Order State Transitions
- All state transitions have 2 parts: a query ensuring a valid initial state, and an update to change state.
- Say the user is about to click the Pay Now button to authorize the purchase. If
you're going to authorize the user's credit card synchronously on the application side,
you need to ensure these four things:
1. You authorize for the amount that the user sees on the checkout screen.
2. The cart's contents never change while in the process of authorization.
3. Errors in the authorization process return the cart to its previous state.
4. If the credit card is successfully authorized, the payment information is posted to the order, and the order's state is transitioned to PRE-SHIPPING.

## Prepare the order for checkout (CART -> PRE-AUTHORIZE state)
- The first step is to get the order into the new PRE-AUTHORIZE state. You use findAndModify to find the user's current order object and ensure that the object is in a CART state.
```
> newDoc = db.orders.findAndModify({
    query: {
        user_id: ObjectId("4c4b1476238d3b4dd5000001"),
        state: 'CART'
    },
    update: {
        $set: {
            state: 'PRE-AUTHORIZE'
        }
    },
    'new': true
});
```
By default, the findAndModify command returns the document as it appears prior to the update. To return the modified document, you must specify 'new': true.
- Once the order is in the PRE-AUTHORIZE state, the user won't be able to edit the cart's

## PRE-AUTHORIZE -> AUTHORIZING -> PRE-SHIPPING states
## Atomic document processing