//User schema file for mongodb

const mongoose = require('mongoose');




//User schema (like a table in mongodb)
const userSchema = new mongoose.Schema({ 
    name: String,
    age: Number 
})


//User model (Like a user collection in mongodb)

module.exports = mongoose.model('User', userSchema)