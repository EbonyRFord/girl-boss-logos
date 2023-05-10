// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require("util");
const path = require('path')
const generateMarkdown = require('./utils/generateLogo');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Characters",
        type: "input",
        message: "Enter up to 3 characters "
    },
    {
        name: "Color",
        type: "input",
        message: "Choose a color"
    },
    {
        name: "Shape",
        type: "input",
        message: "Pick a shape: circle, triangle, or square?"
    },
    {
        name: "Keyword",
        type: "input",
        message: "Enter a color keyword (OR a hexadecimal number)"
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log("You missed a step")
        }

    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();

