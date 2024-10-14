// sum -> refers to the function in memory
function sum(x, y) {
    return x + y;
}

const add = sum; // we are copying sum into variable add (by reference)

console.log(add(12, 13)); // 25

// WE CAN PASS A FUNCTION AS AN ARGUMENT TO ANOTHER FUNCTION
// Functions are "first-class citizens" in JavaScript
function execute(fn, x, y) {
    return fn(x, y);
}

const result = execute(sum, 12, 13); // fn = sum
console.log(result);