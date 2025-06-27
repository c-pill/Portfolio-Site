import Header from '@/components/Header';
import ProfilePicture from '@/components/ProfilePicture';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {    
    const body = document.body;
    const content = document.getElementById('content');
    const greeting = document.getElementById(styles.greeting);
    const welcome = document.getElementById(styles.welcome);
    const profilePicture = document.getElementById(styles.profilePicture);
    const excuse = document.getElementById(styles.excuse);

    body.style.background = 'rgb(214, 168, 137)';
    body.style.overflowY = 'hidden';

    content.style.background = 'none';
    
    greeting.style.opacity = '1';
    greeting.style.top = '26%';

    welcome.style.opacity = '1';
    welcome.style.bottom = '5%';

    profilePicture.style.opacity = '1';
    profilePicture.style.right = '5%';

    excuse.style.opacity = '1';
  });

  // add swoosh animation on repeat?
  const homeText = `Hello! Welcome to the resume site of Connor Pillsworth!`;

  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <Header />
      <div id='content' className='page-fade-in'>
        <div id={styles.greeting}>Hello!</div>
        <div id={styles.welcome}>Welcome to Connor Pillsworth's Portfolio!</div>
        <ProfilePicture />
        <div id={styles.excuse}>***Proceed with caution: low budget animations ahead</div>
      </div>
    </>
  );
}
