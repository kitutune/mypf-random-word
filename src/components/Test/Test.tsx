import React from 'react';
import classes from 'components/Test/Test.module.css';
// import classes from 'components/Background/Background.module.css';
export const Test: React.FC = () => {
  return (
    <div>
      <input type='checkbox' className='{check slide' id='checked-slide' />
      <label
        className='switch slide'
        // for="checked-slide"
      ></label>
      <div className={classes.gatefold}>{/* この部分の要素が画像の下に隠れる  */}</div>
    </div>
  );
};
