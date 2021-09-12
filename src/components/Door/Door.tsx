import cc from 'classcat';
import React, { useState } from 'react';
import classes from 'components/Door/Door.module.css';

interface Props {
  checked?: boolean;
}
export const Door: React.FC = (props) => {
  const [isShow, setIsShow] = useState(false);
  const handleDoor = (e, setter) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    console.log(setter);

    console.log('クリックした');
    setIsShow((pre) => !pre);
  };
  console.log(isShow);

  return (
    <div
      // className={`menuWrapper ${isShow ? 'menuWrapper__active' : ''}`}
      onClick={(e) => {
        handleDoor(e, setIsShow);
        // handleDoor(e);
      }}
      // onClick={handleDoor}
    >
      <h1>CSSで画像を真っ二つに切り開く</h1>
      <input
        type='checkbox'
        checked={isShow}
        className={`${classes.check} ${classes.slide}`}
        id='checked-slide'
      />

      <label className={`${classes.switch} ${classes.slide}`} htmlFor='checked-slide'></label>

      <div className={classes.gatefold}>
        <div className={classes.header}>
          <h1>CSSで画像を真っ二つに切り開く</h1>
          {props.children}
        </div>
      </div>
      <h1>CSSで画像を真っ二つに切り開く</h1>
    </div>
  );
};
