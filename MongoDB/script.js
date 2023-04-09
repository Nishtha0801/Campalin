// npm install express
const express = require('express');
// npm install mongoose
const mongoose = require('mongoose');

const blogRouter = require("./routes/BlogRoutes");

const app = express();
app.use(express.json());

app.use("/api/blogs", blogRouter);

const url = "Paste your own url";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

try {
    con.on('open', () => {
        console.log('connected');
    })
} catch (error) {
    console.log("Error: " + error);
}

const port = 9000;
app.listen(port, () => {
    console.log('Server started');
})