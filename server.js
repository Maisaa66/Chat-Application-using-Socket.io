const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 7000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
	socket.on('send name', (username) => {
		io.emit('send name', (username));
		
	});

	socket.on('send message', (data) => {
		io.emit('send message', (data));
	});
});

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}, http://localhost:7000/`);
});
