import type { NextPage } from 'next';
import { useTab } from 'components/Hooks/useTab';
import { MyWordList } from 'components/MyWordList';
import { RandomWord } from 'components/RandomWord';
import { Submission } from 'components/Submission';

const Home: NextPage = () => {
  const { tab } = useTab();
  console.log(tab);
  console.log(tab.tab1);

  return (
    <main>
      {tab.tab1 ? <RandomWord /> : null}
      {tab.tab2 ? <MyWordList /> : null}
      {tab.tab3 ? <Submission /> : null}
    </main>
  );
};

export default Home;
