var x = 1; // number
var x = 2;

let z = 101;
// let z = 102; // redeclaration not allowed in let

// const variables must be initialized
const usdToInr = 83.8; // number
usdToInr = 84; // error - cannot change the value


if (true) {
    var y = 10; // not block scope -> in this case it is global
    let a = 1001; // is block-scoped
}

console.log('x =', x);
console.log('y =', y);
console.log('a =', a); // error