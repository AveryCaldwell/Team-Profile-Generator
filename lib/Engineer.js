// Import the Employee Class
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
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
