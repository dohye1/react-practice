import React, { useContext, useState } from 'react';
import { WebSocketContext } from './WebSocketProvider';

function Stock() {
  const ws = useContext(WebSocketContext);
  const [stock, setStock] = useState();
  ws.onmessage = (message) => {
    setStock(JSON.parse(message.data));
    //const { hp, lp, tp, scp, scr, tms } = wsData;
  };
  return <div>현재가 : {stock && stock.tp}</div>;
}

export default Stock;
