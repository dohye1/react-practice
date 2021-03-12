import React, { useEffect, useRef, useState, useCallback } from 'react';
import Box from './Box';
import './style.css';

const options = { method: 'GET' };
const BASE_URL = 'https://api.upbit.com/v1/ticker';

const MARKETS = ['BTC', 'ETH', 'XRP', 'PCI'];

function Market() {
  const [marketInfo, setMarketInfo] = useState();

  const curIndexRef = useRef(1); // 박스 순서
  const curMarketRef = useRef(0); // 데이터 순서
  const slideDurationRef = useRef(1000);
  const prevMarketInfoRef = useRef();
  const curMarketInfoRef = useRef();
  const debounceRef = useRef();

  const debounce = () => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      handleSlide();
    }, 5000);
  };
  function handleSlide(e) {
    if (e && e.target.dataset.direction === 'left') {
      curIndexRef.current = 0;
      if (curMarketRef.current === 0) {
        curMarketRef.current = 3;
      } else {
        curMarketRef.current -= 1;
      }
    } else {
      curIndexRef.current = 2;
      if (curMarketRef.current === 3) {
        curMarketRef.current = 0;
      } else {
        curMarketRef.current += 1;
      }
    }
    getMarketInfo();
    setTimeout(() => {
      slideDurationRef.current = 0;
      curIndexRef.current = 1;
      prevMarketInfoRef.current = curMarketInfoRef.current;
      setMarketInfo({});
      slideDurationRef.current = 1000;
    }, 1000);

    debounce();
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
        const response = {
          market,
          trade_price,
          signed_change_price,
          signed_change_rate
        };
        if (!prevMarketInfoRef.current) {
          prevMarketInfoRef.current = response;
        }
        curMarketInfoRef.current = response;
        setMarketInfo(response);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getMarketInfo();
    debounce();
  }, []);

  return (
    <div className='container'>
      <div className='direction'>
        <button
          data-direction='left'
          onClick={handleSlide}
          className='direction-button'
        >
          ‹
        </button>
        <button
          data-direction='right'
          onClick={handleSlide}
          className='direction-button'
        >
          ›
        </button>
      </div>
      <div
        className='slide-box'
        style={{
          transform: `translate3d(${-600 * curIndexRef.current}px, 0, 0)`,
          transition: `${slideDurationRef.current}ms`
        }}
      >
        <Box {...marketInfo} />
        <Box {...prevMarketInfoRef.current} />
        <Box {...marketInfo} />
      </div>
    </div>
  );
}

export default Market;
