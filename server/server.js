const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send('Hello from the express server');    
});

app.listen(PORT,function(){
    console.log("server running on localhost:"+PORT);
    //try to send response here
});

app.post('/enroll',function(req,res){
    // res.send({message:"data recieved"});
    res.status(200).send({"message" :"data recieved"});
    //remove status
    console.log("req.body : ");
    console.log(req.body);
});