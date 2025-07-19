import React from 'react';
import { ExperienceData } from '@/types/experience-data.type';
import { ExperienceCard } from './ExperienceData';

export function C() {
    const data: ExperienceData = {
        href: 'https://en.cppreference.com/w/c/language.html',
        title: 'C',
        alt: 'C',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/C_Language_Logo.svg'
    };
    return <ExperienceCard key='C' props={data} />;
};

export function Cpp() {
    const data: ExperienceData = {
        href: 'https://en.cppreference.com/index.html',
        title: 'C++',
        alt: 'C++',
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
    };
    return <ExperienceCard key='C++' props={data} />;
};

export function Cs() {
    const data: ExperienceData = {
        href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
        title: 'C#',
        alt: 'C#',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'
    };
    return <ExperienceCard key='C#' props={data} />;
};

export function Python() {
    const data: ExperienceData = {
        href: 'https://www.python.org/',
        title: 'Python',
        alt: 'Python',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/500px-Python_logo_51.svg.png'
    };
    return <ExperienceCard key='Python' props={data} />;
};

export function Java() {
    const data: ExperienceData = {
        href: 'https://www.java.com/en/',
        title: 'Java',
        alt: 'Java',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png'
    };
    return <ExperienceCard key='Java' props={data} />;
};

export function Swift() {
    const data: ExperienceData = {
        href: 'https://www.swift.org/',
        title: 'Swift',
        alt: 'Swift',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/640px-Swift_logo.svg.png'
    };
    return <ExperienceCard key='Swift' props={data} />;
};

export function Html() {
    const data: ExperienceData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        title: 'HTML',
        alt: 'HTML',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png'
    };
    return <ExperienceCard key='HTML' props={data} />;
};

export function Css() {
    const data: ExperienceData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'CSS',
        alt: 'CSS',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/120px-Official_CSS_Logo.svg.png'
    };
    return <ExperienceCard key='CSS' props={data} />;
};

export function Javascript() {
    const data: ExperienceData = {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        title: 'JavaScript',
        alt: 'JavaScript',
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/JavaScript_unofficial_logo.svg'
    };
    return <ExperienceCard key='JavaScript' props={data} />;
};
                        
export function Typescript() {
    const data: ExperienceData = {
        href: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        alt: 'TypeScript',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/250px-Typescript.svg.png'
    };
    return <ExperienceCard key='TypeScript' props={data} />;
};

export function Sql() {
    const data: ExperienceData = {
        href: 'https://en.wikipedia.org/wiki/SQL',
        title: 'SQL',
        alt: 'SQL',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/640px-Sql_data_base_with_logo.svg.png'
    };
    return <ExperienceCard key='SQL' props={data} />;
};

export function Asm() {
    const data: ExperienceData = {
        href: 'https://en.wikipedia.org/wiki/Assembly_language',
        title: 'ASM',
        alt: 'ASM',
        src: 'https://raw.githubusercontent.com/github/explore/e495457f5ff28c343f9e422f8e3cf80fd3e80890/topics/assembly/assembly.png'
    };
    return <ExperienceCard key='ASM' props={data} />;
};
