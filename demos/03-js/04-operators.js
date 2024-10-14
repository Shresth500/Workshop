// arithmetic operators - +, -, *, /, %, **
const x = 30, y = 4;

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(x / y); // 7.5
console.log(x % y); // 2
console.log(3 ** 4); // 81

// relational operators
console.log(2 < 3);
console.log(3 <= 3);
console.log(3 == 1 + 2); // do not use ==
console.log(3 != 4); // use !==

console.log(3 == "3"); // true - do not use ==
console.log(3 === "3"); // false

console.clear();

// logical operators
console.log(!true); // false
console.log(true && false); // false
console.log(1 < 2 && 2 < 3); // true
console.log(2 < 1 && 2 < 3); // false (checks only 2 < 1 and stops) - short-circuit evluation
// similarly ||

// equivalent of false - if( values ) {} - "falsy" value
// false, 0, "", null, undefined, NaN - any other value is  truthy
// Truthy -> " ", [], {}, -1, 0.5, any function
let a = 0;
if (a) {
    console.log('a = 0 is truthy');
} else {
    console.log('a = 0 is falsy');
}

// expression with logical operator can have non-boolean type
console.log(1 && 2); // 2
console.log(0 && 2); // 0

console.log(1 || 2); // 1
console.log(0 || 2); // 2
console.log("" || 0); // 0

console.log(a === 0 ? "a is zero" : "a is non-zero");