const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
    console.log("new connection");
    // socket.emit("system-message", "user connection to the chat");
    socket.emit("message", {
        // sender: "davide",
        // content: "it",
    });
    socket.on("disconnect", () => {
        console.log("client disconnection")
    })
    socket.on("message", (data) => {
        console.log("this is my message", data);
        socket.emit("message", data);
    })
})



server.listen(31337, () => {
    console.log("Server started");
})
