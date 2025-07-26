import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import styles from '@/styles/About.module.css';
import '@/components/LanguageCards';
import { Asm, C, Cpp, Cs, Css, Html, Java, Javascript, Python, Sql, Swift, Typescript } from '@/components/LanguageCards';
import { Contentful, DotNet, MongoDB, MongooseODM, NestJS, NextJS, NodeJS, ReactJS, SpringBoot } from '@/components/FrameworkCards';
import { DevOps, ESLint, Figma, GitHub, Kaggle, Matlab, MicrosoftSqlServer, MSOffice, MySql, Postman, SwaggerUI, Vercel, VirtualBox, VisualStudio, VisualStudioCode, Weka, Xcode } from '@/components/Tools_ServicesCards';
import { ABB, ChimneyLakes, EdibleBrands, TheCoderSchool } from '@/components/WorkContainers';
import React from 'react';
import { UGA_AI, UGA_CSCI } from '@/components/EducationContainers';
import Head from 'next/head';

export function AboutEducation() {
    return (
        <>
            <h2 className={styles.rowTitle}>Education</h2>
            <UGA_AI />
            <div className={styles.codingContainer} >
                <Cpp />
                <Python />
                <Kaggle />
                <Weka />
                <VisualStudioCode />
                <GitHub />
                <MSOffice />
            </div>
            <UGA_CSCI />
            <div className={styles.codingContainer} >
                <C />
                <Cpp />
                <Java />
                <SpringBoot />
                <Html />
                <Css />
                <Javascript />
                <Figma />
                <NodeJS />
                <ReactJS />
                <Postman />
                <Python />
                <Asm />
                <MongooseODM />
                <VisualStudioCode />
                <MongoDB />
                <MySql />
                <Sql />
                <GitHub />
                <MSOffice />
                <VirtualBox />
                <Matlab />
            </div>
        </>
        
    );
};

export function AboutWork() {
    return (
        <>
            <h2 className={styles.rowTitle}>Work Experience</h2>
            <EdibleBrands />
            <div className={styles.codingContainer} >
                <Typescript />
                <Javascript />
                <DevOps />
                <Contentful />
                <NodeJS />
                <NestJS />
                <ReactJS />
                <Postman />
                <VisualStudioCode />
                <SwaggerUI />
                <ESLint />
            </div>
            <ABB />
            <div className={styles.codingContainer} >
                <Cs />
                <DotNet />
                <Python />
                <MSOffice />
                <Sql />
                <MicrosoftSqlServer />
                <DevOps />
                <VisualStudio />
                <VisualStudioCode />
                <SwaggerUI />
            </div>
            <TheCoderSchool />
            <div className={styles.codingContainer} >
                <Cs />
                <Python />
                <Java />
            </div>
            <ChimneyLakes />
        </>
    );
};

export function AboutCoding() {
    return (
        <>
            <h2 className={styles.rowTitle}>Coding Experience</h2>
            <h3 className={styles.bullet}>Languages:</h3>
            <div className={styles.codingContainer}>
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
            <h3 className={styles.bullet}>Frameworks:</h3>
            <div className={styles.codingContainer}>
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
            <h3 className={styles.bullet}>Tools/Services:</h3>
            <div className={styles.codingContainer}>
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
        </>
    );
};

const resetScrollbar = () => {
    const aboutContainer = document.getElementById(styles.aboutContainer);
    aboutContainer.scrollTop = 0;
} 

export default function About() {
    const [aboutInfo, setAboutInfo] = useState(<AboutEducation />);

    const seeEducation = () => {
        resetScrollbar();
        setAboutInfo(
            <AboutEducation />
        );
    };

    const seeWork = () => {
        resetScrollbar();
        setAboutInfo(
            <AboutWork />
        );
    };

    const seeCoding = () => {
        resetScrollbar();
        setAboutInfo(
            <AboutCoding />
        );
    };

    useEffect(() => {
        const body = document.body;
        const header = document.getElementById('header');

        body.style.background = 'rgb(22, 144, 196)';
        body.style.overflowY = 'scroll';

        header.style.position = 'sticky';
        header.style.top = '2dvh';
    });

    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Header />
            <div id={styles.contentLayout}>
                <div id={styles.sidebar}>
                    <h3 onClick={seeEducation}>Education</h3>
                    <h3 onClick={seeWork}>Work Experience</h3>
                    <h3 onClick={seeCoding}>Coding Experience</h3>
                </div>
                <div id={styles.aboutContainer}>
                    {aboutInfo}
                </div>
            </div>
        </>
    );
};
