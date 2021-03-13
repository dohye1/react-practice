import express from 'express';
import WebSocket from 'ws';

const app = express();

const server = app.listen(5000, () => console.log('Listening on PORT : 5000'));

const stockWs = new WebSocket('wss://api.upbit.com/websocket/v1');
const clientWs = new WebSocket.Server({ server });

clientWs.on('connection', (socket) => {
  stockWs.send(`[
    {"ticket" : "test"},
    {
      "type" : "ticker",
      "codes" : ["KRW-BTC"]
    },
    {
      "format" : "SIMPLE"
    }
  ]`);
  stockWs.on('message', (msg) => {
    let data = msg.toString('utf-8');
    socket.send(`${data}`);
  });
});
