
const express = require('express');
const http = require('http');
const {port_ws, port_http} = require('./config');
const wsServer = require('./ws-server');

let app = express();

let server = http.createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

server.listen(port_http, function(){
    console.log('listening on port :', port_http);
});

wsServer.listen(port_ws, function(){
    console.log('listening on port :', port_ws);
});

