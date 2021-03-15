import React, { useState, useContext, useRef, useEffect } from 'react';
import { WebSocketContext } from '../../WebSocketProvider';
import './style.css';

function Trade({ seed, countStock }) {
  const fixedPriceRef = useRef();
  const [boxStatus, setBoxStatus] = useState('buy');
  const [stockCount, setStockCount] = useState(0);
  const stock = useContext(WebSocketContext);

  function getFixedPrice() {
    fixedPriceRef.current = stock?.tp;
  }

  function handleTrade() {
    if (boxStatus === 'buy') {
      if (seed.current < stockCount * fixedPriceRef.current) {
        alert('금액이 부족합니다');
        return;
      }
      seed.current -= stockCount * fixedPriceRef.current;
      countStock.current = Number(countStock.current) + Number(stockCount);
    } else {
      if (countStock.current < stockCount) {
        alert('가지고 있는 수량보다 더 많이 팔 수 없다');
        return;
      }
      seed.current += stockCount * fixedPriceRef.current;
      countStock.current -= stockCount;
    }
  }
  useEffect(() => {
    if (fixedPriceRef.current) {
      return;
    }
    getFixedPrice();
  }, [stock?.tp]);

  return (
    <div className='trade-container'>
      <div className='button-box'>
        <div
          className={boxStatus === 'buy' ? 'buy' : ''}
          onClick={() => {
            setBoxStatus('buy');
          }}
        >
          매수
        </div>
        <div
          className={boxStatus === 'sell' ? 'sell' : ''}
          onClick={() => {
            setBoxStatus('sell');
          }}
        >
          매도
        </div>
      </div>
      <div className='trade-info'>
        <h4>
          price : {(fixedPriceRef?.current).toLocaleString()}{' '}
          <span
            onClick={() => {
              getFixedPrice();
            }}
          >
            🔄
          </span>
        </h4>
        <div>
          주문수량{' '}
          <input
            type='text'
            value={stockCount}
            onChange={(e) => setStockCount(e.target.value)}
          />
        </div>
        <div>
          주문총액 :{(stockCount * fixedPriceRef.current).toLocaleString()}원
        </div>
        <button onClick={handleTrade}>{boxStatus}</button>
      </div>
    </div>
  );
}

export default Trade;
