import { SkillData } from '@/types/skill-data.type';
import { SkillCard } from '../SkillCard';

export function C({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.cppreference.com/w/c/language.html',
        title: 'C',
        alt: 'C',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/C_Language_Logo.svg',
        shadowOn
    };
    return <SkillCard key='C' props={data} />;
};

export function Cpp({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.cppreference.com/index.html',
        title: 'C++',
        alt: 'C++',
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        shadowOn
    };
    return <SkillCard key='C++' props={data} />;
};

export function Cs({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
        title: 'C#',
        alt: 'C#',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
        shadowOn
    };
    return <SkillCard key='C#' props={data} />;
};

export function Python({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.python.org/',
        title: 'Python',
        alt: 'Python',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/500px-Python_logo_51.svg.png',
        shadowOn
    };
    return <SkillCard key='Python' props={data} />;
};

export function Java({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.java.com/en/',
        title: 'Java',
        alt: 'Java',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png',
        shadowOn
    };
    return <SkillCard key='Java' props={data} />;
};

export function Swift({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.swift.org/',
        title: 'Swift',
        alt: 'Swift',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/640px-Swift_logo.svg.png',
        shadowOn
    };
    return <SkillCard key='Swift' props={data} />;
};

export function Html({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        title: 'HTML',
        alt: 'HTML',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png',
        shadowOn
    };
    return <SkillCard key='HTML' props={data} />;
};

export function Css({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'CSS',
        alt: 'CSS',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/120px-Official_CSS_Logo.svg.png',
        shadowOn
    };
    return <SkillCard key='CSS' props={data} />;
};

export function Javascript({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        title: 'JavaScript',
        alt: 'JavaScript',
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/JavaScript_unofficial_logo.svg',
        shadowOn
    };
    return <SkillCard key='JavaScript' props={data} />;
};
                        
export function Typescript({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        alt: 'TypeScript',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/250px-Typescript.svg.png',
        shadowOn
    };
    return <SkillCard key='TypeScript' props={data} />;
};

export function Sql({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.wikipedia.org/wiki/SQL',
        title: 'SQL',
        alt: 'SQL',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/640px-Sql_data_base_with_logo.svg.png',
        shadowOn
    };
    return <SkillCard key='SQL' props={data} />;
};

export function Asm({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://en.wikipedia.org/wiki/Assembly_language',
        title: 'ASM',
        alt: 'ASM',
        src: 'https://raw.githubusercontent.com/github/explore/e495457f5ff28c343f9e422f8e3cf80fd3e80890/topics/assembly/assembly.png',
        shadowOn
    };
    return <SkillCard key='ASM' props={data} />;
};
