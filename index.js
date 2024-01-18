const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short project description.",
    name: "description",
  },
  {
    type: "list",
    message: "Please choose a license for your project.",
    name: "license",
    choices: ["MIT", "ISC", "BSD", "Apache-2.0"],
  },
  {
    type: "input",
    message: "Please provide installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide testing information for your project.",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide instructions for usage.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please enter contribution instructions.",
    name: "contributing",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README file saved successfully!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();
