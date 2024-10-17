class Person {
    // readonly name: string;
    // age: number;
    // nationality = "Indian";
    // spouse?: string;

    constructor(
        public name: string,
        public age: number,
        private nationality: string = "Indian",
        public spouse?: string
    ) {
        // this.name = name;
        // this.age = age;
        // if (nationality !== undefined) {
        //     this.nationality = nationality;
        // }
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
// console.log(john.nationality); // error

export {};
