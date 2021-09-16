import useSWR from 'swr';

const useSharedState = (key: any, fallbackData: any) => {
  const { data, mutate } = useSWR(key, { fallbackData });
  return [data, mutate];
};

export const useTab = () => {
  const [tab, setTab] = useSharedState(
    { tab1: 'tab1', tab2: 'tab2', tab3: 'tab3' },
    { tab1: true, tab2: false, tab3: false },
  );

  const RandomWordOn = () => {
    setTab({ tab1: true, tab2: false, tab3: false });
  };
  const MyWordListOn = () => {
    setTab({ tab1: false, tab2: true, tab3: false });
  };
  const SubmissionOn = () => {
    setTab({ tab1: false, tab2: false, tab3: true });
  };

  return { tab, RandomWordOn, MyWordListOn, SubmissionOn };
};
