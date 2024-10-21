"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const john = {
    name: "John",
    age: 32,
    celebrateBirthday() {
        ++this.age;
    },
};
john.spouse = "Jane";
const jane = {
    name: "Jane",
    age: 28,
};
