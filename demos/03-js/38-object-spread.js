// to copy object key-value pairs to another object
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

// primitive value -> copy by value
// non-primitive value -> copy by reference
const johnCopy = {
    spouse: 'Jane',
    ...john, // name: john.name, 'years old': john['years old'], emails: john.emails, address: john.address
    address: {
        ...john.address
    },
    // emails: [
    //     ...john.emails
    // ],
    emails: john.emails.map(emailObj => {
        return {
            ...emailObj
        };
    })
};

++johnCopy['years old'];
johnCopy.emails.push({
    type: 'personal',
    value: 'john.doe@gmail.com'
});
johnCopy.emails[0].type = 'official';
johnCopy.address.pinCode = 560001;

console.log(john);
console.log(johnCopy);