import React, { useCallback, useEffect, useState } from 'react';
import { useWordLists } from 'components/Hooks/useWordLists';
export const RandomWord: React.FC = () => {
  const [messageNo, setMessageNo] = useState(0);
  const { getWords, words } = useWordLists();
  const handleChange = useCallback(() => {
    const a = Math.floor(Math.random() * words.length);
    setMessageNo(a);
  }, [words]);
  console.log(words);

  useEffect(() => {
    getWords();
    return () => {};
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
