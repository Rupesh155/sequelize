// import express from 'express'; 
let express= require('express')
const User = require('./model');
const app =express();
app.use(express.json());
// db connections
    User.sync()
    .then(() => {
      console.log('User model synced with the database');
      User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      })
        .then((user) => {
          console.log('User created:', user.toJSON());
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    })
    .catch((error) => {
      console.error('Error syncing user model:', error);
    });
app.get('/',(req,res)=>{
    res.send("Hi");
})
app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})






