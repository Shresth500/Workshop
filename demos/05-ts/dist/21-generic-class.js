"use strict";
// ItemType extends { name: string } -> We restrict the allowed ItemType this way (in thic case it should have a name property that is a string)
class ShoppingCart {
    constructor(customerName, items = []) {
        this.customerName = customerName;
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    getItem(itemName) {
        return this.items.find((i) => i.name == itemName);
    }
    show() {
        console.log(this.items);
    }
}
const swiggyCart = new ShoppingCart("John");
swiggyCart.add({
    name: "Kota Kachori",
    price: 30,
    quantity: 10,
    customizationOption: "No sweet chutney",
});
swiggyCart.add({
    name: "Dhokla",
    price: 35,
    quantity: 5,
    customizationOption: "No imli chutney",
});
const item = swiggyCart.getItem("Dhokla");
// item.name // error
if (item !== undefined) {
    // type refinement
    console.log(item.name); // no error
}
// Instamart Cart
// EXERCISE: Add something specific in the type of an instamart item and create a shopping cart of such items
