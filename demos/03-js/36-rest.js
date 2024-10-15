// put as the last argument - already discussed

// array destructuring
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const [first, second, ...otherDays] = weekdays;
console.log(otherDays);

// pass on the other days to some other function for processing
// processOtherDays(otherDays);

// object destructuring
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
    address: {
        city,
        ...otherAddressDetails
    },
    ...otherDetails
} = john;

console.log(otherDetails, otherAddressDetails);