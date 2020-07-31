const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(ip + ` accessed http:/${req.hostname}:${port}`)
});

const port = 1111;

server.get("/info", (req, res) => {
    res.sendFile(__dirname + "/info.html")
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(ip + ` accessed http:/${req.hostname}:${port}/info`)
})

server.use(function(req,res){
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
    if (res.status(404)){
        res.sendFile(__dirname + "/404.html")
        console.log(ip + ` was shown 404.html`)
    }
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
