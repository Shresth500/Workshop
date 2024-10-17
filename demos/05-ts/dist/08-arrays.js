"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// an array of ( number | string ) items (NS items)
let chequeAmounts = [];
chequeAmounts.push("Twenty thousand");
chequeAmounts.push(30000);
// chequeAmounts.push(true); // error
// distance is either a number or an array of string
let distances = [];
// distances.push( 10 ); // error
let distances2 = [];
distances2.push(10);
distances2.push("Twenty");
// distances2.push(true); // error
// type assertion (same as type casting in other languages)
let distances3 = [];
distances3.push(10);
// distances3.push("Twenty"); // error
distances3 = ["Twenty"];
// distances3.push( 40 ); // error
