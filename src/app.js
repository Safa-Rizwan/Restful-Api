const express = require('express');
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
// app.get('/',(req,res)=>{
//     res.send("Hello from other sides by Safa")
// })
// create a new student
app.post("/students",(req,res)=>{
    res.send("Hello from other sides")
})
app.listen(port,()=>{
    console.log(`connection successful at ${port}`)
})