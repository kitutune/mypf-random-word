import { useState } from 'react';
import { supabase } from 'libs/supabase';

export const useWordLists = () => {
  const [words, setWords] = useState([
    {
      word: '',
      id: '',
      url: '',
      user_id: '',
    },
  ]);
  const getWords = async () => {
    const { data: wordbox, error } = await supabase.from('wordbox').select('*');
    if (wordbox) {
      setWords(wordbox);
    }
  };
  return { getWords, words };
};
