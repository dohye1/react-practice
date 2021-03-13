import express from 'express';
import http from 'http';
import socket from 'socket.io';
import WebSocket from 'ws';

const app = express();

const server = app.listen(5000, () => console.log('Listening on PORT : 5000'));

const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
const io = new WebSocket.Server({ server });

io.on('connection', (socket) => {
  console.log(123123);
});

ws.on('open', () => {
  ws.on('connection', (socket) => {
    console.log(socket);
  });
  ws.send(`[
    {"ticket" : "test"},
    {
      "type" : "ticker",
      "codes" : ["KRW-BTC"]
    },
    {
      "format" : "SIMPLE"
    }
  ]`);
});

ws.on('message', (msg) => {
  const str = msg.toString('utf-8');
  const data = JSON.parse(str);
  console.log(data);
});
