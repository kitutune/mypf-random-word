import cc from 'classcat';
import React, { useState } from 'react';
import classes from 'components/Door/Door.module.css';
export const Door: React.FC = (props) => {
  return (
    <div>
      <h1>CSSで画像を真っ二つに切り開く</h1>
      <input type='checkbox' className={`${classes.check} ${classes.slide}`} id='checked-slide' />

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
