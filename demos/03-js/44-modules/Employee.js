import { Person } from './Person.js';

/*export default */class Employee extends Person {
    constructor(name, age, nationality, company, role) {
        super(name, age, nationality);

        this.company = company;
        this.role = role;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log(`Enjoy dinner with this voucher at your favorite restaurant`);
    }
}

const EmployeeTypes = ['Regular', 'Contract']

// named export
export {
    Employee as default,
    EmployeeTypes
}