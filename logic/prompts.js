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


// EMPLOYEE TABLE ACTIONS (VIEW ALL, ADD, MODIFY)
////////////////////////////////////////////////////////////////////////////////////////////////
const viewAllEmployees = async () => {
    const viewEmployee = await sqlQuery(`SELECT employee.id, 
    employee.first_name, 
    employee.last_name,
    role.title AS title,
    department.name AS department,
    role.salary,
    CONCAT(manager.first_name, " ", manager.last_name) AS \`reporting manager\` 
    FROM employee
    LEFT JOIN role on employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;`);
    console.log(viewEmployee);
    mainMenu();
};



// DEPARTMENT TABLE ACTIONS (VIEW ALL, ADD)
////////////////////////////////////////////////////////////////////////////////////////////////
const viewAllDepartments = async () => {
    const dept = await sqlQuery('SELECT * FROM department');
    console.log(dept);
    mainMenu();
};

const addNewDepartment = async () => {
    const newDept = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the new department name.'
        }
    ]);
    await sqlQuery('INSERT INTO department (name) VALUES (?)', [newDept.name]);
    console.log(`New department (${newDept.name}) added to database.`);
    mainMenu();
}


// ROLE TABLE ACTIONS (VIEW ALL, ADD)
////////////////////////////////////////////////////////////////////////////////////////////////
const viewAllRoles = async () => {
    const role = await sqlQuery('SELECT * FROM role');
    console.log(role);
    mainMenu();
};

const addNewRole = async () => {
    const allDepts = await sqlQuery('SELECT * FROM department');
    const deptList = allDepts.map(department => ({
        name: department.name,
        value: department.id
    }));

    const newRole = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the name of the new role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary for this new role'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'please select the department this new role is a part of',
            choices: deptList
        }
    ]);
    await sqlQuery('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [newRole.title, newRole.salary, newRole.department_id]);
    console.log(`New role ${newRole.title} has been added to department ${newRole.department_id}.`);
    mainMenu(); 
}




module.exports = {mainMenu};