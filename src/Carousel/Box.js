import React from 'react';
import './BoxStyle.css';

function Box({ market, trade_price, signed_change_price, signed_change_rate }) {
  return (
    <div className='box-container'>
      <div className='label'>증시</div>
      <div className='info-block'>
        <h2>{market}</h2>
        <p>{parseInt(trade_price).toLocaleString()}원</p>
        <p>
          {signed_change_price > 0 ? '🔺' : '🔻'}
          {parseInt(signed_change_price).toLocaleString()}원
        </p>
        <p>{(signed_change_rate * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default Box;
