import styles from '@/styles/About.module.css';
import Image from 'next/image';

export function VisualStudioCode() {
    return (
        <a href='https://code.visualstudio.com/' className={styles.infoCard} target='_blank' title='Visual Studio Code'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Visual Studio Code' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/250px-Visual_Studio_Code_1.35_icon.svg.png' width={100} height={100}/>
        </a>
    );
};

export function VisualStudio() {
    return (
        <a href='https://visualstudio.microsoft.com/' className={styles.infoCard} target='_blank' title='Visual Studio'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Visual Studio' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/120px-Visual_Studio_Icon_2022.svg.png' width={100} height={100}/>
        </a>
    );
};

export function GitHub() {
    return (
        <a href='https://github.com/' className={styles.infoCard} target='_blank' title='GitHub'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='GitHub' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Matlab() {
    return (
        <a href='https://www.mathworks.com/products/matlab.html' className={styles.infoCard} target='_blank' title='MATLAB'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='MATLAB' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/250px-Matlab_Logo.png' width={100} height={100}/>
        </a>
    );
};

export function Xcode() {
    return (
        <a href='https://developer.apple.com/xcode/' className={styles.infoCard} target='_blank' title='Xcode'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Xcode' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Xcode_14_icon.png/250px-Xcode_14_icon.png' width={100} height={100}/>
        </a>
    );
};

export function Postman() {
    return (
        <a href='https://www.postman.com/' className={styles.infoCard} target='_blank' title='Postman'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Postman' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/250px-Postman_%28software%29.png' width={100} height={100}/>
        </a>
    );
};

export function VirtualBox() {
    return (
        <a href='https://www.virtualbox.org/' className={styles.infoCard} target='_blank' title='VirtualBox'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='VirtualBox' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/250px-VirtualBox_2024_Logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function MSOffice() {
    return (
        <a href='https://www.microsoft.com/en-us/microsoft-365' className={styles.infoCard} target='_blank' title='Microsoft Office'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Microsoft Office' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Microsoft_365_Copilot.svg/250px-Microsoft_365_Copilot.svg.png' width={100} height={100}/>
        </a>
    );
};

export function DevOps() {
    return (
        <a href='https://azure.microsoft.com/en-us/products/devops' className={styles.infoCard} target='_blank' title='Azure DevOps'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Azure DevOps' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/120px-Microsoft_Azure.svg.png' width={100} height={100}/>
        </a>
    );
};

export function MySql() {
    return (
        <a href='https://www.mysql.com/' className={styles.infoCard} target='_blank' title='MySQL'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='MySQL'  src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/120px-MySQL_logo.svg.png' width={100} height={100}/>
        </a>
    );
};


export function MicrosoftSqlServer() {
    return (
        <a href='https://www.microsoft.com/en-us/sql-server' className={styles.infoCard} target='_blank' title='Microsot SQL Server'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Microsoft SQL Server' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/250px-Microsoft_SQL_Server_2025_icon.svg.png' width={100} height={100}/>
        </a>
    );
};

export function SwaggerUI() {
    return (
        <a href='https://swagger.io/tools/swagger-ui/' className={styles.infoCard} target='_blank' title='Swagger UI'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Swagger UI' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Swagger-logo.png/190px-Swagger-logo.png' width={100} height={100}/>
        </a>
    );
};

export function Kaggle() {
    return (
        <a href='https://www.kaggle.com/' className={styles.infoCard} target='_blank' title='Kaggle'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Kaggle' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Kaggle_Logo.svg/250px-Kaggle_Logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function ESLint() {
    return (
        <a href='https://eslint.org/' className={styles.infoCard} target='_blank' title='ESLint'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='ESLint' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/250px-ESLint_logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Figma() {
    return (
        <a href='https://www.figma.com/' className={styles.infoCard} target='_blank' title='Figma'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Figma' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/120px-Figma-logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Vercel() {
    return (
        <a href='https://vercel.com/docs' className={styles.infoCard} target='_blank' title='Vercel'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Vercel' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ionicons_logo-vercel.svg/640px-Ionicons_logo-vercel.svg.png' width={100} height={100}/>
        </a>
    );
};
