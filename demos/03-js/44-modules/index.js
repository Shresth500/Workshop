import Emp, { EmployeeTypes as ET } from './Employee.js';
// import * as E from './Employee.js'
// E.EmployeeTypes

const john = new Emp('John Doe', 32, 'Indian', 'Ascendion', 'Accountant');
john.celebrateBirthday();

const jane = new Emp('Jane Doe', 28, 'Indian', 'Ascendion', 'Software Developer');
jane.celebrateBirthday();

jane.promote();

console.log(john);
console.log(jane);