import React, { useCallback, useEffect, useState } from 'react';
import classes from 'components/Door/Door.module.css';
import { useLogin } from 'components/Hooks/useLogin';
import { supabase } from 'libs/supabase';
const getuser = async (userId: string) => {
  try {
    if (userId === undefined) {
      return;
    }
    const { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', userId);

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

export const Door: React.FC = (props) => {
  const { session, signInWithGithub, signOut, userId } = useLogin();

  const [isShow, setIsShow] = useState<boolean>(false);
  const handleDoor = useCallback(
    (e: React.MouseEvent) => {
      if (session) {
        return;
      }
      signInWithGithub();
      console.log('クリックした');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isShow],
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (session) {
      setIsShow(true);
      getuser(userId);
    } else {
      setIsShow(false);
    }
    return () => {};
  });
  return (
    <>
      <div onClick={handleDoor}>
        <input
          type='checkbox'
          defaultChecked={isShow}
          className={`${classes.check} ${classes.slide}`}
        />
        <div className={classes.gatefold}>
          <div className={classes.header}>
            <div className='w-full h-full'> {props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
