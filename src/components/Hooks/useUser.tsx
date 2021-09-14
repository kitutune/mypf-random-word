import React from 'react';
import { supabase } from 'libs/supabase';

export const useUser = (userId: string) => {
  const getuser = async (userId: string) => {
    try {
      if (userId === undefined) {
        return;
      }
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId);

      if (profiles.length === 0) {
        registerUser(userId);
        return console.log(`user${userId}をDBに登録します${profiles.length}`);
      }
      if (error) {
        throw error;
      }
      if (profiles) {
        console.log('userの読み込みに成功しました！');
      }
    } catch (error) {
      console.log(`userの読み込みに失敗しました！error内容は${error}`);
    }
  };

  const registerUser = async (userId) => {
    const { data, error } = await supabase.from('profiles').insert([{ id: userId }]);
  };
  return { getuser };
};
