import Header from '@/components/Header';
import ProfilePicture from '@/components/ProfilePicture';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Home() {
  const [animated, setAnimated] = useState(false);

  const tooSmall = useMediaQuery('(max-height: 373px), (max-width: 393)');

  useEffect(() => {    
    const body = document.body;
    const content = document.getElementById('content');
    const greeting = document.getElementById(styles.greeting);
    const welcome = document.getElementById(styles.welcome);
    const profilePicture = document.getElementById(styles.profilePicture);
    const excuse = document.getElementById(styles.excuse);

    body.style.background = 'rgb(214, 168, 137)';
    body.style.display = 'flex';
    body.style.overflowY = tooSmall ? 'scroll' : 'hidden';
    
    content.style.display = 'block';
    content.style.background = 'none';
    content.style.width = '100%';
    content.style.marginTop = '-10%';
    
    if (animated) {
      greeting.style.transition = 'all 0s';
      welcome.style.transition = 'all 0s';
      excuse.style.transition = 'all 0s';
      profilePicture.style.transition = 'all 0s';
    }
    else {
      setAnimated(true);
    }

    greeting.style.opacity = '1';
    greeting.style.top = '26%';

    welcome.style.opacity = '1';
    welcome.style.bottom = '5%';

    profilePicture.style.opacity = '1';
    profilePicture.style.right = '5%';

    excuse.style.opacity = '1';
  });

  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <Header />
      <div id='content'>
        <div id={styles.greeting}>Hello!</div>
        <ProfilePicture />
        <div id={styles.welcome}>Welcome to Connor Pillsworth's Portfolio!</div>
        <div id={styles.excuse}>***Proceed with caution: low budget animations ahead</div>
      </div>
    </>
  );
}
