// const inquirer required to run the inquirer package
const inquirer = require('inquirer');

// const fs required to run node.js fs module
const fs = require('fs');

// path module of node.js; helps w/ file & directory paths
const path = require('path');

// connects index.js to generateMarkdown.js
const generateMarkdown = require ('./utils/generateMarkdown');

// question array created to obtain user input
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
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['','Apache', 'GNU', 'MIT', 'BSD', 'Boost', 'Creative', 'Eclipse', 'Mozilla', 'The Unlicense']
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
        name: 'github',
        message: 'What is your github name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email you would like used for contact?'
    },
];

// function created to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function created to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers.title);
        writeToFile('newReadme.md', generateMarkdown({...answers}))
    })
}
// Function call used to initialize app
init();