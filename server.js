const webSocket = require('ws');
const wss = new webSocket.Server({ port: 5001 });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`Echo: ${message}`);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
console.log("WebSocket server running on port 5001");
