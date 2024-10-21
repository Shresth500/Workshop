"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _10_class_1 = require("./10-class");
class Employee extends _10_class_1.Person {
    constructor(name, age, nationality, company, role, spouse) {
        super(name, age, nationality, spouse);
        this.company = company;
        this.role = role;
    }
    promote() {
        console.log(this.x); // protected members can be accessed in a subclass
        this.role = `Senior ${this.role}`;
    }
    celebrateBirthday() {
        super.celebrateBirthday(); // calling the Person class celebrateBirthday()
        console.log(`Enjoy dinner with this voucher at your favorite restaurant`);
    }
}
const john = new Employee("John Doe", 32, "Indian", "Ascendion", "Accountant");
john.celebrateBirthday();
const jane = new Employee("Jane Doe", 28, "Indian", "Ascendion", "Software Developer");
jane.celebrateBirthday();
jane.promote();
console.log(john);
console.log(jane);
