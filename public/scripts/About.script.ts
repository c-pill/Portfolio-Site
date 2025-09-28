import AboutStyles from '@/styles/About.module.css';
import { Dispatch, SetStateAction } from 'react';

export function ExperienceObserver() {
   const experienceContainers = document.querySelectorAll(`.${AboutStyles.experienceContainer}`);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         entry.target.classList.toggle(AboutStyles.show, entry.isIntersecting);
      });
   }, 
   {
      threshold: 0.3
   });
   experienceContainers.forEach((experience) => observer.observe(experience));
};

export function AboutChangeBackground(i: number, setBackgroundObjectSrc: Dispatch<SetStateAction<string>>) {
   const backgroundObjects = document.querySelectorAll<HTMLElement>(`.${AboutStyles.backgroundObject}`);
   backgroundObjects.forEach((backgroundObject, index) => {
      backgroundObject.style.animation = `${AboutStyles.backgroundAnimation} 3.5s linear ${index * 0.5}s infinite alternate both`;
      if (i == 0) {
         setBackgroundObjectSrc('/images/experiences/UGADawg.png');
         document.body.style.background = 'rgb(186, 12, 47)';
      }
      else if (i == 1) {
         setBackgroundObjectSrc('/images/background/laptop\ graphic.png');
         document.body.style.background = 'blue';
      }
      else if (i == 2) {
         setBackgroundObjectSrc('/images/background/tool\ graphic.png');
         document.body.style.background = 'green';
      }
   });
};

export function AboutObserver(sectionIndexRef: React.RefObject<number>, setBackgroundObjectSrc: Dispatch<SetStateAction<string>>) {
   const aboutSections = document.querySelectorAll(`.${AboutStyles.aboutSection}`);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const index = Array.from(aboutSections).indexOf(entry.target);
            sectionIndexRef.current = index;
            AboutChangeBackground(index, setBackgroundObjectSrc);
         }
      });
   },
   {
      threshold: 0.1
   });
   aboutSections.forEach((section) => observer.observe(section));
};
