class Person {
    // name;
    // age;
    nationality = 'Indian';

    constructor(name, age, nationality /*= 'Indian'*/) {
        this.name = name;
        this.age = age;

        if (nationality !== undefined) {
            this.nationality = nationality;
        }
    }

    celebrateBirthday() {
        ++this.age;
    }
}

const john = new Person('John Doe', 32);
john.celebrateBirthday();

const jane = new Person('Jane Doe', 28);
jane.celebrateBirthday();

console.log(john);
console.log(jane);