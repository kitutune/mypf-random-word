import React, { useCallback, useState } from 'react';
import { Props } from 'pages';
export const RandomWord = (props: Props) => {
  const [messageNo, setMessageNo] = useState(0);

  const handleChange = useCallback(() => {
    if (!props.words) {
      return;
    }
    const number = Math.floor(Math.random() * props.words.length);
    // supabaseのデータを参照する際、0の値のwordが空文字になるので回避処理
    if (number === 0) {
      return setMessageNo(1);
    }
    setMessageNo(number);
  }, [props.words]);

  if (!props.words) {
    return <>Loading</>;
  }
  if (props.words.length <= 1) {
    return <div>NoWORD!!</div>;
  }
  if ((props.words[0].word = '')) {
    return <div>NoWORD!!</div>;
  }
  return (
    <div className='w-10/12 lg:text-6xl sm:text-2xl'>
      <h1> ランダムワード</h1>
      <div className='lg:text-6xl sm:text-2xl text-white'>
        <a href={props.words[messageNo].url} target='_blank' rel='noreferrer noopener'>
          {props.words[messageNo].word}
        </a>
      </div>

      <button
        className='btn btn-wide btn-lg btn-primary btn-active'
        role='button'
        aria-pressed='true'
        onClick={handleChange}
      >
        push
      </button>
    </div>
  );
};
