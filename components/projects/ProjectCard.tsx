import React from "react";
import SharedStyles from '@/styles/Shared.module.css';
import ProjectStyles from '@/styles/Projects.module.css';
import { ProjectData, ProjectProps } from "@/types/project-data.type";

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
               {
                  props.logo
               }
            </h2>
            <h3>{props.description}</h3>
            <h5 style={{opacity: props.size_string ? 0 : 1}}>Size: {props.size_string}</h5>
            <h5>Created: {props.created_at_string}</h5>
            <h5 style={{opacity: props.pushed_at_string ? 0 : 1}}>Last updated: {props.pushed_at_string}</h5>
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

export function ProjectCards(data: ProjectData[]) {
   return (
      <>
         {data.map((project) => (
            <ProjectCard key={project.name} props={project}/>
         ))}
      </>
   );
};
