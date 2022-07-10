/** After creating your DB schema and model, here we will have our logic
 * for creating, retrieving, updating, and deleting users. 
 * 
 * We start by into a User variable, we will use this to export/perform different functions.
 *      Meaning the User is a construction function that can create new User objects
 *          Also, has other methods to communicate with the DB.
 *      .then() - executes upon successful inserting data in DB.
 *      .catch() - executes on an error.
 */

const User = require('../models/user.model');

// -- READ --

// Querying ALL Users in DB, notice that allOfUSers and err, are customizable variables
// They will store what is returned on success or error.
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allOfUsers => res.json({ users: allOfUsers }))
        .catch(err => ({message: `Couldn't collect all of the users.`, error: err}));
}

// Querying SINGLE User in DB, uses the req because we should be receiving an ID
// from the front-end that we will be able to query with and return data in the res.
module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json ({message: `Couldn't find user.`, error: err}));
}

// -- CREATE --
// We make use of the req, because we should be receiving form data from the front-end.
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.json({ message: `Couldn't create a new user.`, error: err}));
}

// -- UPDATE --
// We are expecting to have a res from the update the user with the new form data 
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: `Couldn't update user.`, error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: `Couldn't delete the user`, error: err }))
}

// CRUD functionality is done, can begin creating your routes.
// -- BONUS --
// Create User Validate for uniqueness before creating new DB Entry.
    // User.exists({ name: req.body.name })
    //     .then(userExists => {
    //         if (userExists) {
    //             // Promise.reject() will activate the .catch() below.
    //             return Promise.reject('Error Message Goes Here');
    //         }
    //         return User.create(req.body);
    //     })
    //     .then(saveResult => res.json(saveResult))
    //     .catch(err => res.json(err));

// -- ALTERNATIVE METHODS --
// Finding all Users - retrieves an array of all documents in the User collection

    // User.find()
    //     .then( users => {
    //         // Logic with users results
    //     })
    //     .catch(err => res.json(err));

// Creating a user - create a new document to store in the User collection and save into the DB.

    // Within the following, the req.body is an object containing all the users data.
    // If we look at req.body as an object literal it would look like this:
/* 
    req.body = {
        "name" : "John Doe",
        "age" : 24
    }
*/
    // const person = new User(req.body);
    // person.save()
    //         .then(newUser => {
    //             // Logic with succesfully save newUser object.
    //         })
    //         .catch(err => res.json(err));
// If there's an error, the record was not saved, this (err) will contain validation errors.

// Create a user (simplified)
    // const { userData } = req.body;
    // User.create(userData)
    //     .then(newUser => {
    //         // Logic with succesfully saved newUser object
    //     })
    //     .catch(err => res.json(err));
// If there's an error, the record was not saved, this (err) will contain validation errors.