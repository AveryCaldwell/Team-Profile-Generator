const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/template.js');

// Function that inserts data into generated file unless there is an error
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Successfully generated index.html file!');
        }
    });
}
// Function that pulls user input and inserts it into the HTML
const writeDoc = (documentTemplate) => {
    writeToFile('./dist/index.html', documentTemplate);
};

// Function that returns questions based on memberRole
function teamQuestions(memberRole) {
    memberObj = {
        Manager: {
            role: 'Team Manager',
            keyName: 'office number',
        },
        Engineer: {
            role: 'Engineer',
            keyName: 'GitHub',
        },
        Intern: {
            role: 'Intern',
            keyName: 'school',
        },
    };
    return [
        {
            name: 'name',
            message: `Enter ${memberObj[memberRole].role}'s Name:`,
            type: 'input',
        },
        {
            name: 'id',
            message: `Enter ${memberObj[memberRole].role}'s Employee ID:`,
            type: 'input',
        },
        {
            name: 'email',
            message: `Enter ${memberObj[memberRole].role}'s Email Address:`,
            type: 'input',
        },
        {
            name: 'key',
            message: `Enter ${memberObj[memberRole].role}'s ${memberObj[memberRole].keyName}:`,
            type: 'input',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add a team member?:',
            choices: ['Engineer', 'Intern', 'No (Finalize Team)'],
        },
    ];
}
// Fuction to add a new team member
function newTeamEntry(memberRole) {
    inquirer
        .prompt(teamQuestions(memberRole))
        .then((answers) => {
            if (memberRole === 'Intern') {
                data.push(
                    new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.key
                    )
                );
            } else {
                data.push(
                    new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.key
                    )
                );
            }
            if (answers.addMember !== 'No (Finalize Team)') {
                newTeamEntry(answers.addMember);
            } else {
                const documentTemplate = generateTeam(data);
                writeDoc(documentTemplate);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error);
            } else {
                console.log(error);
            }
        });
}
let data = [];

// Function to initialize app
function init() {
    inquirer
        .prompt(teamQuestions('Manager'))
        .then((answers) => {
            // console.log(answers);
            data.push(
                new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.key
                )
            );
            if (answers.addMember !== 'No (Finalize Team)') {
                newTeamEntry(answers.addMember);
            } else {
                const documentTemplate = generateTeam(data);
                writeDoc(documentTemplate);
            }
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
