function greet(message, name) {
    console.log(`${message} ${name}!`);
}

greet('Hello', 'World');
greet(); // message -> undefined, name -> undefined
greet('Hello');

// the function that exists without explicitly returning anything, returns undefined
const result = greet('Hello', 'World', 'How are you'); // message -> 'Hello', name -> 'World'
console.log(result);

// the new way of using any number of arguments
// `extra` argument is called a rest parameter
// ... -> rest operator
function greet2(message, name, ...extra) {
    console.log('extra = ', extra);
    console.log(`${message} ${name}!`);
}

greet2('Hello', 'World'); // extra -> []
greet2('Hello', 'World', 'How are you'); // extra -> [ 'How are you' ]
greet2('Hello', 'World', 'How are you', 'Hope good'); // extra -> [ 'How are you', 'Hope good' ]

// EXERCISE: Write a function that accepts any number of arguments and returns their sum
// sum() -> 0
// sum( 1 ) -> 1
// sum( 1, 2 ) -> 3
// sum( 1, 2, 3 ) -> 6
// sum( 1, 2, 3, 4 ) -> 10

function sum(...args) {
    console.log(args);

    let result = 0;

    // arrays are 'iterables' -> use for..of loop to loop through iterables
    for (let item of args) {
        result += item;
    }

    return result;
}

console.log(sum()); // []
console.log(sum(1)); // [ 1 ]
console.log(sum(1, 2)); // [ 1, 2 ]
console.log(sum(1, 2, 3)); // [ 1, 2, 3 ]
console.log(sum(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]