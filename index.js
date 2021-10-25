const fs = require("fs");
const inquirer = require("inquirer");
const { inherits } = require("util");
const generateReadme = require("./utils/generateReadme.js");

//README Prompt Questions
const userQuestions = [
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
    type: 'input',
    name: 'installation',
    message: 'Please describe the process for instillation.',
    validate: projectInstillation => {
      if (projectInstillation) {
        return true;
      } else {
        console.log('Please include instillation instructions.');
        return false;
      }
    }
  },
//Tests 
{
    type: 'input',
    name: 'tests',
    message: 'Are you including any tests? Please provide.',
    validate: projectTests => {
      if (projectTests) {
        return true;
      } else {
        console.log('Please include any tests used for this project');
        return false;
      }
    }
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
    type: 'input',
    name: 'contributors',
    message: 'Please provide any contributors to your project.',
    validate: inputContributors => {
      if (inputContributors) {
        return true;
      } else {
        console.log('Please remember to include contributors, if any.');
        return false;
      }
    }
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
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter testing information for your project!');
          return false;
        }
      }
    }
  ];

  //function to write Readme
  const writeFile = readmeData => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', readmeData, err => {
    
        if (err) {
          reject(err);
      
          return;
        }
  
       
        resolve({
          ok: true,
          message: 'README.md file created!'
        });
      });
    });
  };


//Initialize app
function init() {
    return inquirer.prompt(userQuestions)
    .then (readmeData => {
      return generateReadme(readmeData)
    })
    .then (readmeData => {
      return writeFile(readmeData)
    })
    .catch(err => {
      console.log(err);
    });
}

init();