"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Write a function squareEach() that creates a new array with squares of numbers in a supplied array, and returns it. Type the function separately and assign the type to the function.
const squareEach = (arr) => {
    return arr.map((item) => item * item);
};
let result = squareEach([1, 2, 3, 4]);
console.log(result); // [ 1, 4, 9, 16 ]
const contains = (arr, value) => {
    return arr.includes(value);
};
console.log(contains([1, "hello", 3, true], 3)); // prints true
console.log(contains([1, "hello", 3, true], 5)); // prints false
const filter = (arr, filterFunction) => {
    return arr.filter(filterFunction);
};
function isOdd(x) {
    return x % 2 === 1;
}
let filteredList = filter([1, 2, 3, 4, 5, 6, 7, 8], isOdd); // [ 1, 3, 5, 7 ]
