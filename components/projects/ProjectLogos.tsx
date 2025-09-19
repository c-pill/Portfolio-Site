import Image from 'next/image';
import styles from '@/styles/Projects.module.css';
import ProjectLogoData from '@/types/projectLogo-data.type';


function ProjectLogo(props: ProjectLogoData) {
    return (
        <Image 
            src={props.src}
            title={props.title}
            alt={props.alt}
            width={100}
            height={100}
            className={styles.projectLogo}
        />
    );
};

export function GitLogo() {
    const logoData: ProjectLogoData = {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.png',
        title: 'My GitHub',
        alt: 'My GitHub'
    };
    return ProjectLogo(logoData);
};
