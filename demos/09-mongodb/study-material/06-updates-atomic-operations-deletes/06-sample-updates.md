# Getting Started with Updates
We will solve data requirements of scenarios in the store application by executing updates.  

## Scenarios
__Scenario 1__: Updating a product when adding/removing a review for the product  
Because users need to sort product listings based on average product rating, you store that rating in the product document itself. Since a rating update is a small change on the product document, a targeted update is clearly the way to go when updating the rating whenever a review is added or removed. 
```
> product_id = ObjectId("4c4b1476238d3b4dd5003981")
> count = 0
> total = 0
> db.reviews.find(
    { product_id: product_id },
    { rating: 1 }
).forEach(
    function(review) {
        total += review.rating;
        count++;
    }
);
> average = total / count
> db.products.update(
    { _id: product_id },
    {
        $set: {
            total_reviews: count,
            average_review: average
        }
    }
);
```  
It's likely that more users will see product reviews than write their own, so it makes sense to compute average rating on a write (not making it a performance bottleneck). Other strategies are possible - you could store an extra field on the product document that caches the review ratings total, making it possible to compute the average incrementally. After inserting a new review, you'd first query for the product to get the current total number of reviews and the ratings total. Then you'd calculate the average and issue an update using a selector like the following
```
> db.products.update(
    { _id: product_id },
    {
        $set: {
            average_review: average,
            ratings_total: total
        },
        $inc: {
            total_reviews: 1
        }
    }
);
```  

__Scenario 2__: Review update when user upvotes a review  
You can record user votes on reviews using targeted updates. Use the $push operator to add the voter's ID to the list and the $inc operator to increment the total number of votes. To ensure that the update happens only if the voting user hasn't yet voted on this review, make use of the $ne operator.
```
> db.reviews.update(
    {
        _id: ObjectId("4c4b1476238d3b4dd5000041"),
        voter_ids: {
            $ne: ObjectId("4c4b1476238d3b4dd5000001")
        }
    },
    {
        $push: {
            voter_ids: ObjectId("4c4b1476238d3b4dd5000001")
        },
        $inc : {
            helpful_votes: 1
        }
    }
);
```
Voting, in this case, is both atomic and efficient.  

## Shopping Cart
We are going to see the MongoDB calls needed to implement an add_to_cart function using a targeted update. This is a three-step process. First, you construct the product document that you'll store in the order's line-item array. Then you issue a targeted update, indicating that this is to be an upsert.
Let's begin by constructing a sample document to add to the cart:
```
> cart_item = {
    _id: ObjectId("4c4b1476238d3b4dd5003981"),
    slug: "wheel-barrow-9092",
    sku: "9092",
    name: "Extra Large Wheel Barrow",
    pricing: {
        retail: 5897,
        sale: 4897
    }
};
```
You'll likely build this document by querying the products collection and then extracting whichever fields need to be preserved as a line item. Next you'll ensure that there's an order for the customer with a status of 'CART' using the parameter {upsert: true}. This operation will also increment the order sub_total using the $inc operator.
```
> selector = {
    user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    state: 'CART'
};
> update = {
    $inc: {
        sub_total: cart_item.pricing.sale
    }
};
> db.orders.update(
    selector,
    update,
    { upsert: true }
);
```  
The upsert will construct the initial CART document implied by the query selector including the update.
```
> {
    user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    state: 'CART',
    subtotal: 4897
};
```  
You then perform an update of the order document to add the line item if it's not already on the order:
```
> selector = {
    user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    state: 'CART',
    'line_items._id': { 
        $ne: cart_item._id
    }
};
> update = {
    $push: {
        line_items: cart_item
    }
};
> db.orders.update( selector, update );
```
Next you'll issue another targeted update to ensure that the item quantities are correct. You need this update to handle the case where the user clicks Add to Cart on an item that's already in the cart. In this case the previous update won't add a new item to the cart, but you'll still need to adjust the quantity.
```
> selector = {
    user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    state: 'CART',
    'line_items._id': ObjectId("4c4b1476238d3b4dd5003981")
};
> update = {
    $inc: {
        'line_items.$.quantity': 1
    }
};
> db.orders.update( selector, update );
```
We use the $inc operator to update the quantity on the individual line item. The update is facilitated by the positional operator, $ (which updates only the matched sub-document). Thus, after the user clicks Add to Cart twice on the wheelbarrow product, the cart should look like this.
```
{
    user_id: ObjectId("4c4b1476238d3b4dd5000001"),
    state: 'CART',
    line_items: [
        {
            _id: ObjectId("4c4b1476238d3b4dd5003981"),
            quantity: 2,
            slug: "wheel-barrow-9092",
            sku: "9092",
            name: "Extra Large Wheel Barrow",
            pricing: {
                retail: 5897,
                sale: 4897
            }
        }
    ],
    subtotal: 9794
}
```
There are now two wheelbarrows in the cart, and the subtotal reflects that.

<div>
    <a href="./02-modify-by-replacement-vs-modify-by-operator.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-update-operators.md">Next -></a>
</div>