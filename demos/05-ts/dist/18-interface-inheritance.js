"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _10_class_1 = require("./10-class");
// one class can implement multiple interfaces
class TriathlonAthlete {
    cycle(speedInMS, distanceInKms) {
        return (distanceInKms * 1000) / speedInMS;
    }
    swim(speedInMS, distanceInKms) {
        return (distanceInKms * 1000) / speedInMS;
    }
    run(speedInMS, distanceInKms) {
        return (distanceInKms * 1000) / speedInMS;
    }
}
const john = new TriathlonAthlete();
console.log(john);
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
function f(arr) {
    console.log(arr[0].name);
}
