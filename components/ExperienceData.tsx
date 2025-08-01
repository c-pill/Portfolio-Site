import styles from '@/styles/About.module.css';
import Image from 'next/image';
import { ExperienceProps } from "@/types/experience-data.type";
import { useState } from 'react';
import { FastAverageColor, FastAverageColorResource, FastAverageColorResult } from 'fast-average-color';

export function ExperienceCard({ props }: ExperienceProps) {
    const [shadowStyle, setShadowStyle] = useState('');
    
    const handleColorExtract = (img: HTMLElement) => {
        if (props.shadowOn) {
            const fac = new FastAverageColor();
            fac.getColorAsync(img as FastAverageColorResource)
                .then((color) => setShadowStyle(`0px 0px 10px 6px ${color.hex}`))
        }
    };

    return (
        <a 
            className={styles.infoCard}
            href={props.href}
            target='_blank'
            title={props.title}
            style={{boxShadow: shadowStyle}}
        >
            <Image
                className={styles.infoImg} 
                src={props.src} 
                alt={props.alt} 
                crossOrigin='anonymous'
                priority
                onLoadingComplete={(img) => handleColorExtract(img)}
                width={100}
                height={100}
            />
        </a>
    );
};


// '0px 0px 10px 6px grey'