"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, nationality /*= 'Indian'*/, spouse) {
        this.nationality = "Indian";
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
const john = new Person("John Doe", 32);
john.celebrateBirthday();
const jane = new Person("Jane Doe", 28);
jane.celebrateBirthday();
console.log(john);
console.log(jane);
console.log(john.name);
console.log(john.age);
