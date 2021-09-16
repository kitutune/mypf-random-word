import React, { useCallback, useState } from 'react';
import { supabase } from 'libs/supabase';
import { Props } from 'pages';
export const Submission = (props: Props) => {
  const titles = ['word', 'url'];
  const holder = [
    'あなたの好きな作品のセリフや一節を入力してください',
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
    <div>
      <div className='min-h-screen  flex items-center'>
        <div className='container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300'>
          <div className='py-12 p-10 bg-white rounded-xl'>
            {Object.entries(form).map(([value, defaultValue], i) => (
              <div className='mb-6' key={i}>
                <label
                  className='mr-4 uppercase text-gray-700 font-bold inline-block mb-2'
                  htmlFor='name'
                >
                  {titles[i]}
                </label>
                <input
                  type='text'
                  className='border text-xs text-black bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded'
                  placeholder={holder[i]}
                  value={defaultValue}
                  onChange={handleChange(value)}
                />
              </div>
            ))}

            <button
              onClick={submission}
              className='w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'
            >
              ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
