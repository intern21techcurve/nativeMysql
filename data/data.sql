const mysql = require('../config/dbConnection1');

create Table data(
  id int NOT NULL Auto_Increment,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
   description VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);