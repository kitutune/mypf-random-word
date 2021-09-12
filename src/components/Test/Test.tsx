import cc from 'classcat';
import React, { useState } from 'react';
import classes from 'components/Test/Test.module.css';
export const Test: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const closeWithClickOutSideMethod = (e, setter) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    if (e.target === e.currentTarget) {
      //メニューの外側をクリックしたときだけメニューを閉じる
      console.log('メニューの外側をクリックした');
      setter(false);
    } else {
      console.log('メニューの内側をクリックした');
    }
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          toggle menu
        </button>
        <div
          className={`menuWrapper ${isShow ? 'menuWrapper__active' : ''}`}
          onClick={(e) => {
            closeWithClickOutSideMethod(e, setIsShow);
          }}
        >
          <div className='menu'>
            <ul className='menuList'>
              <li>ここを押しても閉じない</li>
              <li>でも枠外のグレーを押すと</li>
              <li>閉じるよ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <input type='checkbox' className='{check slide' id='checked-slide' />
      <label
        className='switch slide'
        // for="checked-slide"
      ></label>
      <div className={classes.gatefold}>この部分の要素が画像の下に隠れる </div> */}
    </div>
  );
};
