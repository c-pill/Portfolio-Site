import React from "react";
import { GitLogo } from "./ProjectLogos";
import ProjectStyles from '@/styles/Projects.module.css';
import { ProjectData, ProjectProps } from "@/types/project-data.type";
import SharedStyles from '@/styles/Shared.module.css';

import * as LanguageCards from '@/components/global/skills/Languages';
import * as FrameworkCards from '@/components/global/skills/Frameworks';
import * as ToolsAndServicesCards from '@/components/global/skills/ToolsAndServices';

const shadowOn = true;

const languageCards = Object.keys(LanguageCards).map((card) => LanguageCards[card]({shadowOn}));
const frameworkCards = Object.keys(FrameworkCards).map((card) => FrameworkCards[card]({shadowOn}));
const toolsServicesCards = Object.keys(ToolsAndServicesCards).map((card) => ToolsAndServicesCards[card]({shadowOn}));

const languageDict = new Map();
const frameworkDict = new Map();
const toolsServicesDict = new Map();

languageCards.forEach((card) => languageDict.set(card.key, card));
frameworkCards.forEach((card) => frameworkDict.set(card.key, card));
toolsServicesCards.forEach((card) => toolsServicesDict.set(card.key, card));

export function ProjectCard({ props }: ProjectProps) {
   return (
      <div className={ProjectStyles.projectCard} key={props.name}>
      <div className={ProjectStyles.projectText}>
         <h2>
            <a href={props.url} target="_blank" className={ProjectStyles.projectLink}>
               {props.name}
            </a>
            <GitLogo />
         </h2>
         <h3>{props.description}</h3>
         <h5>Size: {props.size_string}</h5>
         <h5>Created: {props.created_at_string}</h5>
         <h5>Last updated: {props.pushed_at_string}</h5>
      </div>
         <div 
            className={SharedStyles.skillContainer} 
            style={{
               gap: '10px 20px',
               margin: '0',
               marginLeft: 'auto',
               marginRight: 'auto'
            }}
         >
               {
                  props.languages.map((language) => languageDict.get(language))
               }
               {
                  [...new Set(props.description.split(' '))].map((word) => {
                     if (/\p{P}/u.test(word.slice(-1))) word = word.slice(0, -1);
                     let dictResult = frameworkDict.get(word);
                     if (dictResult) return dictResult;
                     dictResult = toolsServicesDict.get(word);
                     return dictResult;
                  })
               }
         </div>
      </div>
   );
};

export function GitApiErrorCard() {
   return (
      <div 
         id='gitError'
         className={ProjectStyles.projectCard}
         key='gitError'
         style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '1dvw'
         }}>
         <h2>
            <a href='https://github.com/c-pill?tab=repositories' target="_blank" className={ProjectStyles.projectLink}>
               My GitHub Projects
            </a>
            <GitLogo />
         </h2>
         <h3 style={{textAlign: 'center', justifyContent: 'center'}}>Looks like there was an issue with the GitHub API. No worries! Press this card&apos;s title to view my projects on GitHub!</h3>
      </div>
   );
};

export function ProjectCards(data: ProjectData[]) {
   return (
      <>
         {data.map((project) => (
            <ProjectCard key={project.name} props={project}/>
         ))}
      </>
   );
};
