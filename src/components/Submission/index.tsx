import React, { useCallback, useState } from 'react';
import { supabase } from 'libs/supabase';
import { Props } from 'pages';
export const Submission = (props: Props) => {
  const titles = ['word', 'url'];
  const holder = [
    '好きな作品のセリフや一節を入力してください',
    '入力した作品のリンクを入力してください',
  ];
  const [form, setForm] = useState({
    word: '',
    url: '',
  });
  const handleChange = useCallback(
    (input) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => {
        return { ...prevForm, [input]: e.target.value };
      });
    },
    [],
  );
  const submission = useCallback(async () => {
    if (!props.userId) {
      return console.log('NoUserID!');
    }
    if (form.word.length <= 1 || form.url.length <= 5) {
      return alert('wordは２文字以上、URLも入力してください');
    }
    const { data, error } = await supabase
      .from('wordbox')
      .insert([{ user_id: props.userId, word: form.word, url: form.url }]);
    setForm(({ ...pre }) => ({
      word: '',
      url: '',
    }));
  }, [props.userId, form]);
  return (
    <>
      <form className='flex flex-wrap gap-3 w-full  p-5 '>
        {Object.entries(form).map(([value, defaultValue], i) => (
          <label className=' uppercase w-full flex flex-col' key={i}>
            <span className='font-bold text-black mb-3'> {titles[i]}</span>
            <input
              className='rounded-md peer pl-1 pr-2 md:text-base text-2xs text-black py-2 border-2 border-gray-400 placeholder-gray-400'
              type='text'
              placeholder={holder[i]}
              value={defaultValue}
              onChange={handleChange(value)}
            />
          </label>
        ))}

        <button
          onClick={submission}
          className='peer  pr-2 mt-5 w-full border-2 bg-indigo-600 py-2 rounded-md hover:bg-indigo-500 transition duration-300'
          type='button'
          // className='w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'
        >
          ENTER
        </button>
      </form>
    </>
  );
};
