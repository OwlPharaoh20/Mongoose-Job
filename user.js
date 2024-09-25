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
        minlength: 5,
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
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        //to tell mongoose that this is a reference to another model named User
        ref: 'User',
    },
    hobbies: [String],
    address : addressSchema,
    
})
//Add a new method to the user model
userSchema.methods.sayHi = function () {
    console.log(`Hi, My name is ${this.name}`);

}

//
userSchema.statistics.findByName = function (name){
       return this.find({name: new RegExp(name, "i")})
}


userSchema.query.byName = function (name) {
    return this.where({name: new RegExp(name, "i")})
}

userSchema.virtual('namedEmail').get( function () {
    return `${this.name} <${this.email}>`;
})


//Mongoose Middleware
userSchema.post('save', function (doc, next) {
    doc.sayHi();
    next()
})


//User model (Like a user collection in mongodb)
//Exports the user model to be used in the controller
module.exports = mongoose.model('User', userSchema)