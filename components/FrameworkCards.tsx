import styles from '@/styles/About.module.css';
import Image from 'next/image';
import React from 'react';

export function NodeJS() {
    return (
        <a href='https://nodejs.org/en' className={styles.infoCard} target='_blank' title='Node.js'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Node.js' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/250px-Node.js_logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function ReactJS() {
    return (
        <a href='https://react.dev/' className={styles.infoCard} target='_blank' title='React.js'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='React.js' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/250px-React_Logo_SVG.svg.png' width={100} height={100}/>
        </a>
    );
};

export function NestJS() {
    return (
        <a href='https://nestjs.com/' className={styles.infoCard} target='_blank' title='Nest.js'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Nest.js' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NestJS-logo-wordmark.svg/250px-NestJS-logo-wordmark.svg.png' width={100} height={100}/>
        </a>
    );
};

export function NextJS() {
    return (
        <a href='https://nextjs.org/' className={styles.infoCard} target='_blank' title='Next.js'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Next.js' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Next.js_wordmark.svg/250px-Next.js_wordmark.svg.png' width={100} height={100}/>
        </a>
    );
};

export function MongoDB() {
    return (
        <a href='https://www.mongodb.com/' className={styles.infoCard} target='_blank' title='MongoDB'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='MongoDB' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/250px-MongoDB_Fores-Green.svg.png' width={100} height={100}/>
        </a>
    );
};

export function MongooseODM() {
    return (
        <a href='https://mongoosejs.com/' className={styles.infoCard} target='_blank' title='Mongoose ODM'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Mongoose ODM' src='https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png' width={100} height={100}/>
        </a>
    );
};

export function SpringBoot() {
    return (
        <a href='https://spring.io/projects/spring-boot' className={styles.infoCard} target='_blank' title='Spring Boot'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Spring Boot' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/250px-Spring_Boot.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Contentful() {
    return (
        <a href='https://www.contentful.com/' className={styles.infoCard} target='_blank' title='Contentful'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Contentful' src='/contentful logo.png' width={100} height={100}/>
        </a>
    );
};

export function DotNet() {
    return (
        <a href='https://dotnet.microsoft.com/en-us/' className={styles.infoCard} target='_blank' title='.NET'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='.NET' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/250px-Microsoft_.NET_logo.svg.png' width={100} height={100}/>
        </a>
    );
};