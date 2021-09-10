import React, { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
type Props = {
  children: ReactNode;
};
export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
