

function generateReadme(readmeData) {
  return `
  # ${readmeData.title}
  ## Description
  ${readmeData.description}


  ## Table of Contents
  * [Description] (#description)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Licenses](#licenses)

  

  ## Description
  ${readmeData.description}

  ## Installation
  ${readmeData.installation}

  ## Tests
  ${readmeData.tests}

  ## Usage
  ${readmeData.usage}

  ## Contributors
  ${readmeData.contributors}

  ## Licenses
  ${readmeData.licenses}
  ## Questions
  
  My GitHub username is ${readmeData.github}.
  My GitHub profile: https://github.com/${readmeData.github}
  To contact me for any questions, comments or concerns email me at :${readmeData.email}. 

`;
}

module.exports = generateReadme;