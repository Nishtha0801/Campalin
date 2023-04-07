const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    // res.send("hello world!")
    res.sendFile(__dirname + '/express.html');
});

app.post("/", (req,res) => {
    //  res.send("I am a post request");
    let data = req.body;
    console.log(data);
    res.json({
        message : "data received successfully",
        data : req.body,
    })
});

// get, post, patch, delete

app.listen(3000, ()=>{
    console.log("Server is listening at port number 3000");
});