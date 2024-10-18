// A, B, C -> yes, I have a print() method
// A, B, C implement HasPrint interface -> HasPrint interface will ensure that A, B, C has a print method

// D can call print() on objects of A, B, C
// a.print()
// b.print()
// c.print()

interface ICanTalk {
    talk: (message: string) => void; // void -> the function returns / does not returns -> both are fine
}

class Human implements ICanTalk {
    talk(message: string) {
        console.log(message);
    }
}

class Dog implements ICanTalk {
    talk(message: string) {
        console.log("Bow wow!");
    }
}

const arr = [new Human(), new Dog()];

arr.forEach((animal) => animal.talk("Hello"));
