import React, { useCallback, useEffect, useState } from 'react';
import classes from 'components/Door/Door.module.css';
import { useLogin } from 'components/Hooks/useLogin';
import { useUser } from 'components/Hooks/useUser';

export const Door: React.FC = (props) => {
  const { session, signInWithGithub, userId } = useLogin();

  const { getuser } = useUser(userId);
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
