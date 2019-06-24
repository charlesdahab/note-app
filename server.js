const express = require('express');
const bodyParser = require('body-parser');

//Configuring Database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

//create an express app
const app = express();

//parse requests of content-type -- application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of context-type - application/json
app.use(bodyParser.json());

// Require Notes routes
require('./app/routes/note.routes.js')(app);

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() =>{
    console.log("Sucessfully connected to the Database");
}).catch(err => {
    console.log('Could Not connected to the database', err);
    process.exit();
});

//define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Notes App"});
});

//listen for requests
app.listen(4000, () => {
    console.log("Server is Listening on Port 4000");
});