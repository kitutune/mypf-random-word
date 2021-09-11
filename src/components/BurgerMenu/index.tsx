import React from 'react';
import { BurgerIcon } from './BurgerIcon';

export const BurgerMenu: React.FC = () => {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex='0' className=' '>
        <button className='text-white focus:outline-none'>
          <BurgerIcon />
        </button>
      </div>
      <ul tabIndex='0' className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};
