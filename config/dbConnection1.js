const mysql2 = require('mysql2');
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9899803387Ak@',
    database: 'tech',
  });
  
  // Test the database connection
  db.connect((err)=>{
    if(!err)
    {
      console.log('connect')

    }else
    {
      console.log("sorry unable to connections",err)

    }
  })
  module.exports = db;
  