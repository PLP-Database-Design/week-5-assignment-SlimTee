// imoort package(s)
const express = require('express')
const db = require('./database')

// initialization
const app = express();

//define routes
// question 1
app.get('/', (request, response) => {
    db.query('SELECT patient_id, first_name, last_name, date_of_birth FROM patients', function(error, results) {
        if (error) throw error;
        response.send(results)
    })
    
})

// question 2
app.get('/', (request, response) => {
    db.query('SELECT first_name, last_name, provider_specialty FROM providers', function(error, results) {
        if (error) throw error;
        response.send(results)
    })
    
})

// question 3
app.get('/', (request, response) => {
    const firstName = req.params.firstName;
    db.query('SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?', [firstName], function(error, results) {
        if (error) throw error;
        response.send(results)
    })
    
})

// question 4
app.get('/', (request, response) => {
    const specialty = req.params.specialty;
    db.query('SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?', [specialty], function(error, results) {
        if (error) throw error;
        response.send(results)
    })
    
})

// define port
const port = 3700;

// launch server
app.listen(port)