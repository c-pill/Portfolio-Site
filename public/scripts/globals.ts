import { FastAverageColor, FastAverageColorResource, FastAverageColorResult } from 'fast-average-color';
import ColorThief from 'colorthief';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ElementCenter } from '@/types/element-center.data';

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
