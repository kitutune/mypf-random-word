import Image from 'next/image';
import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full h-5 bg-white opacity-20 text-center'>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};
