import styles from '@/styles/About.module.css';
import Image from 'next/image';
import React from 'react';

export function EdibleBrands() {
    return (
        <div className={styles.workContainer} style={{flexWrap: 'wrap'}}>
            <a href='https://www.ediblearrangements.com/' className={styles.workImageContainerL} target='_blank' title='Edible Brands'>
                <Image className={styles.workImage} alt='Edible Brands' src='/edible.gif' width={100} height={100}/>
            </a>
            <ul className={styles.workText}>
                <h3>
                    Edible Brands
                </h3>
                <h4>
                    Software Engineering Intern
                </h4>
                <h5>
                    May 2025 - July 2025
                </h5>
                <li>
                    Configured Contentful CMS for seamless content delivery on Edible’s site
                </li>
                <li>
                    Conducted research on GPT agents and presented findings to C-Suite and management 
                </li>
                <li>
                    Built a franchisee-faced GPT agent to streamline operations and support 
                </li>
                <li>
                    Assisted front-end development of a new launchpad service
                </li>
            </ul>
        </div>
    );
};

export function ABB() {
    return (
        <div className={styles.workContainer} style={{flexWrap: 'wrap-reverse'}}>
            <ul className={styles.workText}>
                <h3>
                    ABB
                </h3>
                <h4>
                    Engineering Design Tools Analyst Intern
                </h4>
                <h5>
                    January 2025 - May 2025
                </h5>
                <li>
                    Developed a graphing API using .NET framework to replace Excel and decrease execution time
                </li>
                <li>
                    Established a SQL database to store manufacturing plant data
                </li>
                <li>
                    Created sites using SharePoint to streamline the distribution and installation of professional software 
                </li>
                <li>
                    Tested and evaluated Generative AI for client use
                </li>
            </ul>
            <a href='https://new.abb.com/us' className={styles.workImageContainer} target='_blank' title='ABB'>
                <Image className={styles.workImage} alt='ABB' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/250px-ABB_logo.svg.png' width={100} height={100}/>
            </a>
        </div>
    );
};

export function TheCoderSchool() {
    return (
        <div className={styles.workContainer} style={{flexWrap: 'wrap'}}>
            <a href='https://www.thecoderschool.com/' className={styles.workImageContainer} target='_blank' title='theCoderSchool'>
                <Image className={styles.workImage} alt='theCoderSchool' src='https://www.thecoderschool.com/locations/img/logostacked-white-shadow.png' width={100} height={100}/>
            </a>
            <ul className={styles.workText}>
                <h3>
                    theCoderSchool
                </h3>
                <h4>
                    Code Coach
                </h4>
                <h5>
                    May 2024 - August 2024
                </h5>
                <li>
                    Instructed students aged 6-15 on coding concepts including simple Data Structures
                </li>
                <li>
                    Taught students to code in Python, C#, Java, Scratch, Roblox Studio, and Minecraft Education Edition
                </li>
                <li>
                    Encouraged students to solve problems as a team to simulate real-world situations
                </li>
                <li>
                    Offered trial classes to recruit potential new students
                </li>
            </ul>
        </div>
    );
};

export function ChimneyLakes() {
    return (
        <div className={styles.workContainer} style={{flexWrap: 'wrap-reverse'}}>
            <ul className={styles.workText}>
                <h3>
                    Chimney Lakes Swim Team
                </h3>
                <h4>
                    Head Coach
                </h4>
                <h5>
                    May 2021 - June 2024
                </h5>
                <li>
                    Managed 7 assistant coaches
                </li>
                <li>
                    Taught over 80 students annually
                </li>
                <li>
                    Coordinated with other teams to organize and execute events
                </li>
                <li>
                    Prepared for emergencies by completing Red Cross Training
                </li>
            </ul>
            <a className={styles.workImageContainer} title='Chimney Lakes'>
                <Image className={styles.workImage} alt='Chimney Lakes' src='https://d1nmxxg9d5tdo.cloudfront.net/8514/logos/large/Chimney_Lakes.png' width={100} height={100}/>
            </a>
        </div>
    );
};
 