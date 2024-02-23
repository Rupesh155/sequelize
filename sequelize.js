const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testDB', 'root', 'Rup@1234', {
    host: 'localhost',
    dialect: 'mysql'
  });
          async function connect(){

            try{
                  await sequelize.authenticate()
                  console.log('Connection has been established successfully.');
            }
            catch{
              console.error('Unable to connect to the database:', error);

            }

         }
         connect()

  // async  function  test(){
  //   try {
  //       await sequelize.authenticate();
  //       console.log('Connection has been established successfully.');
  //     } catch (error) {
  //       console.error('Unable to connect to the database:', error);
  //     }
  //     // await sequelize.sync();

  // }

  // test()
  module.exports = sequelize;





  