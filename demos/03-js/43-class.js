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

// Person - Base class
// Employee - Derived class
class Employee extends Person {
    constructor(name, age, nationality, company, role) {
        super(name, age, nationality);

        this.company = company;
        this.role = role;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday(); // calling the Person class celebrateBirthday()
        console.log(`Enjoy dinner with this voucher at your favorite restaurant`);
    }
}

const john = new Employee('John Doe', 32, 'Indian', 'Ascendion', 'Accountant');
john.celebrateBirthday();

const jane = new Employee('Jane Doe', 28, 'Indian', 'Ascendion', 'Software Developer');
jane.celebrateBirthday();

jane.promote();

console.log(john);
console.log(jane);