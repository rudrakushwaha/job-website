const express = require("express")
const app = express();


app.use(express.static("public")); 

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(process.env.PORT||80,function(req,res){
    console.log("server started successfullyy on port 80 ")
})