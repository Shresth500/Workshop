const primes = [2, 3, 5, 7, 11];
console.log(primes.length); // 5

console.log(primes[0] + primes[1] + primes[2] + primes[3] + primes[4]); // 28

console.log(primes[5]); // not an error -> undefined

// What is undefined - it is a special value
let a; // undefined (unitialized variables gets this by default)
console.log('a = ', a);
console.log(a === undefined);

primes[5] = 13;
console.log(primes);

// Arrays are sparse - you can have empty values in between
primes[10] = 29;
console.log(primes);

// check out what primes[8] gives you
// ...

// with const for arrays, the array items can be manipulated. But the variable primes cannot be assigned anything else.
// primes = [31, 37, 41]; // error -> cannot reassign the variable `primes`

// Array can have values of mixed data type
primes[primes.length] = 31;
primes.push(37); // add to the end of the array using push();
console.log(primes);

// Explore how you can create 2, and higher dimension arrays