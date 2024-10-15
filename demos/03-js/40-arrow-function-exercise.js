const payroll = {
    employees: [
        { name: 'John', dept: 'IT', salary: 1000 },
        { name: 'Maria', dept: 'Finance', salary: 2000 },
        { name: 'David', dept: 'Finance', salary: 3000 }
    ],
    hikePercentage: {
        IT: 10,
        Finance: 20
    },
    raise: function () {
        // let that = this;

        this.employees.forEach((employee) => { // we must use arrow function in order to carry the "this" from the raise() function to this inner iterator function
            const dept = employee.dept;

            const salary = employee.salary;

            console.log('this =', this);

            // const hikePercentage = that.hikePercentage[dept];
            const hikePercentage = this.hikePercentage[dept];

            employee.salary = ((100 + hikePercentage) / 100) * salary;
        });
    }
}

payroll.raise();
console.log(payroll.employees);