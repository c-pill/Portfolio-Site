import React from 'react';
import { ExperienceData } from '@/types/experience-data.type';
import { ExperienceCard } from './ExperienceData';

export function NodeJS() {
    const data: ExperienceData = {
        href: 'https://nodejs.org/en',
        title: 'Node.js',
        alt: 'Node.js',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/250px-Node.js_logo.svg.png'
    };
    return <ExperienceCard key='Node.js' props={data} />;
};

export function ReactJS() {
    const data: ExperienceData = {
        href: 'https://react.dev/',
        title: 'React.js',
        alt: 'React.js',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/250px-React_Logo_SVG.svg.png'
    };
    return <ExperienceCard key='React.js' props={data} />;
};

export function NestJS() {
    const data: ExperienceData = {
        href: 'https://nestjs.com/',
        title: 'Nest.js',
        alt: 'Nest.js',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NestJS-logo-wordmark.svg/250px-NestJS-logo-wordmark.svg.png'
    };
    return <ExperienceCard key='Nest.js' props={data} />;
};

export function NextJS() {
    const data: ExperienceData = {
        href: 'https://nextjs.org/',
        title: 'Next.js',
        alt: 'Next.js',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Next.js_wordmark.svg/250px-Next.js_wordmark.svg.png'
    };
    return <ExperienceCard key='Next.js' props={data} />;
};

export function MongoDB() {
    const data: ExperienceData = {
        href: 'https://www.mongodb.com/',
        title: 'MongoDB',
        alt: 'MongoDB',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/250px-MongoDB_Fores-Green.svg.png'
    };
    return <ExperienceCard key='MongoDB' props={data} />;
};

export function MongooseODM() {
    const data: ExperienceData = {
        href: 'https://mongoosejs.com/',
        title: 'Mongoose ODM',
        alt: 'Mongoose ODM',
        src: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
    };
    return <ExperienceCard key='Mongoose ODM' props={data} />;
};

export function SpringBoot() {
    const data: ExperienceData = {
        href: 'https://spring.io/projects/spring-boot',
        title: 'Spring Boot',
        alt: 'Spring Boot',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/250px-Spring_Boot.svg.png'
    };
    return <ExperienceCard key='Spring Boot' props={data} />;
};

export function Contentful() {
    const data: ExperienceData = {
        href: 'https://www.contentful.com/',
        title: 'Contentful',
        alt: 'Contentful',
        src: 'https://www.contentful.com/developers/_assets/logo_new.baf7963602.svg'
    };
    return <ExperienceCard key='Contentful' props={data} />;
};

export function DotNet() {
    const data: ExperienceData = {
        href: 'https://dotnet.microsoft.com/en-us/',
        title: '.NET',
        alt: '.NET',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/250px-Microsoft_.NET_logo.svg.png'
    };
    return <ExperienceCard key='.NET' props={data} />;
};
