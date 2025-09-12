import { ABB, ChimneyLakesSwimTeam, EdibleBrands, TheCoderSchool, UgaAi, UgaCsci } from "./AboutExperiences";
import AboutStyles from '@/styles/About.module.css';
import SharedStyles from '@/styles/Shared.module.css';
import * as LanguageCards from '@/components/global/skills/Languages';
import * as FrameworkCards from '@/components/global/skills/Frameworks';
import * as ToolsAndServicesCards from '@/components/global/skills/ToolsAndServices';

const languageCards = Object.keys(LanguageCards).map((card) => LanguageCards[card]({}));
const frameworkCards = Object.keys(FrameworkCards).map((card) => FrameworkCards[card]({}));
const toolsAndServicesCards = Object.keys(ToolsAndServicesCards).map((card) => ToolsAndServicesCards[card]({}));

export function AboutEducation() {
   return (
      <section className={AboutStyles.aboutSection}>
         <h1>Education</h1>
         <UgaAi />
         <UgaCsci />
      </section>
   );
};

export function AboutWork() {
   return (
      <section className={AboutStyles.aboutSection}>
         <h1>Work</h1>
         <EdibleBrands />
         <ABB />
         <TheCoderSchool />
         <ChimneyLakesSwimTeam />
      </section>
   );
};

export function AboutSkills() {
   return (
      <section className={AboutStyles.aboutSection}>
         <h1>Skills</h1>
         <div className={AboutStyles.experienceContainer}>
            <h3 style={{textAlign: 'center'}}>Languages</h3>
            <div className={SharedStyles.skillContainer}>
               {
                  languageCards
               }
            </div>
         </div>
         <div className={AboutStyles.experienceContainer}>
            <h3 style={{textAlign: 'center'}}>Frameworks</h3>
            <div className={SharedStyles.skillContainer}>
               {
                  frameworkCards
               }
            </div>
         </div>
         <div className={AboutStyles.experienceContainer}>
            <h3 style={{textAlign: 'center'}}>Tools and Services</h3>
            <div className={SharedStyles.skillContainer}>
               {
                  toolsAndServicesCards
               }
            </div>
         </div>
      </section>
   );
};