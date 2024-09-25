//User schema file for mongodb

//Importing mongoose
const mongoose = require('mongoose');

//Address schema
const addressSchema =new mongoose.Schema({
        street: String,
        city : String


      })


//User schema (like a table in mongodb)
const userSchema = new mongoose.Schema({ 
    //List the user features with their data types.
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 150
    }, 
    email: {
        type: String,
        //Validate the email input from the user
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true, //Cannot be changed
        default: () => Date.now(),
    } ,
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address : addressSchema,
    
})


//User model (Like a user collection in mongodb)
//Exports the user model to be used in the controller
module.exports = mongoose.model('User', userSchema)