import React, { useCallback, useEffect, useState } from 'react';
import classes from 'components/Door/Door.module.css';
import { useLogin } from 'components/Hooks/useLogin';

export const Door: React.FC = (props) => {
  const { session, signInWithGithub, signOut } = useLogin();
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleDoor = useCallback(
    (e: React.MouseEvent) => {
      if (session) {
        console.log('a');
        return;
      }
      signInWithGithub();
      console.log('クリックした');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isShow],
  );
  useEffect(() => {
    if (session) {
      setIsShow(true);
    }
    return () => {};
  }, [session]);
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
