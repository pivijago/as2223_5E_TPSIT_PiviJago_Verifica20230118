const WebSocket = require("ws"); // per includere un modulo usiamo
const ServerAddress = "ws://127.0.0.1:8080";
const socket = new WebSocket('ws://localhost:8080');
socket.onopen = () => {
    // invio messaggi al server
    socket.send('moltiplica');
    socket.send(5);
};

socket.onmessage = (event) => {
    console.log(event.data);
};
