// Function created that returns a license badge based on which license is passed in; if there is no license, an empty string is returned; untagged template literals allows for string interpolation and multiline strings
function renderLicenseBadge(license) {
      if (license != '')  { 
      return `![github license](https://img.shields.io/badge/License-${license}-blue.svg)`
    } else {
      return '';
    }
}

// Function created that returns license link; if there is no license, an empty string is returned
function renderLicenseLink(license) {
  if (license != '') {
    return `* [License](#license)`
  } else {
    return '';
  }
}

// Function created that returns license section; if there is no license, an empty string is returned; tgged template literals call a function w/ an array of any test segments from th eliteral frollowed by arguments w/ the values of any substitutions
function renderLicenseSection(license) {
  if (license != '') {
    return `## License
    ${license}
    Licensed software establishes the rights of all parties involved with the software, including: the author, the provider, and end users.  Licenses protect intellectual properties by limiting the liability of the vendor and limiting what other parties can do with covered software code.`
  } else {
    return '';
  }
}

// Function created that returns a test link based on whether a test is passed in; if there is no test selected, an empty string is returned
function renderTestLink(tests) {
  if (tests != '') { 
  return `* [Tests](#tests)`
} else {
  return '';
}
}

// Function created that returns the test section; if there is no test selected, an empty string is returned 
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

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)

  ${renderTestLink(data.tests)}
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