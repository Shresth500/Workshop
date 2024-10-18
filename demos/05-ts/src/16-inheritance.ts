import { Person } from "./10-class";

class Employee extends Person {
    constructor(
        name: string,
        age: number,
        nationality: string,
        public company: string,
        public role: string,
        spouse?: string
    ) {
        super(name, age, nationality, spouse);
    }

    promote() {
        console.log(this.x); // protected members can be accessed in a subclass
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday(); // calling the Person class celebrateBirthday()
        console.log(
            `Enjoy dinner with this voucher at your favorite restaurant`
        );
    }
}

const john = new Employee("John Doe", 32, "Indian", "Ascendion", "Accountant");
john.celebrateBirthday();

const jane = new Employee(
    "Jane Doe",
    28,
    "Indian",
    "Ascendion",
    "Software Developer"
);
jane.celebrateBirthday();

jane.promote();

console.log(john);
console.log(jane);
