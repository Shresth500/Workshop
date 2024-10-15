// array iterators - they go through the array items one-by-one
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

// array forEach - to iterate through the array and do something on each item
persons.forEach(
    item => {
        ++item.age;
        console.log(item);
    }
);

console.log(persons);

// array map
const personNames = persons.map(p => {
    return {
        name: p.name,
        city: p.city
    };
});
console.log(persons);
console.log(personNames);

// array filter
const ageLessThan30 = persons.filter(
    p => p.age < 30
);
console.log(ageLessThan30);

// gets the first matching item
const firstPersonLessThan30Years = persons.find(
    p => p.age < 30
);
console.log(firstPersonLessThan30Years);

// names of persons less than 30 years
const namesOfPersonsLessThan30 = persons
    .filter(p => p.age < 30)
    .map(p => p.name);

console.log(namesOfPersonsLessThan30);

// array reduce
// EXERCISE

