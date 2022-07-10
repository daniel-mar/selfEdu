// Securing our connection to database + using destructuring.
const {connect} = require('mongoose');
const {config} = require('dotenv');

// The following is Bonus: for securing credentials (paired with server.js).
// module.exports to import file in our server for secure communication.
module.exports = () => {
        // Invoke dotenv config
        config();
        // Establish our uri with dotenv
        const uri = process.env.DB_URI;
        // Passing two parameters ('connection_string', {options});
        // Our creds are passed as options rather than within our connection string.
        // We also removed deprecated options of useFindAndModify + useCreateIndex
        // Our connect method returns a PROMISE, so we use .then(), .catch()
        connect(uri, {
            dbName: process.env.DB_NAME,
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connection to DB Established');
        })
        .catch(error => console.error(error.message));
}

// const mongoose = require('mongoose');
// mongoose
//     .connect("mongodb+srv://<USER>:<PASS>@<LOCATION>.vddhv.mongodb.net/?retryWrites=true&w=majority",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//     .then(() => console.log("Established a connection to DB"))
//     .catch(error => console.log("Error connecting to the database", error));