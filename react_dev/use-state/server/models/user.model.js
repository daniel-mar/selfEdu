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
// Added validations, although you may add to your collection first
// Then add the validations after, so far I have not inserted data via Postman.

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [6, "First name must be at least 6 characters long"]
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [6, "First name must be at least 6 characters long"],
        maxlength: [20, "Last name must be at most 20 characters long"]
    },
    age: {
        type: Number,
        min: [1, "You must be at least 1 or older to register"],
        max: [150, "You must be at most 118 years old to register"]
    },
    email: {
        type: String, required: [true, "Email is required"]
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
