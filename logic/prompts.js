const {sqlConnect, sqlQuery} = require('./sqlconnect');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


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
    console.table(viewEmployee);
    mainMenu();
};

const getEmployees = async () => {
    const emps = await sqlQuery(`SELECT id, CONCAT(first_name, " ", last_name) AS employee_name FROM employee`);
    return emps;
};

const addNewEmployee = async () => {
    const empRole = await getEmployees();
    const roleList = empRole.map(role => ({
        name: role.title,
        value: role.id
    }));

    const empManager = await getEmployees();
    const managerList = empManager.map(manager => ({
        name: manager.employee_name,
        value: manager.id
    }));

    const newEmployee = await inquirer.prompt ([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the FIRST name of the new employee:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the LAST name of the new employee:'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Please select the role assigned to the new employee:',
            choices: roleList
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Please select the manager the new employee will report to:',
            choices: managerList
        }
    ]);

    await sqlQuery('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id]);
    console.log(`New employee added to database. FIRST: ${newEmployee.first_name} LAST: ${newEmployee.last_name} ROLE: ${newEmployee.role_id} MANAGER: ${newEmployee.manager_id}.`);
    mainMenu();
};



const getRoles = async () => {
    const allRoles = await sqlQuery('SELECT id, title FROM role');
    return allRoles;
};

const updateEmployee = async () => {
    const emp = await getEmployees();
    const empList = emp.map(employee => ({
        name: employee.employee_name,
        value: employee.id
    }));

    const rol = await getRoles();
    const rolList = rol.map(role => ({
        name: role.title,
        value: role.id
    }));

    const employeeUpdated = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Please choose the employee you would like to update:',
            choices: empList
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Please choose the new role for this employee:',
            choices: rolList
        }
    ]);

    await sqlQuery('UPDATE employee SET role_id = ? WHERE id = ?', [employeeUpdated.role_id, employeeUpdated.employee_id]);
    console.log('Updated employee role!');
    mainMenu();
}

// DEPARTMENT TABLE ACTIONS (VIEW ALL, ADD)
////////////////////////////////////////////////////////////////////////////////////////////////
const viewAllDepartments = async () => {
    const dept = await sqlQuery('SELECT * FROM department');
    console.table(dept);
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
    console.table(role);
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