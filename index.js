const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");

//README Prompt Questions
const promptUser = () => {
    return inquirer.prompt([
//Prompt for title of application  for  README
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter the title of your project.');
        return false;
      }
    }
  },
// Description
{
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.',
    validate: projectDescription => {
      if (projectDescription) {
        return true;
      } else {
        console.log('Please include a description of your project.');
        return false;
      }
    }
  },

// Instillation Instructions
{
    type: 'confirm',
    name: 'IncludeInstillation',
    message: 'Would you like to include instillation instructions?',
    default: true
  },
  {
    type: 'input',
    name: 'InstillationInstructions',
    message: 'Please provide a description of the instillation process',
    when: ({ confirmInstillation }) => confirmInstillation
  },
//Tests 
{
    type: 'confirm',
    name: 'tests',
    message: 'Would you like to provide any tests to be included in readme?',
    default: true
  },
  {
    type: 'input',
    name: 'includeTests',
    message: 'Please detail any tests that will be included.',
    when: ({ confirmTests}) => confirmTests
  },

//Usage
{
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please explain how this project can be used.');
        return false;
      }
    }
  },
 
//Contributing
{
    type: 'confirm',
    name: 'contributors',
    message: 'Would you like to include any contributors',
    default: true
  },
  {
    type: 'input',
    name: 'includeContributors',
    message: 'Who are the contributors to this project?',
    when: ({ confirmContributors}) => confirmContributors
  },

//List of License for Application
{
    type: 'list',
    name: 'licenses',
    message: 'Please select the license for your project.',
    choices: ['GNU', 'Apache', 'MIT', 'Mozilla', 'ISC', 'Boost']
  },
//Github Username
{
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please provide your Github username.');
        return false;
      }
    }
},
//Email Address
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address.',
  }
]);
};

//Questions

//Generate Table of Contents

//Generate Readme File
