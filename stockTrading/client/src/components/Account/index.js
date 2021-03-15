import React, { useRef } from 'react';
import Trade from '../Trade';

function Account() {
  const seedRef = useRef(1000000);
  const stockRef = useRef(0);

  return (
    <div className='account-container'>
      <div>현재 나의 자산 : {seedRef.current.toLocaleString()}원</div>
      <div>현재 보유 주식 : {stockRef.current}주</div>
      <Trade seed={seedRef} countStock={stockRef} />
    </div>
  );
}

export default Account;
