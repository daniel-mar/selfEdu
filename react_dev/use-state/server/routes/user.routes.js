// Finally, after completing your models, establishing controllers for DB operations.
// We will have our routing deal with the user model. Importing from the controller file.
// AFTER our routing is done, we can head to the server.js to implement them.

// We are storing into a variable to utilize the User functions within the file.
const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}