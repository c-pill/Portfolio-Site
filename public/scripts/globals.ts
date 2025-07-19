import { FastAverageColor, FastAverageColorResource, FastAverageColorResult } from 'fast-average-color';
import ColorThief from 'colorthief';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ElementCenter } from '@/types/element-center.data';

export async function AddAverageColorShadow(images: HTMLElement[], recipients: HTMLElement[]) {
    const fac = new FastAverageColor();
    images.forEach(async (image, index) => {
        await GetAverageColor(image)
            .then((color: FastAverageColorResult) => {
                recipients[index].style.boxShadow = `0px 0px 10px 6px ${color.rgba}`;
            });
    });
};

export async function GetAverageColor(image: HTMLElement): Promise<FastAverageColorResult> {
    const fac = new FastAverageColor();
    return await fac.getColorAsync(image as FastAverageColorResource);
};

export async function GetDominantColor(image: HTMLElement) {
    return new Promise((resolve, reject) => {
        image.onload = () => {
            try {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(image);
                resolve(dominantColor);
            } catch (error) {
                reject(error);
            }
        };
        image.onerror = reject;
    });
};

export function GetElementCenter(element: HTMLElement): ElementCenter {
    const rect: DOMRect = element.getBoundingClientRect();
    const x: number = rect.left + rect.width / 2;
    const y: number = rect.top + rect.height / 2;
    return { x, y };
};

export function AddGrowText(string: string, element: any) {
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

            // ChangeCardShadows();

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
