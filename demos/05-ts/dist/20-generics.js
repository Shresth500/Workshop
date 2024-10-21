"use strict";
// When you have types which are similar, but have some differences in the types that are used within them, you can use "Generics" to reduce the duplication of code
const pen = {
    name: "Hero Pen",
    price: 50,
};
const phone = {
    name: "Samsung Note 10",
    price: {
        baseAmount: 40000,
        tax: 5000,
    },
};
const xiaomiPhone = {
    name: {
        productName: "Note",
        manufacturerName: "Xiaomi",
    },
    price: {
        baseAmount: 15000,
        tax: 3000,
    },
};
