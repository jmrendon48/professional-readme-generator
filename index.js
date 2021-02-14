// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// create page with sections
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter description of your project.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter instructions on how to install your application?',
        default: true
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Enter instructions on how to install your application.',
        when: ({ confirmInstallation }) => {
            if (confirmAbout) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions on how to use the application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Enter guidelines for how you would like others to contribute to the application.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter guidelines for future contribution.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to provide tests for your application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests written for your application, providing examples on how to run them.',
        when: ({ confirmTests }) => {
            if (confirmAbout) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'Apache License 2.0',
            'Boost Software License 1.0',
            'GNU AGPL v3',
            'GNU GPL v3',
            'GNU LGPL v3',
            'GNU FDLv 1.3',
            'ISC',
            'Mozilla Public License 2.0',
            'MIT License',
            'N/a'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username, which a link to the respective profile will provided for.',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address.');
                return false;
            }
        }
    },
];

// TODO: Create a functon to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('./index.html', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });
    })
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
};

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data);
    });
