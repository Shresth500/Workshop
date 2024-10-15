// ... -> spread
// to copy array items as comma-separated value
const primes = [2, 3, 5, 7, 11];
const anotherPrimes = primes; // copy by reference
anotherPrimes.push(13);

// const yetAnotherPrimes = [ primes[0], primes[1], primes[2], primes[3], primes[4] ]
const yetAnotherPrimes = [...primes];
yetAnotherPrimes.push(17);

console.log(primes);
console.log(yetAnotherPrimes);

const persons = [
    {
        name: 'John',
        city: 'Chennai',
        age: 32
    },
    {
        name: 'Jane',
        city: 'Bengaluru',
        age: 28
    },
    {
        name: 'Mark',
        city: 'Noida',
        age: 14
    },
    {
        name: 'Mary',
        city: 'Kolkata',
        age: 60
    },
];

// const personsCopy = [ persons[0], persons[1], persons[2], persons[3] ]
const personsCopy = [...persons];

++personsCopy[0].age;
console.log(persons[0]);

personsCopy.push({
    name: 'Anna',
    city: 'Mumbai',
    age: 10
});

console.log(persons);
console.log(personsCopy);

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


// to copy object key-value pairs to another object