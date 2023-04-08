const express = require("express");

const app = express();

// middleware
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
    // res.send("hello world!")
    // res.sendFile(__dirname + '/express.html');
    res.send(users);
});

app.post("/", (req,res) => {
    //  res.send("I am a post request");
    let user = req.body;
    users.push(user);
    console.log(user);
    res.json({
        message : "data received successfully",
        user : req.body,
        users : users,
    })
});

// get, post, patch, delete

app.listen(3000, ()=>{
    console.log("Server is listening at port number 3000");
});