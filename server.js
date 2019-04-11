const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.use('*',(req,res)=>{
    res.send(__dirname + "/dist/index.html");
})

const server = app.listen(process.env.PORT || 5000);