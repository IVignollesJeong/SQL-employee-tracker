// This server.js file will initialize the inquirer prompts in prompts.js. Running this file in the terminal runs the CLI program.
const inquirer = require('inquirer');
const { table } = require('table');
const {mainMenu} = require('./logic/prompts');

mainMenu();