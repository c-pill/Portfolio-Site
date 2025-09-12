import SharedStyles from '@/styles/Shared.module.css';
import Image from 'next/image';
import { SkillProps } from "@/types/skill-data.type";
import { SyntheticEvent, useState } from 'react';
import { FastAverageColor, FastAverageColorResource } from 'fast-average-color';

export function SkillCard({ props }: SkillProps) {
    const [shadowStyle, setShadowStyle] = useState('');
    
    const handleColorExtract = (event: SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.target as FastAverageColorResource;  
      if (props.shadowOn) {
         const fac = new FastAverageColor();
         fac.getColorAsync(img)
            .then((color) => setShadowStyle(`0px 0px 7px 2px ${color.hex}`));
      }
    };

    return (
        <a 
            className={SharedStyles.skillCard}
            href={props.href}
            target='_blank'
            title={props.title}
            style={{boxShadow: shadowStyle}}
        >
            <Image
                className={SharedStyles.infoImg} 
                src={props.src} 
                alt={props.alt} 
                onLoad={(img) => handleColorExtract(img)}
                width={100}
                height={100}
            />
        </a>
    );
};


// '0px 0px 10px 6px grey'