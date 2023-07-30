const {sqlConnect, sqlQuery} = require('./sqlconnect');
const inquirer = require('inquirer');


const mainMenu = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'choices',
        message: 'Welcome to the Employee Tracker. Please select an option to get started.',
        choices: [
            'VIEW all EMPLOYEES',
            'ADD new EMPLOYEE',
            'UPDATE existing EMPLOYEE role',
            'VIEW all DEPARTMENTS',
            'ADD new DEPARTMENT',
            'VIEW all ROLES',
            'ADD new ROLE'
        ]
    }
])


    .then((answers) => {
        const {choices} = answers;
        if (choices === 'VIEW all EMPLOYEES') {
            viewAllEmployees();
        } else if (choices === 'ADD new EMPLOYEE') {
            addNewEmployee();
        } else if (choices === 'UPDATE existing EMPLOYEE role') {
            updateEmployee();
        } else if (choices === 'VIEW all DEPARTMENTS') {
            viewAllDepartments();
        } else if (choices === 'ADD new DEPARTMENT') {
            addNewDepartment();
        } else if (choices === 'VIEW all ROLES') {
            viewAllRoles();
        } else if (choices === 'ADD new ROLE') {
            addNewRole();
        }
    });
};

const viewAllEmployees = async () => {
    const viewEmployee = await sqlQuery(`SELECT employee.id, 
    employee.first_name, 
    employee.last_name 
    FROM employee`);
    console.log(viewEmployee);
};

const viewAllDepartments = async () => {
    const dept = await sqlQuery('SELECT * FROM department');
    console.log(dept);
};

const viewAllRoles = async () => {
    const role = await sqlQuery('SELECT * FROM role');
    console.log(role);
};

module.exports = {mainMenu};