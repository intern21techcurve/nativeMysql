
const connection = require('../config/dbConnection1');


const addData=((req, resp) => {
  const data = req.body;
  const query = "INSERT INTO data (name, age, description) VALUES (?, ?, ?)";

  connection.query(query, [data.name,data.age,data.description], (err, result) => {
    if (!err) {
      resp.status(201).send(result);
    } else {
      resp.status(500).json(err);
    }
  });
});
const showData=((req,resp)=>{
    
    var query = "select * from data"
    connection.query(query,(err,result)=>{
        if(!err)
        {
            resp.status(200).json(result);
        }else{
            resp.status(500).json(err);
        }

    })
});
const updateData =((req,resp)=>{
    const id = req.params.id;
    let data = req.body;
    var query = "update  data set name = ?, age =?, description=? where id = ?"
    connection.query(query,[data.name,data.age,data.description,id],(err,result)=>{
        if(!err)
        {
            if(result.affectedRows==0){
                return resp.status(404).json({ message: "data is not found"});
            }
            return resp.status(200).json({message: "update a customer details"})
        }
        else{
            resp.status(500).json(err);
        }
    })
})

module.exports = {
    addData,
    showData,
    updateData
};
