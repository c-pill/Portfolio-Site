import Header from '@/components/global/Header';
import ProfilePicture from '@/components/home/ProfilePicture';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import HomeHead from '@/components/pageHeads/HomeHead';

export default function Home() {
   const [isByWidth, setIsByWidth] = useState(null);

   useEffect(() => {
      const body = document.body;

      body.style.background = 'rgb(214, 168, 137)';
      body.style.display = 'flex';
      
      const checkMeasure = () => {
         const width = window.innerWidth * 0.85;
         const height = window.innerHeight * 0.50;
         setIsByWidth(width < height);
      };

      checkMeasure();

      window.addEventListener('resize', checkMeasure);

      return () => window.removeEventListener('resize', checkMeasure);

   }, []);

   return (
      <>
         <HomeHead />
         <Header />
         <div id={styles.homeContainer}>
            <div style={{padding: '1rem', textAlign: isByWidth ? 'center' : 'left' }}>
               <div id={styles.greeting}>Hello!</div>
               <div id={styles.welcome}>Welcome to Connor Pillsworth&apos;s Portfolio!</div>
               <div id={styles.excuse}>***Proceed with caution: low budget animations ahead</div>
            </div>
            <ProfilePicture />
         </div>
      </>
   );
};
