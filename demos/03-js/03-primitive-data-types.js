let quantity = 3;
console.log(typeof quantity); // "number" | "string" | "boolean"

quantity = "Three";
console.log(typeof quantity); // "number" | "string" | "boolean"

const message1 = 'Single-quoted';
const message2 = "Double-quoted";
const message3 = `Backtick-quoted
string`; // ES2015

console.log(message1);
console.log(message2);
console.log(message3);

// string interpolation - supported only in backtick-quoted string
// const message4 = `The number of items =` + quantity + ". Please confirm it is correct."
const message4 = `The number of items = ${quantity}. Please confirm it is correct.`;
console.log(message4);

console.log(message4.length);
console.log(message4[5]); // 6th character = "u"

let isRaining = true;
console.log(typeof isRaining); // "boolean"