interface IPerson {
    readonly name: string;
    age: number;
    spouse?: string; // optional property
    celebrateBirthday?: () => void;
}

const john: IPerson = {
    name: "John",
    age: 32,
    celebrateBirthday() {
        ++this.age;
    },
};

john.spouse = "Jane";

const jane: IPerson = {
    name: "Jane",
    age: 28,
};

// ++jane.age; // error because age is readonly

export {};
