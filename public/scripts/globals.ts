import styles from '@/styles/About.module.css';
import { FastAverageColor, FastAverageColorResource } from 'fast-average-color';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function ChangeCardShadows() {
    const fac = new FastAverageColor();
    const images: HTMLElement[] = Array.from(document.getElementsByClassName(`${styles.infoImg}`)) as HTMLElement[];
    const imageCards: HTMLElement[] = Array.from(document.getElementsByClassName(`${styles.infoCard}`)) as HTMLElement[];
    images.forEach(async (image, index) => {
        image.addEventListener('load', () => {
            fac.getColorAsync(image as FastAverageColorResource)
                .then(color => {
                    imageCards[index].style.boxShadow = `0px 0px 10px 6px ${color.rgba}`;
                });
        });
    });
};

export function AddGrowText(string, element) {
    const content = document.getElementById('content');
    const growContainer = document.createElement('div');
    growContainer.setAttribute('class', 'growContainer');
    const stringByWord = string.split(' ');

    stringByWord.forEach(word => {
        let growWord = document.createElement('div');
        growWord.setAttribute('class', 'growWord');
        word.split('').forEach(letter => {
            let growLetter = document.createElement(element);
            growLetter.setAttribute('class', 'growLetter');
            growLetter.innerHTML = letter;
            growWord.appendChild(growLetter);
        });
        growContainer.appendChild(growWord);
    });
    
    content.appendChild(growContainer);
};

// use?
export function AnimateThreeDotsLoading() {
    useEffect(() => {
        const dots = document.body.getElementsByClassName('loadingDot');
        console.log(dots.length);
    });
};

// use?
export async function AnimateRouteChange(page) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    const homeAnimation = async () => {};
    
    const aboutAnimation = async () => {
        useEffect(() => {
            const body = document.body;
            const content = document.getElementById('content');
            const header = document.getElementById('header');

            body.style.background = 'rgb(22, 144, 196)';

            header.style.position = 'sticky';
            header.style.top = '2dvh';

            ChangeCardShadows();

            content.style.width = '90vw';
            // content.style.height = 'fit-content';
            content.style.zIndex = '-1';
            content.style.display = 'grid';
            content.style.gridTemplateAreas = 'sidebar aboutContainer';
            content.style.gridTemplateColumns = '1fr 5fr';
            content.style.transition = 'ease-out 0.3s';

            return () => {
                content.style.width = '70vw';
            };
        });
    };

    const projectsAnimation = async () => {};

    const contactAnimation = async () => {};

    let animation = async () => { };

    if (page === 'home') {
        animation = homeAnimation;
    }
    else if (page === 'about') {
        animation = aboutAnimation;
    }
    else if (page === 'projects') {
        animation = projectsAnimation;
    }
    else if (page === 'contact') {
        animation = contactAnimation;
    }

    await animation();
};
