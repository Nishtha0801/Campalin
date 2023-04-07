// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     });

//     res.write('<h1>hello world, I am learning nodejs today!</h1>');
//     res.write('<p>I am a paragraph</p>');
//     res.end();

// }).listen(1337);

// fs module
const fs = require("fs");

// console.log("start");

// Asynchronous way ======================================
// fs.readFile('file.txt', function(err, data) {
//     if(err){
//         console.log(err);
//     }

//     console.log("Asynchronously Reading the file" + data.toString());
// });

// Synchronous way ========================================
// var data = fs.readFileSync('file.txt');
// console.log("Synchronously Reading the data" + data.toString());

// console.log("end");

// fs.writeFile('newFile.txt', 'Hello world', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("created and saved");
// })

// fs.appendFile('newFile.txt', 'I am the appended text', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("Appended");
// });


// delete the file
fs.unlink('newFile.txt', function(err){
    if(err){
        console.log(err);
    }
    console.log("my file is deleted");
})
