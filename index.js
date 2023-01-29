//const express = require('express');
// Import and require mysql2 to run database
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Port on localhost or specific env
// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

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
                    // console.log('These are ' + answers);
                    viewAllEmployees();
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
        // console.log(rows);
        // res.json(rows);
        console.table(rows);
        // Recall the menu after the specific query has been selected
        menu();
    });
    
};