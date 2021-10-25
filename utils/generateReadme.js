

function generateReadme(readmeData) {
  return `
  # ${readmeData.projectName}
  ## Description

  
  ${readmeData.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${readmeData.installation}
  ## Usage
  ${readmeData.usage}
  ## Credits
  ${readmeData.credits}
  
  ## License
  ${readmeData.licenses}

  ## Contribution
  ${readmeData.contributions}
  ## Tests
  ${readmeData.tests}
  ## Questions
  
  My GitHub username is ${readmeData.github}. To see my project, please go to: https://${readmeData.github}.github.io/${readmeData.projectName}
  and the link to this project's repository is https://github.com/${readmeData.github}/${readmeData.projectName}. The link to my GitHub profile is https://github.com/${readmeData.github}
  To contact me for any questions, comments or concerns email me at :${readmeData.email}. 
  ## ©️2021 ${readmeData.github}
`;
}

module.exports = generateReadme;