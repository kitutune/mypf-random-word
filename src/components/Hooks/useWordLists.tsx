import { useCallback, useState } from 'react';
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
  const getWords = useCallback(async () => {
    const { data: wordbox, error } = await supabase.from('wordbox').select('id,url,word');
    if (wordbox) {
      setWords(wordbox);
    }
  }, []);

  return { getWords, words };
};
