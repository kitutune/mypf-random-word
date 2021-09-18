import { supabase } from 'libs/supabase';

export const useUser = () => {
  const getuser = async (userId: string) => {
    if (userId === undefined) {
      return;
    }
    const { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', userId);

    if (!profiles || profiles.length === 0) {
      registerUser(userId);
      return console.log(`user${userId}をDBに登録します${profiles?.length}`);
    }
    if (error) {
      return console.log(`error！userの読み込みに失敗しました！内容は${error}`);
    }
  };

  const registerUser = async (userId: string) => {
    const { data, error } = await supabase.from('profiles').insert([{ id: userId }]);
  };
  return { getuser };
};
