const express = require("express");

const BasicApp =require("../src/models/api");

const app = express();
const connectDB = require("./db/conn");
const port = process.env.PORT || 4000;

app.use(express.json());

app.post("/users", async(req,res)=>{
    try{
       const addUsers = new BasicApp(req.body)
       console.log(req.body);
        addUsers.save();
    }catch(e){
        res.send(e);
    }
})

app.get("/", async (req,res)=>{
    res.send("Hello from Zaynab");
})


app.listen(port,() =>{
    console.log('Connection is live at port no. ${port}');
})
