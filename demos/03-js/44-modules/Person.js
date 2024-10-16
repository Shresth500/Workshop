export class Person {
    nationality = 'Indian';

    constructor(name, age, nationality) {
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

// export {
//  Person
// }