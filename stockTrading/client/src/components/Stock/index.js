import React, { useContext, useState } from 'react';
import { WebSocketContext } from '../../WebSocketProvider';
import './style.css';

function Stock() {
  const ws = useContext(WebSocketContext);
  const [stock, setStock] = useState();
  ws.onmessage = (message) => {
    setStock(JSON.parse(message.data));
    //const { hp, lp, tp, scp, scr, tms } = wsData;
  };
  return (
    <div className='container'>
      <h2 className='title'>비트코인</h2>
      <div className='cur-info'>
        <div className={!!parseInt(stock?.scp) ? 'down' : 'up'}>
          <h3>
            <span>{stock?.tp.toLocaleString()}</span>KRW
          </h3>
          <h5>
            전일 대비 : {(stock?.scr * 100).toFixed(2)}%{' '}
            {stock?.scp.toLocaleString()}
          </h5>
        </div>
        <div>
          <h3>
            고가<span>{stock?.hp.toLocaleString()}</span>
          </h3>
          <h3>
            저가<span>{stock?.lp.toLocaleString()}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Stock;
