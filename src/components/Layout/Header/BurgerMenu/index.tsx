import React from 'react';
import { BurgerIcon } from './BurgerIcon';
import { useTab } from 'components/Hooks/useTab';
import { Login } from 'components/Login';

export const BurgerMenu: React.FC = () => {
  const { RandomWordOn, MyWordListOn, SubmissionOn } = useTab();
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} className=' '>
        <button className='text-white focus:outline-none'>
          <BurgerIcon />
        </button>
      </div>
      <ul tabIndex={0} className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
        <li>
          <a onClick={RandomWordOn}>RandomWord</a>
        </li>
        <li>
          <a onClick={MyWordListOn}>MyWordList</a>
        </li>
        <li>
          <a onClick={SubmissionOn}>Submission</a>
        </li>
        <li>
          <a>
            <Login />
          </a>
        </li>
      </ul>
    </div>
  );
};
