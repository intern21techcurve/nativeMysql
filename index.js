const express = require('express');
const route = require('./Route/route')




const app = express();
const port = 50002;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/singup', route)




app.listen(port, 
    console.log(`http://localhost:${port}`));