import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useLogin } from 'components/Hooks/useLogin';
import { useTab } from 'components/Hooks/useTab';
import { useWordLists } from 'components/Hooks/useWordLists';
import { MyWordList } from 'components/MyWordList';
import { RandomWord } from 'components/RandomWord';
import { Submission } from 'components/Submission';

export type Props = {
  getWords?: () => Promise<void>;
  userId?: string;
  words?: { word: string; id: string; url: string; user_id: string }[];
};

const Home: NextPage = () => {
  const { tab } = useTab();
  const { userId } = useLogin();
  const { getWords, words } = useWordLists();

  useEffect(() => {
    console.log('useEfect');

    getWords();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('Home');

  return (
    <>
      {userId ? (
        <main className='flex justify-center'>
          {tab.tab1 ? <RandomWord words={words} /> : null}
          {tab.tab2 ? <MyWordList userId={userId} /> : null}
          {tab.tab3 ? <Submission getWords={getWords} words={words} userId={userId} /> : null}
        </main>
      ) : null}
    </>
  );
};

export default Home;
