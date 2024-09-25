const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  run()
  async function run (){
    const user =new User({name: "Kyle", age: 26})
    await user.save()
    console.log(user)
  }


  