import React, { useEffect, useRef, useState, useCallback } from 'react';
import Box from './Box';
import './style.css';

const options = { method: 'GET' };
const BASE_URL = 'https://api.upbit.com/v1/ticker';

const MARKETS = ['BTC', 'ETH', 'XRP', 'PCI'];

function Market() {
  const [marketInfo, setMarketInfo] = useState({
    market: '',
    trade_price: 0,
    signed_change_price: 0,
    signed_change_rate: 0
  });

  const curIndexRef = useRef(1); // 박스 순서
  const curMarketRef = useRef(0); // 데이터 순서
  const prevMarketRef = useRef();

  function handleSlideLeft() {
    // 3번 인덱스의 박스를 보여줌
    if (curIndexRef.current === 0) {
      curIndexRef.current = 3;
      curMarketRef.current = 2;
    } else if (curIndexRef.current === 1) {
      curIndexRef.current -= 1;
      curMarketRef.current = 3;
    } else {
      curIndexRef.current -= 1;
      curMarketRef.current -= 1;
    }
    getMarketInfo();
  }

  function handleSlideRight() {
    if (curIndexRef.current === 5) {
      curIndexRef.current = 2;
      curMarketRef.current = 1;
    } else if (curIndexRef.current === 4) {
      curIndexRef.current += 1;
      curMarketRef.current = 0;
    } else {
      curIndexRef.current += 1;
      curMarketRef.current += 1;
    }
    getMarketInfo();
  }

  const getMarketInfo = useCallback(() => {
    fetch(`${BASE_URL}?markets=KRW-${MARKETS[curMarketRef.current]}`, options)
      .then((response) => response.json())
      .then((res) => {
        const {
          market,
          trade_price,
          signed_change_price,
          signed_change_rate
        } = res[0];
        setMarketInfo({
          market,
          trade_price,
          signed_change_price,
          signed_change_rate
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getMarketInfo();
  }, []);

  return (
    <div className='container'>
      <div className='direction'>
        <button onClick={handleSlideLeft} className='direction-button'>
          ‹
        </button>
        <button onClick={handleSlideRight} className='direction-button'>
          ›
        </button>
      </div>
      <div
        className='slide-box'
        style={{
          transform: `translate3d(calc(-600px * ${curIndexRef.current}), 0, 0)`
        }}
      >
        <Box data-market-info={3} data-index={0} {...marketInfo} />
        <Box data-market-info={0} data-index={1} {...marketInfo} />
        <Box data-market-info={1} data-index={2} {...marketInfo} />
        <Box data-market-info={2} data-index={3} {...marketInfo} />
        <Box data-market-info={3} data-index={4} {...marketInfo} />
        <Box data-market-info={0} data-index={5} {...marketInfo} />
      </div>
    </div>
  );
}

export default Market;
