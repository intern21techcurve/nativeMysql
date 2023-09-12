const express = require('express');
const connection = require('./config/dbConnection1')
const route = require('./routes/route')
const app = express();
const port = 50002;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/singup', route)




app.listen(port, 
    console.log(`http://localhost:${port}`));