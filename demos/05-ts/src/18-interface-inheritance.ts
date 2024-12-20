import { Person } from "./10-class";

interface ICanCycle {
    cycle: (speedInMS: number, distanceInKms: number) => number;
}

interface ICanSwim {
    swim: (speedInMS: number, distanceInKms: number) => number;
}

interface ICanRun {
    run: (speedInMS: number, distanceInKms: number) => number;
}

// one class can implement multiple interfaces
class TriathlonAthlete implements ICanCycle, ICanSwim, ICanRun {
    cycle(speedInMS: number, distanceInKms: number) {
        return (distanceInKms * 1000) / speedInMS;
    }

    swim(speedInMS: number, distanceInKms: number) {
        return (distanceInKms * 1000) / speedInMS;
    }

    run(speedInMS: number, distanceInKms: number) {
        return (distanceInKms * 1000) / speedInMS;
    }
}

const john = new TriathlonAthlete();
console.log(john);

// --------

// interface-interface inheritance
interface IPerson {
    readonly name: string;
    age: number;
    spouse?: string; // optional property
    celebrateBirthday?: () => void;
}

interface IEmployee extends IPerson {
    company: string;
    role: string;
    promote: () => void;
}

class Employee extends Person implements IEmployee {
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

function f(arr: IPerson[]) {
    console.log(arr[0].name);
}
