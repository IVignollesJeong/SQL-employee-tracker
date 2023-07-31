# SQL Employee Tracker

## Description

This project is a CLI application that allows users to view, create, and update database entries regarding their business' departments, roles, and employees. The criteria for this project were as follows: 

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation

N/A, this program is ran within the integrated terminal inside the VScode program.

Source code for the application can be found here: [SQL-Employee-Tracker logic.js files](https://github.com/IVignollesJeong/SQL-employee-tracker/tree/master/logic).

## Usage



https://github.com/IVignollesJeong/SQL-employee-tracker/assets/131202032/179e2171-6baa-42eb-a428-a0377e036396





The application functions as follows:

- Upon downloading the code and launching VScode, the user can being the program by running the command "node server.js" in the VScode terminal.
- The user is then presented with multiple options, including viewing all employees, roles, and departments as well as updating and adding new database entries for these options.
- Scroll through the CLI using the arrow keys, and select an option by using the "enter" button.
- By selecting one of these options, the CLI will prompt you to answer questions and type inputs regarding the option selected.

## Credits

[Mysql2 NPM package](https://www.npmjs.com/package/mysql2#using-promise-wrapper) </br>
[Console.table NPM package](https://www.npmjs.com/package/console.table) </br>
[dotenv NPM package](https://www.npmjs.com/package/dotenv) </br>
[techfry table joining help](https://www.techfry.com/mysql-tutorial/how-to-select-from-two-tables-in-mysql#:~:text=In%20many%20cases%2C%20you%20often,a%20related%20column%20between%20them.) </br>
[stackoverflow .map help](https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map) </br>
OSU Bootcamp </br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

