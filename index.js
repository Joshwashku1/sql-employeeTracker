//const express = require('express');
// Import and require mysql2 to run database
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        // MySQL username
        user: 'root',
        password: 'NewPassword',
        database: 'employee_db'
    },
    console.log(`Connected to employee_db database`)
);

const menu = () => {
    inquirer
        .prompt([
            {
              name: 'select',
              type: 'list',
              message: 'What would you like to do?',
              choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add An Employee",
                "Remove An Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "Exit"
              ]

            }
        ])
        .then(answers => {
            console.log("Console " + answers.select)
            
            // switch() case then call functions for selected queries
            switch (answers.select){
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View All Employees By Department':
                    employeesByDepartment();
                    break;
                case 'View All Employees By Manager':
                    employeesByManager();
                    break;
                case 'Add An Employee':
                    addEmployee();
                    break;
                case 'Remove An Employee':
                    removeEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Update Employee Manager':
                    updateEmployeeManager();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Exit':
                    db.end();
                    break;
            }
        });
    }

menu();

function viewAllEmployees(){
    db.query('SELECT * FROM employee', (err,rows) => {
        // grab the data console into a table
        console.table(rows);
        // Recall the menu after the specific query has been selected
        menu();
    });
    
};

function employeesByDepartment(){
    // Select a department and console table the employees that are in the department
    // Select the department by using inquirer
    // Grab the department names for inquirer
    db.query(`SELECT d.name, r.title, e.first_name, e.last_name
    FROM department AS d 
    JOIN role AS r 
    ON d.id=r.department_id
    JOIN employee AS e
    ON r.id=e.role_id
    ORDER BY d.name` 
    , (err,rows) => {
        console.table(rows);
        menu();
    });
};

function employeesByManager(){
    db.query('', (err,rows) => {

    });
};

async function addEmployee(){
    const newEmployee = await inquirer.prompt([
        {
            name: 'first_name',
            message: 'Please type in the first name of the employee.',
            type: 'input'
        },
        {
            name: 'last_name',
            message: 'Please type in the last name of the employee.',
            type: 'input'
        },
        {
            name: 'role',
            message: 'Please type in the role id',
            type: 'list',
            choices: [1,2,3,4,5,6]
        }
    ]);

    
    db.query(`INSERT INTO employee (first_name,last_name,role_id) 
    VALUES ("${newEmployee.first_name}","${newEmployee.last_name}","${newEmployee.role}")`
    , (err,rows) => {
        viewAllEmployees();
        menu();
    });

    // query for role and use array to  
};

function removeEmployee(){
    db.query('', (err,rows) => {

    });
};

function updateEmployeeRole(){
    db.query('', (err,rows) => {

    });
};

function updateEmployeeManager(){
    db.query('', (err,rows) => {

    });
};

function viewAllRoles(){
    db.query('SELECT * FROM role', (err,rows) => {
        console.table(rows);
        menu();
    });
};