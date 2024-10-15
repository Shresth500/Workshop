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

// const name = john.name, age = john['years old'], primaryEmail = john.emails[0].value,
// city = john.address.city, pinCode = john.address.pinCode;
const {
    name,
    'years old': age,
    emails: [
        {
            value: primaryEmail
        }
    ],
    address: {
        city,
        pinCode
    }
} = john;

console.log(name, age, primaryEmail, city, pinCode);