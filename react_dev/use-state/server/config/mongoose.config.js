// secure way to connect database + using destructuring
const {connect, connection} = require('mongoose');
const {config} = require('dotenv');

// module.exports to import file in our server
module.exports = () => {
    config(); // invoke dotenv config
    const uri = process.env.DB_URI; // establish our uri

    // passing two parameters ('connection_string', {options});
    // our creds are passed as options rather than within our connection string.
    // our connect method returns a PROMISE, so we use .then(), .catch()
    connect(uri, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_NAME,
        pass: process.env.DB_USER,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log('Connection Established');
    })
    .catch(error => console.error(error.message));
}

/* NOTE: Before dotenv -- without securing credentials

const mongoose = require('mongoose'); 
mongoose
    .connect("mongodb + srv://{username:password}@{cluster}.vddhv.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to DB"))
    .catch(error => console.log("Error connecting to the database", error));
*/