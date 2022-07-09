/** Default project : User model for testing in Postman.
 * DOCUMENTATION: https://mongoosejs.com/docs/index.html
 * 
 * The mongoose.Schema() method takes an object as its parameter, the structure of that object is 
 * how each new document put into the collection will be formatted.
 * 
 * The mongoose.model() method is the most important in this case. 
 * Its job is to take a blueprint object and, in turn, create the necessary database collection out of the model. 
 * We get this blueprint by making a new schema instance from the mongoose.Schema() object constructor.
 * 
 * Create a User variable to export and set it to the returned value of the mongoose.model function: 
 *      a model object which will enable all our needed CRUD functionality. 
 * Exporting the User variable will allow us to import and use the User model in any file we choose.
 * 
 * We created a simple User schema / model, we can head to the controller now for CRUD operations.
 */

const mongoose = require('mongoose');

// NOTE: String, is shorthand for { type: String }
// There is no need for the ' , { timestamps: true } ' as well.
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;