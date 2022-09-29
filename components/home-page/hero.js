import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/user.png'
          alt='Anik'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Anik</h1>
      <p>I blog about web development and programming.</p>
    </section>
  );
}

export default Hero;
