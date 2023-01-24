// Import the Employee Class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error(
                "Expected parameter 'github' to be a non empty string"
            );
        }
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        //overridden to return 'Engineer'
        return 'Engineer';
    }
}

module.exports = Engineer;
