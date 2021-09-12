import cc from 'classcat';
import React, { useState } from 'react';
import classes from 'components/Door/Door.module.css';

export const Door: React.FC = (props) => {
  const [isShow, setIsShow] = useState(false);
  const handleDoor = (e: React.MouseEvent) => {
    // console.log('e.target', e.target);
    // console.log('e.currentTarget', e.currentTarget);
    // console.log(setter);

    console.log('クリックした');
    setIsShow((pre) => !pre);
  };
  console.log(isShow);

  return (
    <div onClick={handleDoor}>
      <h1>上</h1>
      <input type='checkbox' checked={isShow} className={`${classes.check} ${classes.slide}`} />

      <div className={classes.gatefold}>
        <div className={classes.header}>
          <h1>真ん中</h1>
          {props.children}
        </div>
      </div>
      <h1>した</h1>
    </div>
  );
};
