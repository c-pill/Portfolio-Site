import { useEffect } from 'react';
import Header from '@/components/global/Header';
import '@/components/global/skills/Languages';
import React from 'react';
import Head from 'next/head';
import { AboutEducation, AboutSkills, AboutWork } from '@/components/about/AboutSections';
import { ExperienceObserver } from '@/public/scripts/About.script';

export default function AboutMe() {
   useEffect(() => {
      const body = document.body;
      // body.style.background = 'rgb(22, 144, 196)';
      body.style.background = 'rgba(195, 195, 197, 1)';
      body.style.overflowY = 'scroll';

      // const script = document.createElement('script');
      // script.src = 'scripts/About.script.ts';
      // body.appendChild(script);

      // return () => {
      //    body.removeChild(script);
      // }

      ExperienceObserver();

   }, []);


   return (
      <>
         <script 
            async={false}
            type='module' 
            src='scripts/About.script.ts'
         ></script>
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
      </>
   );
};
