import React, { createContext, useRef, useState } from 'react';

export const WebSocketContext = createContext();
const URL = `ws://localhost:5000`;

function WebSocketProvider({ children }) {
  const wsRef = useRef();
  const [stock, setStock] = useState();
  if (!wsRef.current) {
    wsRef.current = new WebSocket(URL);
    wsRef.current.onopen = (res) => {
      console.log(res);
      console.log('connected to' + URL);
    };

    wsRef.current.onmessage = (message) => {
      setStock(JSON.parse(message.data));
      //const { hp, lp, tp, scp, scr, tms } = wsData;
    };
  }

  return (
    <WebSocketContext.Provider value={stock}>
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketProvider;
