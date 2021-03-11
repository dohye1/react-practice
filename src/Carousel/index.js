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
  const slideDurationRef = useRef(300);
  const prevMarketRef = useRef();

  function handleSlideLeft() {
    if (curIndexRef.current === 1) {
      curIndexRef.current -= 1;
      curMarketRef.current = 3;
      setTimeout(() => {
        slideDurationRef.current = 0;
        curIndexRef.current = 4;
        curMarketRef.current = 3;
        setMarketInfo(prevMarketRef.current);
        slideDurationRef.current = 300;
      }, 300);
    } else {
      curIndexRef.current -= 1;
      curMarketRef.current -= 1;
    }
    getMarketInfo();
  }

  function handleSlideRight() {
    if (curIndexRef.current === 4) {
      curIndexRef.current += 1;
      curMarketRef.current = 0;
      setTimeout(() => {
        slideDurationRef.current = 0;
        curIndexRef.current = 1;
        curMarketRef.current = 0;
        setMarketInfo(prevMarketRef.current);
        slideDurationRef.current = 300;
      }, 300);
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
        prevMarketRef.current = {
          market,
          trade_price,
          signed_change_price,
          signed_change_rate
        };
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
          transform: `translate3d(calc(-600px * ${curIndexRef.current}), 0, 0)`,
          transition: `${slideDurationRef.current}ms`
        }}
      >
        <Box {...marketInfo} />
        <Box {...marketInfo} />
        <Box {...marketInfo} />
        <Box {...marketInfo} />
        <Box {...marketInfo} />
        <Box {...marketInfo} />
      </div>
    </div>
  );
}

export default Market;
