// 2. Write a function squareEach() that creates a new array with squares of numbers in a supplied array, and returns it. Type the function separately and assign the type to the function.
const squareEach = (arr: number[]) => {
    return arr.map((item) => item * item);
};

let result = squareEach([1, 2, 3, 4]);
console.log(result); // [ 1, 4, 9, 16 ]

// 3. Write a function contains() that accepts an array that can have any primitive value, and another primitive value as the second argument, and returns true if the second argument appears in the array, and false otherwise.
type NBS = number | boolean | string;

const contains = (arr: NBS[], value: NBS): boolean => {
    return arr.includes(value);
};

console.log(contains([1, "hello", 3, true], 3)); // prints true
console.log(contains([1, "hello", 3, true], 5)); // prints false

// Write a function filter() that accepts an array and another function f (which returns a boolean value). The filter function should work like so.
type FilterFunction = (x: number) => boolean;

const filter = (arr: number[], filterFunction: FilterFunction) => {
    return arr.filter(filterFunction);
};

function isOdd(x: number): boolean {
    return x % 2 === 1;
}

let filteredList = filter([1, 2, 3, 4, 5, 6, 7, 8], isOdd); // [ 1, 3, 5, 7 ]

export {};
