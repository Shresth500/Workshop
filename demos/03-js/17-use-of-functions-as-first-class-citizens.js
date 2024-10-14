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