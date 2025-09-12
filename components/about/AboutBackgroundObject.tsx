import AboutStyles from '@/styles/About.module.css';
import Image from 'next/image';

export function AboutBackgroundObjects({number, src}) {
   const backgroundObjects = [];
   for (let i = 0; i < number; i++) {
      backgroundObjects.push(
         <Image
            className={AboutStyles.backgroundObject}
            src={src}
            alt=''
            width={100}
            height={100}
            style={{
               top: `${105 / number * i}dvh`
            }}
            key={i}
         />
      )
   }
   return backgroundObjects;
};
