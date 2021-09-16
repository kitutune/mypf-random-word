import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
export const Footer: React.FC = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full h-5 bg-gray-500 opacity-80 text-center'>
      <a
        href='https://github.com/kitutune/mypf-random-word'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute bottom-0 left-auto right-auto'
      >
        <AiFillGithub />
      </a>
    </footer>
  );
};
