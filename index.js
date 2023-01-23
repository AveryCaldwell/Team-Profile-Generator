const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/template.js');

// Function that pulls user input and inserts it into the HTML
const writeDoc = (documentTemplate) => {
  writeToFile('./team.html', documentTemplate);
};

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const documentTemplate = markdown(answers);
      writeDoc(documentTemplate);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(error);
      }
    });
}

// Function call to initialize app
init();
