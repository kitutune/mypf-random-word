import React, { useState } from 'react';
import { supabase } from 'libs/supabase';

export const RandomWord = () => {
  const [messageNo, setMessageNo] = useState();
  const [words, setWords] = useState([
    {
      word: '',
      id: '',
      url: '',
    },
  ]);
  const messages = ['あああ', 'いいい', 'ううう'];
  const handleChange = async () => {
    // const a = Math.floor(Math.random() * messages.length);
    // setMessageNo(a);

    const { data: wordbox, error } = await supabase.from('wordbox').select('*');
    if (wordbox) {
      setWords(wordbox);
    }

    const a = Math.floor(Math.random() * words.length);
    setMessageNo(a);
  };
  console.log(words);
  console.log(words[0].id);
  // console.log(words.id);
  // console.log(words.word);

  return (
    <div className='text-6xl'>
      <h1> ランダムワード</h1>
      {/* <h1>→{messages[messageNo]}←</h1>
      <h1>→{messageNo}←</h1>
      <h1>→{[messageNo]}←</h1> */}
      <h1>→{words[messageNo].word}←</h1>
      <h1>→{words[messageNo].url}←</h1>
      <h1>→{words[messageNo].id}←</h1>
      <button onClick={handleChange}>push</button>
    </div>
  );
};
