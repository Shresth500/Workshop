const phoneEl = document.getElementById('phone');
const phoneErrorEl = document.getElementById('phone-error');
let phoneElTouched = false;

// regular expressions for pattern matching in strings
// const mobilePhonePat = /[6-9][0-9]{9}/;
// ^ -> match from the first character
// $ -> match till the last character
const mobilePhonePat = /^[6-9][0-9]{9}$/;

console.log(mobilePhonePat.test("9123456780")); // true
console.log(mobilePhonePat.test("5123456780")); // false
console.log(mobilePhonePat.test("912345678")); // false
// console.log(mobilePhonePat.test("912345678012")); // true if substring match is allowed
console.log(mobilePhonePat.test("912345678012")); // false

function validatePhone() {
    console.log(this); // same as phoneEl

    // input DOM node - <input />, <select></select>, <textarea></textarea>, have a property called value
    console.log(this.value);

    const value = this.value;

    if (phoneElTouched) {
        const errorEl = this.nextElementSibling;

        if (value == '') {
            errorEl.innerText = 'Phone number is required';
        } else if (mobilePhonePat.test(value)) {
            errorEl.innerText = '';
        } else {
            errorEl.innerText = 'Phone number is not valid. It should have 10 digits.'
        }
    }
}

phoneEl.addEventListener('input', validatePhone);
// phoneEl.addEventListener('blur', validatePhone );

phoneEl.addEventListener('blur', function () {
    phoneElTouched = true;

    validatePhone.call(phoneEl);
});

console.log('script finished execution');