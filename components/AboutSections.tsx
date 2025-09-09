import { ABB, ChimneyLakesSwimTeam, EdibleBrands, TheCoderSchool, UgaAi, UgaCsci } from "./AboutExperiences";
import AboutStyles from '@/styles/About.module.css';
import { Asm, C, Cpp, Cs, Css, Html, Java, Javascript, Python, Sql, Swift, Typescript } from "./LanguageCards";
import { Contentful, DotNet, MongoDB, MongooseODM, NestJS, NextJS, NodeJS, ReactJS, SpringBoot } from "./FrameworkCards";
import { DevOps, ESLint, Figma, GitHub, Kaggle, Matlab, MicrosoftSqlServer, MSOffice, MySql, Postman, SwaggerUI, Vercel, VirtualBox, VisualStudio, VisualStudioCode, Weka, Xcode } from "./Tools_ServicesCards";

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
            <div className={AboutStyles.skillContainer}>
               <C />
               <Cpp />
               <Cs />
               <Python />
               <Java />
               <Swift />
               <Asm />
               <Html />
               <Css />
               <Javascript />
               <Typescript />
               <Sql />
            </div>
         </div>
         <div className={AboutStyles.experienceContainer}>
            <h3 style={{textAlign: 'center'}}>Frameworks</h3>
            <div className={AboutStyles.skillContainer}>
               <NodeJS />
               <ReactJS />
               <NestJS />
               <NextJS />
               <MongoDB />
               <MongooseODM />
               <SpringBoot />
               <Contentful />
               <DotNet />
            </div>
         </div>
         <div className={AboutStyles.experienceContainer}>
            <h3 style={{textAlign: 'center'}}>Tools/Services</h3>
            <div className={AboutStyles.skillContainer}>
               <VisualStudioCode />
               <VisualStudio />
               <GitHub />
               <Matlab />
               <Xcode />
               <Vercel />
               <Postman />
               <Weka />
               <VirtualBox />
               <MSOffice />
               <DevOps />
               <MySql />
               <MicrosoftSqlServer />
               <SwaggerUI />
               <Kaggle />
               <ESLint />
               <Figma />
            </div>
         </div>
      </section>
   );
};