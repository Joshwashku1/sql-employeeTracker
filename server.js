const express = require('express');
// Import and require mysql2 to run database
const mysql = require('mysql2');

// Port on localhost or specific env
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

// Default response for a NOT FOUND request
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});