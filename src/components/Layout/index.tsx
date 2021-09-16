import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Background } from 'components/Background';
type Props = {
  children: ReactNode;
};
export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Background />
      <Header />
      <div className='text-center'>
        <div className='flex flex-col justify-center pt-40 pb-40 w-4/5 m-auto '>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
