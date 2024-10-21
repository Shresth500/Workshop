"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age, nationality /*= 'Indian'*/, spouse) {
        this.nationality = "Indian";
        this.x = 100;
        this.name = name;
        this.age = age;
        if (nationality !== undefined) {
            this.nationality = nationality;
        }
        if (spouse !== undefined) {
            this.spouse = spouse;
        }
    }
    // name is readonly and we cannot change it
    // changeName(newName: string) {
    //     this.name = newName;
    // }
    celebrateBirthday() {
        ++this.age;
    }
}
exports.Person = Person;
const john = new Person("John Doe", 32);
john.celebrateBirthday();
const jane = new Person("Jane Doe", 28);
jane.celebrateBirthday();
console.log(john);
console.log(jane);
console.log(john.name);
console.log(john.age);
