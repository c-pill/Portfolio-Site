import { useEffect, useRef, useState } from 'react';
import Header from '@/components/global/Header';
import '@/components/global/skills/Languages';
import React from 'react';
import { AboutEducation, AboutSkills, AboutWork } from '@/components/about/AboutSections';
import { AboutObserver, ExperienceObserver } from '@/public/scripts/About.script';
import { AboutBackgroundObjects } from '@/components/about/AboutBackgroundObject';
import AboutHead from '@/components/pageHeads/AboutHead';

export default function AboutMe() {
   const sectionIndexRef = useRef(0);
   const [backgroundObjectSrc, setBackgroundObjectSrc] = useState('/images/experiences/UGADawg.png');

   useEffect(() => {
      AboutObserver(sectionIndexRef, setBackgroundObjectSrc);
      ExperienceObserver();
   }, []);

   return (
      <>
         <AboutHead />
         <Header />
         <AboutEducation />
         <AboutWork />
         <AboutSkills />
         <AboutBackgroundObjects number={5} src={backgroundObjectSrc}/>
      </>
   );
};
