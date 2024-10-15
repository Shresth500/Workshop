function foo(x) {
    // this -> function's context
    console.log(this);
    console.log(x);
}

// this is set to the global object
foo();

// helps us to call he function with a different context
foo.call({ name: 'John' }, 100);

console.clear();

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        ++this.age;
    }
};

john.celebrateBirthday();

console.log(john);

const jane = {
    name: 'Jane',
    age: 28,
};

john.celebrateBirthday.call(jane);

console.log(jane);

// PRESENTATION: call(), apply() and bind(). What are these methods? What is the difference between them?
