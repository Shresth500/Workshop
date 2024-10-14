// A function can "outsource" some of its work to another function

// We would like to outsource the title generation logic
function greet(person, getTitle) {
    const title = getTitle(person);
    console.log(`Hello ${title} ${person.name}`);
}

const john = {
    name: 'John',
    gender: 'male'
};

const getEnglishTitle = (person) => person.gender === 'female' ? 'Ms.' : 'Mr.';
// const getFrenchTitle = (person) => person.gender === 'female' ? 'Madame' : 'Monsieur';

greet(john, getEnglishTitle);

// just like you can create object etc. immediately and pass to a function, we can create a function immediatey and pass to a function
greet(
    { // created object and passed
        name: 'Jane',
        gender: 'female'
    },
    (person) => person.gender === 'female' ? 'Madame' : 'Monsieur' // created function and passed
);

// EXERCISE:
function sum(getValue, ...numbers) {
    let result = 0;

    for (let num of numbers) {
        result += getValue(num);
    }

    return result;
}

console.log(sum(x => x, 1, 2)); // 3
console.log(sum(x => x * x, 1, 2)); // 5
console.log(sum(x => x * x, 1, 2, 3)); // 14

console.log(sum(x => x * x * x, 1, 2, 3)); // 36

console.log(sum(Math.sqrt, 1, 2, 3)); // 4.146264369941973
console.log(sum(Math.log, 1, 2, 3)); //
