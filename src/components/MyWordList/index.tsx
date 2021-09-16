import React, { useCallback, useEffect, useState } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { supabase } from 'libs/supabase';
import { Props } from 'pages';
export const MyWordList = (props: Props) => {
  const user = props;
  const [myWords, setMyWords] = useState([
    {
      word: '',
      id: '',
      url: '',
      user_id: '',
    },
  ]);

  const getMyWords = useCallback(async (props: Props) => {
    if (!props) {
      return;
    }
    const { data } = await supabase.from('wordbox').select('*').eq('user_id', props.userId);
    if (data) {
      setMyWords(data);
    } else {
      console.log('error');
    }
  }, []);

  const deleteButton = useCallback(
    // このpropsはwordのid
    async (props: number | string) => {
      const { error } = await supabase.from('wordbox').delete().eq('id', props);
      console.log(`errorは${error}`);
      getMyWords(user);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (!props) {
      return;
    }
    getMyWords(props);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (myWords.length === 0) {
    return <div>まだ何もワードを登録されていません</div>;
  }
  return (
    <div className=' flex flex-col justify-center '>
      <div>
        {myWords.map((myData, i) => (
          <div className='flex flex-wrap m-auto justify-center' key={i}>
            <a
              href={myData.url}
              target='_blank'
              rel='noreferrer noopener'
              className='w-3/5 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white'
            >
              {myData.word}
            </a>
            <button
              className=' rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800'
              onClick={() => deleteButton(myData.id)}
            >
              <GoTrashcan />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
