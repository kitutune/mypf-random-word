import Image from 'next/image';
import classes from 'components/Background/Background.module.css';
import { useTab } from 'components/Hooks/useTab';

export const Background = () => {
  const { tab } = useTab();
  console.log(tab);

  return (
    <div className={classes.bgWrap}>
      {tab.tab3 ? (
        <Image alt='morning' src='/morning.jpeg' layout='fill' objectFit='cover' quality={100} />
      ) : null}
      {tab.tab2 ? (
        <Image alt='noon' src='/afternoon.jpeg' layout='fill' objectFit='cover' quality={100} />
      ) : null}
      {tab.tab1 ? (
        <Image alt='night' src='/night.jpeg' layout='fill' objectFit='cover' quality={100} />
      ) : null}
    </div>
  );
};
