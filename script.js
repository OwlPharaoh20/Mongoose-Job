const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



  //Function to create a new user and save it to the database
  async function run (){
   

    try {
        const user = await new User(
            {
                name: "Kyle",
                 age: 26,
                 email: "Test@test.com",
                hobbies: ["Weight Lifting", "Bowling"],
                address: {
                    street: "123 Main St",
                },
            
            })

        
        console.log(user)
        
    } catch (e) {
        console.log(e.message)
  
    }
    
  }


  //Call the function 
  run()


  