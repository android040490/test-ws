const http = require('http');
const ws = require('socket.io');
const db = require('./db');

let wsServer = http.createServer();
let io = ws(wsServer);

io.on('connection', function(socket){
    socket.emit('users', db.users)
});

module.exports = wsServer;
