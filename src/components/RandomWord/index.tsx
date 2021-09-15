import React, { useState } from 'react';

export const RandomWord = () => {
  const [messageNo, setMessageNo] = useState();
  const messages = ['あああ', 'いいい', 'ううう'];
  const handleChange = () => {
    const a = Math.floor(Math.random() * messages.length);
    setMessageNo(a);
  };

  return (
    <div className='text-6xl'>
      <h1> ランダムワード</h1>
      <h1>→{messages[messageNo]}←</h1>
      <h1>→{messageNo}←</h1>
      <h1>→{[messageNo]}←</h1>
      <button onClick={handleChange}>push</button>
    </div>
  );
};
