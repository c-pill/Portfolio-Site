import React, { JSX } from "react";
import { GitLogo } from "./ProjectLogos";
import styles from '@/styles/Projects.module.css';
import { ProjectData, ProjectProps } from "@/types/project-data.type";
import * as LanguageCards from '@/components/LanguageCards';
import * as FrameworkCards from '@/components/FrameworkCards';
import * as Tools_ServicesCards from '@/components/Tools_ServicesCards';

const languageCards = Object.keys(LanguageCards).map((card) => LanguageCards[card]());
const frameworkCards = Object.keys(FrameworkCards).map((card) => FrameworkCards[card]());
const toolsServicesCards = Object.keys(Tools_ServicesCards).map((card) => Tools_ServicesCards[card]());

const languageDict = new Map();
const frameworkDict = new Map();
const toolsServicesDict = new Map();

languageCards.forEach((card) => languageDict.set(card.key, card));
frameworkCards.forEach((card) => frameworkDict.set(card.key, card));
toolsServicesCards.forEach((card) => toolsServicesDict.set(card.key, card));

export function ProjectCard({ props }: ProjectProps) {
    return (
        <div className={styles.projectCard} key={props.name} style={{border: `15px solid ${props.border_color}`}}>
            <h2>
                <a href={props.url} target="_blank" className={styles.projectLink}>
                    {props.name}
                </a>
                <GitLogo />
            </h2>
            <h3>{props.description}</h3>
            <div style={{ marginTop: 'auto', width: '100%' }}>
                <h4>Size: {props.size_string}</h4>
                <h4>Created: {props.created_at_string}</h4>
                <h4>Last updated: {props.pushed_at_string}</h4>
            </div>
            <div className={styles.languageContainer}>
                {
                    props.languages.map((language) => languageDict.get(language))
                }
                {
                    [...new Set(props.description.split(' '))].map((word) => {
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
            className={styles.projectCard}
            style={{
                border: '15px solid black',
                height: 'fit-content',
                paddingBottom: '10%'
            }}
            key='gitError'>
            <h2>
                <a href='https://github.com/c-pill?tab=repositories' target="_blank" className={styles.projectLink}>
                    My GitHub Projects
                </a>
                <GitLogo />
            </h2>
            <h3 style={{textAlign: 'center'}}>Looks like there was an issue with the GitHub API. No worries! Press this card's title to view my projects on GitHub!</h3>
        </div>
    );
};

export function ProjectCards(data: ProjectData[]): JSX.Element {
    return (
        <>
            {data.map((project) => (
                <ProjectCard key={project.name} props={project}/>
            ))}
        </>
    );
};
