
const WebSocket = require('ws');

    const wss = new WebSocket.Server({ port: 8080 });

    let currentOperation = null;

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log(''+message);
            if (message == 'moltiplica') {
                currentOperation = 'multiply';
                wss.clients.forEach((client) => {
                    client.send('Tutti i numeri inviati al server verranno moltiplicati.');
                });
            } else if (message === 'raddoppia') {
                currentOperation = 'double';
                wss.clients.forEach((client) => {
                    client.send('Tutti i numeri inviati al server verranno raddoppiati.');
                });
            } else if (message === 'fattoriale') {
                currentOperation = 'factorial';
                wss.clients.forEach((client) => {
                    client.send('Tutti i numeri inviati al server verranno fattorializzati.');
                });
            } else if (currentOperation && !isNaN(message)) {
                let result;
                if (currentOperation === 'multiply') {
                    result = Math.multiply(message, message);
                } else if (currentOperation === 'double') {
                    result = Math.double(message);
                } else if (currentOperation === 'factorial') {
                    result = Math.factorial(message);
                }
                wss.clients.forEach((client) => {
                    client.send(result);
                });
            }
        });
    });
