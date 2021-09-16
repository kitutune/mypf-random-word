import type { NextPage } from 'next';
import { useLogin } from 'components/Hooks/useLogin';
import { useTab } from 'components/Hooks/useTab';
import { MyWordList } from 'components/MyWordList';
import { RandomWord } from 'components/RandomWord';
import { Submission } from 'components/Submission';

export type Props = {
  userId: string;
};

const Home: NextPage = () => {
  const { tab } = useTab();
  const { userId } = useLogin();

  return (
    <main>
      {tab.tab1 ? <RandomWord /> : null}
          {tab.tab2 ? <MyWordList userId={userId} /> : null}
          {tab.tab3 ? <Submission userId={userId} /> : null}
    </main>
  );
};

export default Home;
