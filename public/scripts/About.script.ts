import AboutStyles from '@/styles/About.module.css';

export function ExperienceObserver() {
   const experienceContainers = document.querySelectorAll(`.${AboutStyles.experienceContainer}`);
   const observer = new IntersectionObserver((entries) => {
      entries[0].target.classList.toggle(AboutStyles.show, entries[0].isIntersecting);
   }, 
   {
      threshold: 0.3
   });
   experienceContainers.forEach((experience) => observer.observe(experience));
};
