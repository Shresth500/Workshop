const primes = [2, 3, 5, 7, 11];

primes.push(13);
console.log(primes);

let num = primes.pop();
console.log('popped', num);
console.log(primes);

primes.unshift(1);
console.log(primes);

num = primes.shift();
console.log('shifted', num);
console.log(primes);

// splice() -> index, how many to delete
const removed = primes.splice(2, 1);
console.log('removed', removed);
console.log(primes);

// wherever you remove you can add new numbers
primes.splice(2, 0, 5, 6);
console.log(primes);

console.clear();

// slice() -> to get a subarray
console.log(primes.slice(2, 5));
console.log(primes);

// reverse()
// includes()
// indexOf()

// join()
const namesArr = ['Debasis', 'Sujan', 'Charu'];
console.log(namesArr.join(" | "));

namesArr.sort();
console.log(namesArr);

const numbersArr = [20, 56, 34, 12, 90, 76, 100, 48, 22, 45, 37];
numbersArr.sort((x, y) => {
    if (x < y) {
        return -1;
    } else if (x === y) {
        return 0;
    } else {
        return 1;
    }
});
console.log(numbersArr);

const persons = [
    {
        name: 'John',
        age: 32
    },
    {
        name: 'Jane',
        age: 28
    },
    {
        name: 'Mark',
        age: 14
    },
    {
        name: 'Mary',
        age: 60
    },
]

persons.sort(
    (personA, personB) => {
        if (personA.age < personB.age) {
            return -1
        } else if (personA.age === personB.age) {
            return 0;
        } else {
            return 1;
        }
    }
);

console.log(persons);