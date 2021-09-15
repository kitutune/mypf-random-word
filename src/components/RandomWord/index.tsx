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

  return (
    <div className='text-6xl'>
      <h1> ランダムワード</h1>
      <div className='text-6xl'>
        <a href={words[messageNo].url}> {words[messageNo].word}</a>
      </div>
      <h1>→{words[messageNo].word}←</h1>
      <h1>→{words[messageNo].url}←</h1>
      <h1>→{words[messageNo].id}←</h1>

      <button onClick={handleChange}>push</button>
    </div>
  );
};
