import React, { useContext } from 'react';
import { WebSocketContext } from '../../WebSocketProvider';
import Account from '../Account';
import './style.css';

function Stock() {
  const stock = useContext(WebSocketContext);

  return (
    <div className='container'>
      <div className='title'>
        <h2>비트코인</h2>
      </div>
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
      <Account />
    </div>
  );
}

export default Stock;
