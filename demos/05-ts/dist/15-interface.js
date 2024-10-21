"use strict";
// A, B, C -> yes, I have a print() method
// A, B, C implement HasPrint interface -> HasPrint interface will ensure that A, B, C has a print method
class Human {
    talk(message) {
        console.log(message);
    }
}
class Dog {
    talk(message) {
        console.log("Bow wow!");
    }
}
class Fish {
}
// if we include fish, then we cannot iterate through arr and call talk()
const arr = [new Human(), new Dog() /*, new Fish()*/];
arr.forEach((animal) => animal.talk("Hello"));
