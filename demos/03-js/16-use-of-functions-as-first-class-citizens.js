// A function can "outsource" some of its work to another function
function greet(person) {
    const title = person.gender === 'female' ? 'Ms.' : 'Mr.';
    console.log(`Hello ${title} ${person.name}`);
}

const john = {
    name: 'John',
    gender: 'male'
};

greet(john);

const jane = {
    name: 'Jane',
    gender: 'female'
};

greet(jane);