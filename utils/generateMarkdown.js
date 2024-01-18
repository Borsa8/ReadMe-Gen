// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## License
This project is licensed under the ${data.license} License.

## Questions
For any questions, please contact [${data.username}](https://github.com/${data.username}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;

