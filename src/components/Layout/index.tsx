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
      <div>
        <Header />

        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};
