import Link from 'next/link';
import React from 'react';
export const HouseIcon = () => {
  return (
    <svg
      className='w-8 mr-2 fill-current'
      xmlns='http://www.w3.org/2000/svg'
      data-name='Capa 1'
      viewBox='0 0 16.16 12.57'
    >
      <Link href='/'>
        <a>
          <defs></defs>
          <path d='M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z'></path>
          <path d='M16.16 5.82H0L8.08 0l8.08 5.82z'></path>{' '}
        </a>
      </Link>
    </svg>
  );
};
