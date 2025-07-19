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
                    May 2025 - Present
                </h5>
                <li>
                    Support senior engineers in developing and testing web and mobile applications
                </li>
                <li>
                    Assist with coding simple interactive components and features to improve user experience
                </li>
                <li>
                    Help troubleshoot and debug minor technical issues
                </li>
                <li>
                    Document work and contribute to engineering documentation for future reference
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
                    Design and implement highly resuable solutions
                </li>
                <li>
                    Store plant specific data in a SQL database
                </li>
                <li>
                    Create Microsoft Sharepoint sites to streamline the distribution and installation of software
                </li>
                <li>
                    Test and implement Generative AI for professional use
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
 