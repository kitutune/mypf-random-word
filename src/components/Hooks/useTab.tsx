import useSWR from 'swr';

const useSharedState = (key: string, fallbackData: any) => {
  const { data, mutate } = useSWR(key, { fallbackData });
  return [data, mutate];
};

export const useTab = () => {
  const [tab, setTab] = useSharedState('tabsState', { tab1: true, tab2: false, tab3: false });

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
