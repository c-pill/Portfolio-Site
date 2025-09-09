import { SkillData } from '@/types/skill-data.type';
import { SkillCard } from '../SkillCard';

export function VisualStudioCode({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://code.visualstudio.com/',
        title: 'Visual Studio Code',
        alt: 'Visual Studio Code',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/250px-Visual_Studio_Code_1.35_icon.svg.png',
        shadowOn
    };
    return <SkillCard key='Visual Studio Code' props={data} />;
};

export function VisualStudio({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://visualstudio.microsoft.com/',
        title: 'Visual Studio',
        alt: 'Visual Studio',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/120px-Visual_Studio_Icon_2022.svg.png',
        shadowOn
    };
    return <SkillCard key='Visual Studio' props={data} />;
};

export function GitHub({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://github.com/',
        title: 'GitHub',
        alt: 'GitHub',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png',
        shadowOn
    };
    return <SkillCard key='GitHub' props={data} />;
};

export function Matlab({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.mathworks.com/products/matlab.html',
        title: 'MATLAB',
        alt: 'MATLAB',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/250px-Matlab_Logo.png',
        shadowOn
    };
    return <SkillCard key='MATLAB' props={data} />;
};

export function Xcode({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://developer.apple.com/xcode/',
        title: 'Xcode',
        alt: 'Xcode',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Xcode_14_icon.png/250px-Xcode_14_icon.png',
        shadowOn
    };
    return <SkillCard key='Xcode' props={data} />;
};

export function Postman({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.postman.com/',
        title: 'Postman',
        alt: 'Postman',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/250px-Postman_%28software%29.png',
        shadowOn
    };
    return <SkillCard key='Postman' props={data} />;
};

export function VirtualBox({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.virtualbox.org/',
        title: 'VirtualBox',
        alt: 'VirtualBox',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/250px-VirtualBox_2024_Logo.svg.png',
        shadowOn
    };
    return <SkillCard key='VirtualBox' props={data} />;
};

export function MSOffice({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.microsoft.com/en-us/microsoft-365',
        title: 'Microsoft Office',
        alt: 'Microsoft Office',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg/640px-Microsoft_Office_2013-2019_logo_and_wordmark.svg.png',
        shadowOn
    };
    return <SkillCard key='Microsoft Office' props={data} />;
};

export function DevOps({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://azure.microsoft.com/en-us/products/devops',
        title: 'Azure DevOps',
        alt: 'Azure DevOps',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/120px-Microsoft_Azure.svg.png',
        shadowOn
    };
    return <SkillCard key='Azure DevOps' props={data} />;
};

export function MySql({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.mysql.com/',
        title: 'MySQL',
        alt: 'MySQL',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/120px-MySQL_logo.svg.png',
        shadowOn
    };
    return <SkillCard key='MySQL' props={data} />;
};

export function MicrosoftSqlServer({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.microsoft.com/en-us/sql-server',
        title: 'Microsoft SQL Server',
        alt: 'Microsoft SQL Server',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/250px-Microsoft_SQL_Server_2025_icon.svg.png',
        shadowOn
    };
    return <SkillCard key='Microsoft SQL Server' props={data} />;
};

export function SwaggerUI({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://swagger.io/tools/swagger-ui/',
        title: 'Swagger UI',
        alt: 'Swagger UI',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Swagger-logo.png/190px-Swagger-logo.png',
        shadowOn
    };
    return <SkillCard key='Swagger UI' props={data} />;
};

export function Kaggle({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.kaggle.com/',
        title: 'Kaggle',
        alt: 'Kaggle',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Kaggle_Logo.svg/250px-Kaggle_Logo.svg.png',
        shadowOn
    };
    return <SkillCard key='Kaggle' props={data} />;
};

export function ESLint({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://eslint.org/',
        title: 'ESLint',
        alt: 'ESLint',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/250px-ESLint_logo.svg.png',
        shadowOn
    };
    return <SkillCard key='ESLint' props={data} />;
};

export function Figma({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://www.figma.com/',
        title: 'Figma',
        alt: 'Figma',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/120px-Figma-logo.svg.png',
        shadowOn
    };
    return <SkillCard key='Figma' props={data} />;
};

export function Vercel({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://vercel.com/docs',
        title: 'Vercel',
        alt: 'Vercel',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ionicons_logo-vercel.svg/640px-Ionicons_logo-vercel.svg.png',
        shadowOn
    };
    return <SkillCard key='Vercel' props={data} />;
};

export function Weka({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://ml.cms.waikato.ac.nz/weka',
        title: 'Weka',
        alt: 'Weka',
        src: 'https://miro.medium.com/v2/resize:fit:512/format:webp/0*ANfeV4epFkV3Ix4n.png',
        shadowOn
    };
    return <SkillCard key='Weka' props={data} />;
};


export function OpenAI({ shadowOn = true }) {
    const data: SkillData = {
        href: 'https://openai.com/chatgpt/overview/',
        title: 'OpenAI',
        alt: 'OpenAI',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/640px-OpenAI_logo_2025_%28symbol%29.svg.png',
        shadowOn
    };
    return <SkillCard key='OpenAI' props={data} />;
};
