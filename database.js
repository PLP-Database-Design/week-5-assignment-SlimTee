//import package
const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Littletee50',
    database: 'hospital_db'
});

// connect to the db
db.connect((error)=> {
    if (error){
        console.log('There was an error connecting to db:', error.stack)
        return;
    }

    console.log('Sucessfully connected to db')
});

//export the db connection
module.exports = db;