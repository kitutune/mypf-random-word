import React, { useCallback, useEffect, useState } from 'react';
import { useWordLists } from 'components/Hooks/useWordLists';
export const RandomWord: React.FC = () => {
  const [messageNo, setMessageNo] = useState(0);
  const { getWords, words } = useWordLists();
  const handleChange = useCallback(() => {
    const number = Math.floor(Math.random() * words.length);
    // supabaseのデータを参照する際、0の値のwordが空文字になるので回避処理
    if (number === 0) {
      return setMessageNo(1);
    }
    setMessageNo(number);
  }, [words]);

  useEffect(() => {
    getWords();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (words.length === 0) {
    return <div>NoWORD!!</div>;
  }
  if ((words[0].word = '')) {
    return <div>NoWORD!!</div>;
  }

  return (
    <div className='text-6xl'>
      <h1> ランダムワード</h1>
      <div className='text-6xl'>
        <a href={words[messageNo].url}> {words[messageNo].word}</a>
      </div>
      <button onClick={handleChange}>push</button>
    </div>
  );
};
