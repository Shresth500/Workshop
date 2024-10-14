const john = {
    name: 'John Doe',
    "years old": 32, // using special character in property / key names
    emails: [
        {
            type: 'personal',
            value: 'john.doe@example.com'
        },
        {
            type: 'official',
            value: 'john.doe@acsendion.com'
        }
    ],
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    }
};

console.log(john.name);
console.log(john['name']);

const key = 'name'; // value of this variable may be set at runtime
console.log(john[key]);

console.log(john["years old"]);

++john["years old"]; // yes, we can change even though john variable is const
console.log(john);

// error - cannot reassign to const variable
// john = {
//     name: 'Jonathan'
// };

// john.spouse = 'Jane Doe';
// we can add new properties at runtime
john.spouse = {
    name: 'Jane Doe',
    age: 28
};

console.log(john);

// we can remove properties at runtime
delete john["years old"];

console.log(john);