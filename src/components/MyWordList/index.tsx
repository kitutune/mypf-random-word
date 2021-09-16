import React, { useEffect, useState } from 'react';
import { useLogin } from 'components/Hooks/useLogin';
import { supabase } from 'libs/supabase';
export const MyWordList = () => {
  const { userId } = useLogin();
  const [myWords, setMyWords] = useState([
    {
      word: '',
      id: '',
      url: '',
      user_id: '',
    },
  ]);
  console.log(userId);
  console.log(myWords);
  console.log('cccc');

  const getMyWords = async (userId: string | undefined) => {
    if (!userId) {
      return;
    }
    const { data, error } = await supabase.from('wordbox').select('*').eq('user_id', userId);

    if (data) {
      setMyWords(data);
    } else {
      console.log('error');
    }
  };
  const deleteButton = async (props: number) => {
    alert('click');

    const { error } = await supabase.from('wordbox').delete().eq('id', props);
    console.log(`errorは${error}`);
  };

  useEffect(() => {
    console.log(userId);

    if (!userId) {
      return;
    }
    getMyWords(userId);
    return () => {};
  }, [userId]);

  return (
    <div className=' '>
      {/* {Object.entries(words).map(([value, defaultValue], i) => ( */}
      {myWords.map((myData, i) => (
        <div className='flex flex-wrap m-auto' key={i}>
          <div className='w-3/5 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white'>
            {myData.word}
          </div>
          <button
            className='w-1/5 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800'
            onClick={() => deleteButton(myData.id)}
          >
            DELETE{myData.id}
          </button>
        </div>
      ))}
    </div>
  );
};
{
  /* ///////////// */
}
//   <div className='flex flex-wrap m-auto'>
//   <div className='rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white'>
//     Buttonaaaaaaaaaaaaaaaaaaaaaaaaaaaa Daarker
//   </div>
//   <button
//     className='rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800'
//     href=''
//   >
//     DELETE
//     <svg
//       role='img'
//       viewBox='0 0 24 24'
//       xmlns='http://www.w3.org/2000/svg'
//       className='w-5 h-5 text-white fill-current text-center'
//     >
//       <title>GitHub icon</title>
//       <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
//     </svg>
//   </button>
// </div>