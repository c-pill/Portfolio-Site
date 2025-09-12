import { SkillData } from '@/types/skill-data.type';
import { SkillCard } from '../SkillCard';

export function NodeJS({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://nodejs.org/en',
        title: 'Node.js',
        alt: 'Node.js',
        src: '/images/skills/NodeJS.png',
        shadowOn
    };
    return <SkillCard key='Node.js' props={data} />;
};

export function ReactJS({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://react.dev/',
        title: 'React.js',
        alt: 'React.js',
        src: '/images/skills/ReactJS.png',
        shadowOn
    };
    return <SkillCard key='React.js' props={data} />;
};

export function NestJS({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://nestjs.com/',
        title: 'Nest.js',
        alt: 'Nest.js',
        src: '/images/skills/NestJS.png',
        shadowOn
    };
    return <SkillCard key='Nest.js' props={data} />;
};

export function NextJS({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://nextjs.org/',
        title: 'Next.js',
        alt: 'Next.js',
        src: '/images/skills/NextJS.png',
        shadowOn
    };
    return <SkillCard key='Next.js' props={data} />;
};


export function MongooseODM({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://mongoosejs.com/',
        title: 'Mongoose ODM',
        alt: 'Mongoose ODM',
        src: '/images/skills/MongooseODM.png',
        shadowOn
    };
    return <SkillCard key='Mongoose ODM' props={data} />;
};

export function SpringBoot({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://spring.io/projects/spring-boot',
        title: 'Spring Boot',
        alt: 'Spring Boot',
        src: '/images/skills/SpringBoot.png',
        shadowOn
    };
    return <SkillCard key='Spring Boot' props={data} />;
};

export function Contentful({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.contentful.com/',
        title: 'Contentful',
        alt: 'Contentful',
        src: '/images/skills/Contentful.svg',
        shadowOn
    };
    return <SkillCard key='Contentful' props={data} />;
};

export function DotNet({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://dotnet.microsoft.com/en-us/',
        title: '.NET',
        alt: '.NET',
        src: '/images/skills/DotNet.png',
        shadowOn
    };
    return <SkillCard key='.NET' props={data} />;
};
