import React, { createContext, useRef } from 'react';

export const WebSocketContext = createContext();
const URL = `ws://localhost:5000`;

function WebSocketProvider({ children }) {
  const wsRef = useRef();
  if (!wsRef.current) {
    wsRef.current = new WebSocket(URL);
    wsRef.current.onopen = (res) => {
      console.log(res);
      console.log('connected to' + URL);
    };
  }

  return (
    <WebSocketContext.Provider value={wsRef.current}>
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketProvider;
