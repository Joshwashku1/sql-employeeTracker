const fs = require('fs');
const inquirer = require('inquirer');

let inquirerDepartment = 
    inquirer
        .prompt([
            {
              name: 'select',
              type: 'choices',
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
        .then((data) => 
            console.log(data)
        );
    
    


module.exports = {inquirerDepartment};