import { SkillData } from '@/types/skill-data.type';
import { SkillCard } from '../SkillCard';

export function VisualStudioCode({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://code.visualstudio.com/',
        title: 'Visual Studio Code',
        alt: 'Visual Studio Code',
        src: '/images/skills/Visual Studio Code.png',
        shadowOn
    };
    return <SkillCard key='Visual Studio Code' props={data} />;
};

export function VisualStudio({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://visualstudio.microsoft.com/',
        title: 'Visual Studio',
        alt: 'Visual Studio',
        src: '/images/skills/Visual Studio.png',
        shadowOn
    };
    return <SkillCard key='Visual Studio' props={data} />;
};

export function GitHub({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://github.com/',
        title: 'GitHub',
        alt: 'GitHub',
        src: '/images/skills/GitHub.png',
        shadowOn
    };
    return <SkillCard key='GitHub' props={data} />;
};

export function Matlab({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.mathworks.com/products/matlab.html',
        title: 'MATLAB',
        alt: 'MATLAB',
        src: '/images/skills/Matlab.png',
        shadowOn
    };
    return <SkillCard key='MATLAB' props={data} />;
};

export function Xcode({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.apple.com/xcode/',
        title: 'Xcode',
        alt: 'Xcode',
        src: '/images/skills/Xcode.png',
        shadowOn
    };
    return <SkillCard key='Xcode' props={data} />;
};

export function Postman({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.postman.com/',
        title: 'Postman',
        alt: 'Postman',
        src: '/images/skills/Postman.png',
        shadowOn
    };
    return <SkillCard key='Postman' props={data} />;
};

export function VirtualBox({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.virtualbox.org/',
        title: 'VirtualBox',
        alt: 'VirtualBox',
        src: '/images/skills/VirtualBox.png',
        shadowOn
    };
    return <SkillCard key='VirtualBox' props={data} />;
};

export function MSOffice({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.microsoft.com/en-us/microsoft-365',
        title: 'Microsoft Office',
        alt: 'Microsoft Office',
        src: '/images/skills/Microsoft Office.png',
        shadowOn
    };
    return <SkillCard key='Microsoft Office' props={data} />;
};

export function DevOps({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://azure.microsoft.com/en-us/products/devops',
        title: 'Azure DevOps',
        alt: 'Azure DevOps',
        src: '/images/skills/DevOps.png',
        shadowOn
    };
    return <SkillCard key='Azure DevOps' props={data} />;
};

export function MySql({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.mysql.com/',
        title: 'MySQL',
        alt: 'MySQL',
        src: '/images/skills/MySQL.png',
        shadowOn
    };
    return <SkillCard key='MySQL' props={data} />;
};

export function MicrosoftSqlServer({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.microsoft.com/en-us/sql-server',
        title: 'Microsoft SQL Server',
        alt: 'Microsoft SQL Server',
        src: '/images/skills/Microsoft SQL Server.png',
        shadowOn
    };
    return <SkillCard key='Microsoft SQL Server' props={data} />;
};

export function SwaggerUI({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://swagger.io/tools/swagger-ui/',
        title: 'Swagger UI',
        alt: 'Swagger UI',
        src: '/images/skills/SwaggerUI.png',
        shadowOn
    };
    return <SkillCard key='Swagger UI' props={data} />;
};

export function Kaggle({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.kaggle.com/',
        title: 'Kaggle',
        alt: 'Kaggle',
        src: '/images/skills/Kaggle.png',
        shadowOn
    };
    return <SkillCard key='Kaggle' props={data} />;
};

export function ESLint({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://eslint.org/',
        title: 'ESLint',
        alt: 'ESLint',
        src: '/images/skills/ESLint.png',
        shadowOn
    };
    return <SkillCard key='ESLint' props={data} />;
};

export function Figma({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.figma.com/',
        title: 'Figma',
        alt: 'Figma',
        src: '/images/skills/Figma.png',
        shadowOn
    };
    return <SkillCard key='Figma' props={data} />;
};

export function Vercel({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://vercel.com/docs',
        title: 'Vercel',
        alt: 'Vercel',
        src: '/images/skills/Vercel.png',
        shadowOn
    };
    return <SkillCard key='Vercel' props={data} />;
};

export function Weka({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://ml.cms.waikato.ac.nz/weka',
        title: 'Weka',
        alt: 'Weka',
        src: '/images/skills/Weka.png',
        shadowOn
    };
    return <SkillCard key='Weka' props={data} />;
};


export function OpenAI({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://openai.com/chatgpt/overview/',
        title: 'OpenAI',
        alt: 'OpenAI',
        src: '/images/skills/OpenAI.png',
        shadowOn
    };
    return <SkillCard key='OpenAI' props={data} />;
};

export function UbuntuServer({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://ubuntu.com/server',
        title: 'Ubuntu Server',
        alt: 'Ubuntu Server',
        src: '/images/skills/Ubuntu.png',
        shadowOn
    };
    return <SkillCard key='Ubuntu Server' props={data} />;
};

export function Anaconda({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://www.anaconda.com/docs/main',
        title: 'Anaconda',
        alt: 'Anaconda',
        src: '/images/skills/Anaconda.png',
        shadowOn
    };
    return <SkillCard key='Anaconda' props={data} />;
};

export function Jupyter({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://jupyter.org/',
        title: 'Juypter',
        alt: 'Jupyter',
        src: '/images/skills/Jupyter.svg',
        shadowOn
    };
    return <SkillCard key='Jupyter' props={data} />;
};

export function Vite({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://vite.dev/',
        title: 'Vite',
        alt: 'Vite',
        src: '/images/skills/Vite.svg',
        shadowOn
    };
    return <SkillCard key='Vite' props={data} />;
};

export function Podman({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://podman.io/',
        title: 'Podman',
        alt: 'Podman',
        src: '/images/skills/Podman.png',
        shadowOn
    };
    return <SkillCard key='Podman' props={data} />;
};

export function Docker({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://www.docker.com/',
        title: 'Docker',
        alt: 'Docker',
        src: '/images/skills/Docker.png',
        shadowOn
    };
    return <SkillCard key='Docker' props={data} />;
};

export function Cloudflare({ shadowOn = true }) {
   const data: SkillData = {
        href: 'https://www.cloudflare.com/',
        title: 'Cloudflare',
        alt: 'Cloudflare',
        src: '/images/skills/Cloudflare.png',
        shadowOn
    };
    return <SkillCard key='Cloudflare' props={data} />;
};

export function MongoDB({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.mongodb.com/',
        title: 'MongoDB',
        alt: 'MongoDB',
        src: '/images/skills/MongoDB.png',
        shadowOn
    };
    return <SkillCard key='MongoDB' props={data} />;
};

export function MemoQ({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.memoq.com/product/memoq-translator-pro/',
        title: 'MemoQ',
        alt: 'MemoQ',
        src: '/images/skills/MemoQ.png',
        shadowOn
    };
    return <SkillCard key='MemoQ' props={data} />;
};

export function Praat({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://praat.org/',
        title: 'Praat',
        alt: 'Praat',
        src: '/images/skills/Praat.png',
        shadowOn
    };
    return <SkillCard key='Praat' props={data} />;
};
