import React, { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
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
        <div className='pt-40 pb-40 w-4/5 m-auto'>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};
