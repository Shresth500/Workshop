// using hardcoded values as types - "type literal"
type Person = {
    name: string;
    gender: "male" | "female"; // string
};

type TitleCreator = (p: Person) => string;

// syntax 1
function greet(person: Person, getTitle: TitleCreator) {
    const title = getTitle(person);
    console.log(`Hello ${title} ${person.name}`);
}

const john: Person = {
    name: "John",
    gender: "male",
};

// syntax 1
// const getEnglishTitle = (person: Person): string => {
//     return person.gender === "female" ? "Ms." : "Mr.";
// };

// syntax 2
const getEnglishTitle: TitleCreator = (person) => {
    return person.gender === "female" ? "Ms." : "Mr.";
};

greet(john, getEnglishTitle);

// --- EXERCISE ---
function sum(getValue, ...numbers) {
    let result = 0;

    for (let num of numbers) {
        result += getValue(num);
    }

    return result;
}

console.log(sum((x) => x, 1, 2)); // 3
console.log(sum((x) => x * x, 1, 2)); // 5
console.log(sum((x) => x * x, 1, 2, 3)); // 14

console.log(sum((x) => x * x * x, 1, 2, 3)); // 36

console.log(sum(Math.sqrt, 1, 2, 3)); // 4.146264369941973
console.log(sum(Math.log, 1, 2, 3)); //

export {};
