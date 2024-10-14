// import http package
const http = require('http')

// create server - default rote
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader ('Content-Type', 'text/plain')
    response.end ('Welcome To Backend Dev With Node.js')
})

// declare port variable
const port = 5500

// start server
server.listen(port, () => {
    console.log('Server Is Running Sucessfully')
})