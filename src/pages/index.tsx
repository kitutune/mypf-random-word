import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Login } from 'components/Login';
import { Test } from 'components/Test';

const Home: NextPage = () => {
  return (
    <main>
      amu
      <Test />
      <Login />
      last
    </main>
  );
};

export default Home;
