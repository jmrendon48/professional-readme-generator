// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (license === 'Apache License 2.0') {
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    } else if (license === 'Boost Software License 1.0') {
        return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    } else if (license === 'GNU AGPL v3') {
        return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
    } else if (license === 'GNU FDLv 1.3') {
        return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg';
    } else if (license === 'GNU GPL v3') {
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    } else if (license === 'GNU LGPL v3') {
        return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
    } else if (license === 'ISC') {
        return 'https://img.shields.io/badge/License-ISC-blue.svg';
    } else if (license === 'Mozilla Public License 2.0') {
        return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
    } else if (license === 'MIT License') {
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    if (license === 'Apache License 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Boost Software License 1.0') {
        return 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'GNU AGPL v3') {
        return 'https://www.gnu.org/licenses/agpl-3.0';
    } else if (license === 'GNU FDLv 1.3') {
        return 'https://www.gnu.org/licenses/fdl-1.3';
    } else if (license === 'GNU GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'GNU LGPL v3') {
        return 'https://www.gnu.org/licenses/lgpl-3.0';
    } else if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC';
    } else if (license === 'Mozilla Public License 2.0') {
        return 'https://opensource.org/licenses/MPL-2.0'; 
    } else if (license === 'MIT License') {
        return 'https://opensource.org/licenses/MIT';
    } else {
        return '';
    }
};

const createBadge = license => {
    if (license === 'N/a') {
        return '';
    }
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'N/a') {
        return '';
    }
    return `${license}`;
};

// TODO: Create a function to generate markdown for README
module.exports = data => {
    const {license} = data;
    console.log(data);
    console.log(license);

    return `
# ${data.title}
${createBadge(license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

Contact me at: <br/>
[GitHub](https://github.com/${data.username})
<${data.email}>
`;
}

