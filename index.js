// // // import express from 'express'; 
// // let express= require('express');
// // const User = require('./model');
// // const app =express();
// // app.use(express.urlencoded({ extended: true })) 
// // const bodyParser = require('body-parser');
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.json());
// // const cors = require('cors'); 
// // app.use(cors());
// // // db connections
// //   //  find all 
// //   app.get('/',(req,res)=>{

      
// //     User.findAll().then((data)=>{
// //       console.log(data,"rrr");
// //       res.send(data)
  
// //     })
   
// //   })


// // app.post('/create',(req,res)=>{
// //   console.log(req.body,"fdata nhi aa rha");
// //   let {data,ls,email}=req.body
// //   res.send(req.body)
// //   User.sync()
// //   .then(() => {
// //     console.log('User model synced with the database');
// //     User.create({
// //       firstName: data,
// //       lastName: ls,
// //       email: email
// //     })
// //       .then((user) => {
// //         console.log('User created:', user.toJSON());
// //       })
// //       .catch((error) => {
// //         console.error('Error creating user:', error);
// //       });
// //   })
// //   .catch((error) => {
// //     console.error('Error syncing user model:', error);
// //   });

// // })
  



// // // for edit
// // app.post('/users', async (req, res) => {
// //   try {
   
// //     // const { id } = req.params;
// //     const { username, email } = req.body;

// //     // Use the Sequelize model to find and update the user
// //     const user = await User.findByPk('1');
// //     // console.log(user,"uas");

// //     if (!user) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     // Update the user's data
// //     user.firstName =  'uk'; // Update only if a new value is provided
// //     user.email =  'hr@gmail.com';

// //     // Save the changes to the database
// //     await user.save();

// //     res.json(user);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // app.get('/delet', async (req, res) => {
// //   try {
// //     // const { id } = req.params;
// //     // Use the Sequelize model to find and delete the user
// //     const user = await User.findByPk('1');
// //     if (!user) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     // Delete the user from the database
// //     await user.destroy();
// //     res.json({ message: 'User deleted successfully' });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // app.listen(5000,()=>{
// // console.log("Server listening in http://localhost:5000")
// // })
//      let exppress=  require('express')
//      let app=    exppress()
//      app.use(exppress.json());
//     const User = require('./model');
//     app.get('/', async(req,res)=>{
//       //  let data=  await User.findAll()
//       res.send('hello')
// // 
//     })
// // 
//     app.post('/create',async(req,res)=>{
//       let {firstName,lastName,email}=req.body
//          await  User.sync()
//         let data=   await User.create({
//           firstName:firstName,
//           lastName:lastName,
//           email:email
//          })   
//       res.send(data)
      
//     })
//     // for edit
//     app.patch('/edit/:id', async(req,res)=>{
//       let {id}=req.params
//       let {firstName,lastName,email}=req.body
//              let data=  await  User.findByPk(id)
//              console.log(data,"dataaaa");
//              if(!data){
//               res.send({msg:'data not foundddd'})
//              }
//              else{
//               data.firstName=firstName,
//               data.lastName=lastName,
//               data.email=email
//               await data.save()
//               res.send({ msg:'data edditeddddd'})

//              }   //  data.firstName=
//     }) 
//     app.delete('/delet/:id',async (req,res)=>{

//            let {id}=req.params
//            let data=    await User.findByPk(id)
//            if(!data){
//                return res.send({msg:"data not find"})
//            }
//              await  data.destroy()
//              res.send({msg:"deleted"})
//     })
//     app.listen(4000,()=>{
//       console.log('server ruuning on port no 4000');
//     })





   
      let express=     require('express')
          let User=    require('./model')
     let app=      express()

     app.get('/',     async (req,res)=>{
      // res.send('homee fileee')
             await  User.sync()
             res.send('doneee')


     })

     let port=4000
     app.listen( port ,()=>{
      console.log( `server running on portttt no ${port} `);

     })
 