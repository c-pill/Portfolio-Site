import styles from '@/styles/About.module.css';
import Image from 'next/image';
import { ExperienceProps } from "@/types/experience-data.type";

export function ExperienceCard({ props }: ExperienceProps) {
    return (
        <a href={props.href} className={styles.infoCard} target='_blank' title={props.title}>
            <Image priority crossOrigin='anonymous' className={styles.infoImg} alt={props.alt} src={props.src} width={100} height={100}/>
        </a>
    );
};
