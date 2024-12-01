/**
 * Initializes an Express.js application and sets up a simple route to respond with "Hello world".
 * 
 * The application uses the `express` and `morgan` modules. `morgan` is a middleware that logs information about incoming requests.
 * 
 * The application listens for requests on port 3000 and logs a message when the server is running.
 */
const express = require('express') // express is a framework
const morgan = require('morgan') // `morgan` is a middleware that logs information about incoming requests.



const app = express(); // create an instance of express
app.use(morgan('dev')); 

app.get('/', (req, res) => { // route handler
    for(let i = 0; i < 10000000; i++){ // for increasing complexity of server
        
    }
    res.send('Hellow World');
})


app.listen(3000, () => { // listen to port 3000
    console.log("Port is running on http://localhost:3000");
})