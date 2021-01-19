var express = require('express');
var app = express();
var socket = require('socket.io')
app.use(express.static('public'))
var server = app.listen(3001, () => {
    console.log("server run on 3001")
})

var io = socket(server);
io.sockets.on('connection', function(socket) {
    socket.on('create', function(room) {
        socket.join(room);
        console.log(room);
        // console.log("hi")
    });
    socket.on('chat', function(data) {
        console.log(data)
        io.sockets.emit('chat', data)
    })

  });
  

// io.on('connection', (socket) => {
//     // console.log("connected")
    
