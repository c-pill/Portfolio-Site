import styles from '@/styles/About.module.css';
import Image from 'next/image';
import React from 'react';

export function C() {
    return (
        <a href='https://en.cppreference.com/w/c/language.html' className={styles.infoCard} target='_blank' title='C'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='C' src='https://upload.wikimedia.org/wikipedia/commons/d/d8/C_Language_Logo.svg' width={100} height={100}/>
        </a>
    );
};

export function Cpp() {
    return (
        <a href='https://en.cppreference.com/index.html' className={styles.infoCard} target='_blank' title='C++'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='C++' src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' width={100} height={100}/>
        </a>
    );
};

export function Cs() {
    return (
        <a href='https://dotnet.microsoft.com/en-us/languages/csharp' className={styles.infoCard} target='_blank' title='C#'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='C#' src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg' width={100} height={100}/>
        </a>
    );
};
                        
export function Python() {
    return (
        <a href='https://www.python.org/' className={styles.infoCard} target='_blank' title='Python'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Python' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/500px-Python_logo_51.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Java() {
    return (
        <a href='https://www.java.com/en/' className={styles.infoCard} target='blank' title='Java'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Java' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Swift() {
    return (
        <a href='https://www.swift.org/' className={styles.infoCard} target='_blank' title='Swift'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='Swift' src='https://developer.apple.com/assets/elements/icons/swift/swift-256x256_2x.png' width={100} height={100}/>
        </a>
    );
};

export function Html() {
    return (
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' className={styles.infoCard} target='_blank' title='HTML'>  
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='HTML' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Css() {
    return (
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' className={styles.infoCard} target='_blank' title='CSS'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='CSS' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/120px-Official_CSS_Logo.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Javascript() {
    return (
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className={styles.infoCard} target='_blank' title='JavaScript'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='JavaScript' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/JavaScript_unofficial_logo.svg' width={100} height={100}/>
        </a>
    );
};
                        
export function Typescript() {
    return (
        <a href='https://www.typescriptlang.org/' className={styles.infoCard} target='_blank' title='TypeScript'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='TypeScript' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/250px-Typescript.svg.png' width={100} height={100}/>
        </a>
    );
};

export function Sql() {
    return (
        <a href='https://en.wikipedia.org/wiki/SQL' className={styles.infoCard} target='_blank' title='SQL'>
            <Image crossOrigin='anonymous' className={styles.infoImg} alt='SQL' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/640px-Sql_data_base_with_logo.svg.png' width={100} height={100}/>
        </a>
    );
};
