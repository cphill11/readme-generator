// Function created that returns a license badge based on which license is passed in; if there is no license, an empty string is returned
function renderLicenseBadge(license) {
      if (license != '')  { 
      return `![github license](https://img.shields.io/badge/License-${license}-blue.svg)`
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string; this is completed in Table of Contents
function renderLicenseLink(license) {
  if (license != '') {
    return `* [License](#license)`
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string; this is completed in Table of Contents
function renderLicenseSection(license) {
  if (license != '') {
    return `## License
    ${license}
    Licensed software establishes the rights of all parties involved with the software, including: the author, the provider, and end users.  Licenses protect intellectual properties by limiting the liability of the vendor and limiting what other parties can do with covered software code.`
  } else {
    return '';
  }
}
// Function created that returns a license badge based on which license is passed in; if there is no license, an empty string is returned
function renderTestLink(tests) {
  if (tests != '')  { 
  return `* [Tests](#tests)`
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string; this is completed in Table of Contents
function renderTestSection(tests) {
if (tests != '') {
return `## Tests 
    ${tests}`
} else {
return '';
}
}


// Function created to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  ${renderTestLink(data.tests)}
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}


  ## Contribution
  ${data.contribution}

  ${renderTestSection(data.tests)}

  ## Questions

  If you have any questions, please contact me through email at ${data.email} or through github at ${data.github}.
`;
}

module.exports = generateMarkdown;
