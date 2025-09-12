import { SkillData } from '@/types/skill-data.type';
import { SkillCard } from '../SkillCard';

export function C({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.cppreference.com/w/c/language.html',
        title: 'C',
        alt: 'C',
        src: '/images/skills/C.svg',
        shadowOn
    };
    return <SkillCard key='C' props={data} />;
};

export function Cpp({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.cppreference.com/index.html',
        title: 'C++',
        alt: 'C++',
        src: '/images/skills/C++.svg',
        shadowOn
    };
    return <SkillCard key='C++' props={data} />;
};

export function Cs({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
        title: 'C#',
        alt: 'C#',
        src: '/images/skills/CSharp.svg',
        shadowOn
    };
    return <SkillCard key='C#' props={data} />;
};

export function Python({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.python.org/',
        title: 'Python',
        alt: 'Python',
        src: '/images/skills/Python.png',
        shadowOn
    };
    return <SkillCard key='Python' props={data} />;
};

export function Java({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.java.com/en/',
        title: 'Java',
        alt: 'Java',
        src: '/images/skills/Java.png',
        shadowOn
    };
    return <SkillCard key='Java' props={data} />;
};

export function Swift({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.swift.org/',
        title: 'Swift',
        alt: 'Swift',
        src: '/images/skills/Swift.png',
        shadowOn
    };
    return <SkillCard key='Swift' props={data} />;
};

export function Html({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        title: 'HTML',
        alt: 'HTML',
        src: '/images/skills/HTML.png',
        shadowOn
    };
    return <SkillCard key='HTML' props={data} />;
};

export function Css({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'CSS',
        alt: 'CSS',
        src: '/images/skills/CSS.png',
        shadowOn
    };
    return <SkillCard key='CSS' props={data} />;
};

export function Javascript({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        title: 'JavaScript',
        alt: 'JavaScript',
        src: '/images/skills/JavaScript.svg',
        shadowOn
    };
    return <SkillCard key='JavaScript' props={data} />;
};
                        
export function Typescript({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        alt: 'TypeScript',
        src: '/images/skills/TypeScript.png',
        shadowOn
    };
    return <SkillCard key='TypeScript' props={data} />;
};

export function Sql({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.wikipedia.org/wiki/SQL',
        title: 'SQL',
        alt: 'SQL',
        src: '/images/skills/SQL.png',
        shadowOn
    };
    return <SkillCard key='SQL' props={data} />;
};

export function Asm({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.wikipedia.org/wiki/Assembly_language',
        title: 'ASM',
        alt: 'ASM',
        src: '/images/skills/Assembly.png',
        shadowOn
    };
    return <SkillCard key='ASM' props={data} />;
};
