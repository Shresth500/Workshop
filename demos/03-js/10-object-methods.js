const john = {
    name: 'John Doe',
    "years old": 32,
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
    },
    // changeAddress: function (newPinCode, newCity) {
    changeAddress(newPinCode, newCity) {
        this.address.pinCode = newPinCode;

        if (newCity !== undefined) {
            this.address.city = newCity;
        }

        // this.address = {
        //     city: newCity,
        //     pinCode: newPinCode
        // };
    }
};

john.changeAddress(560029, 'Bengaluru');
john.changeAddress(560030); // newCity is undefined

// we can add methods after the object is created, just the way we add normal properties
john.celebrateBirthday = function () {
    ++this["years old"];
};

john.celebrateBirthday(); // now we can call this new method

console.log(john);
