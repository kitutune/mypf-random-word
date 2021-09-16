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
  if (words.length <= 1) {
    return <div>NoWORD!!</div>;
  }
  if ((words[0].word = '')) {
    return <div>NoWORD!!</div>;
  }
  return (
    <div className='lg:text-6xl sm:text-2xl'>
      <h1> ランダムワード</h1>
      <div className='lg:text-6xl sm:text-2xl'>
        <a href={words[messageNo].url} target='_blank' rel='noreferrer noopener'>
          {words[messageNo].word}
        </a>
      </div>
      <button onClick={handleChange}>push</button>
    </div>
  );
};
