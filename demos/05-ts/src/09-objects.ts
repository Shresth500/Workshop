type Person = {
    name: string;
    readonly age: number;
    spouse?: string; // optional property
};

const john: Person = {
    name: "John",
    age: 32,
};

john.spouse = "Jane";

const jane: Person = {
    name: "Jane",
    age: 28,
};

// ++jane.age; // error because age is readonly
