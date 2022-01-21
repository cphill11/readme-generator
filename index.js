// TODO: Include packages needed for this application
// const inquirer required to run the inquirer package
const inquirer = require('inquirer');

// const fs required to run node.js fs module
const fs = require('fs');

// helps w/ file path & creating directory names
const path = require('path');

//
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the nature of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['MIT', 'Apache', 'GPU', 'Mozilla']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation instructions are required to run this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contibution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests will be needed to assess this application?'
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your github name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email you would like used for contact?'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers.title);
        writeToFile('newReadme.md', generateMarkdown({...answers}))

    })
}

// Function call to initialize app
init();