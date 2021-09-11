import Image from 'next/image';
import classes from 'components/Background/Background.module.css';

export const Background = () => (
  //   <div>

  //     <p className={classes.bgText}>
  //       Image Component
  //       <br />
  //       as a Background
  //     </p>
  //   </div>
  <div className={classes.bgWrap}>
    <Image alt='Mountains' src='/night.jpeg' layout='fill' objectFit='cover' quality={100} />
  </div>
);
