// Import the Employee Class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
            throw new Error(
                "Expected parameter 'office number' to be a non empty string"
            );
        }
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
