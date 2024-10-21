"use strict";
// When you have types which are similar, but have some differences in the types that are used within them, you can use "Generics" to reduce the duplication of code
Object.defineProperty(exports, "__esModule", { value: true });
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
