import { useEffect, useRef, useState } from 'react';
import Header from '@/components/global/Header';
import '@/components/global/skills/Languages';
import React from 'react';
import Head from 'next/head';
import { AboutEducation, AboutSkills, AboutWork } from '@/components/about/AboutSections';
import { AboutObserver, ExperienceObserver } from '@/public/scripts/About.script';
import { AboutBackgroundObjects } from '@/components/about/AboutBackgroundObject';

export default function AboutMe() {
   const sectionIndexRef = useRef(0);
   const [backgroundObjectSrc, setBackgroundObjectSrc] = useState('/images/experiences/UGADawg.png');

   useEffect(() => {
      AboutObserver(sectionIndexRef, setBackgroundObjectSrc);
      ExperienceObserver();
   }, []);

   return (
      <>
         <Head>
               <title>Connor Pillsworth - About Me</title>
               <link 
                  rel="icon" 
                  sizes="any"
                  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>ℹ️</text></svg>"
               />
         </Head>
         <Header />
         <AboutEducation />
         <AboutWork />
         <AboutSkills />
         <AboutBackgroundObjects number={5} src={backgroundObjectSrc}/>
      </>
   );
};
