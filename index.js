const express = require('express');

const app=express();


app.get("/",(req,res)=>{
     res.status(200).send("Started Successfully")
})


app.listen("8000",()=>{
    console.log("Port is working on 8000")
})


