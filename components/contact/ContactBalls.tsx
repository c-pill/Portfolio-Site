import styles from '@/styles/Contact.module.css';
import { ContactData, ContactProps } from '@/types/contact-data.type';
import { FastAverageColor, FastAverageColorResource } from 'fast-average-color';
import Image from 'next/image';
import { useState } from 'react';

function ContactBall({ props }: ContactProps) {
    const [shadowStyle, setShadowStyle] = useState('');

    const handleColorExtract = (img) => {
        const fac = new FastAverageColor();
        fac.getColorAsync(img as FastAverageColorResource)
            .then((color) => setShadowStyle(`0px 0px 10px 6px ${color.hex}`))
    };
    
    return (
        <a
            className={styles.contactBall}
            href={props.href}
            target='_blank'
            title={props.title}
            style={{boxShadow: shadowStyle}}
        >
            <Image
                className={styles.ballImg}
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
}

export function EmailBall() {
    const data: ContactData = {
        href: 'mailto:co.pillsw@gmail.com',
        title: 'co.pillsw@gmail.com',
        alt: 'My Email',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Microsoft_Outlook_new_logo.svg/640px-Microsoft_Outlook_new_logo.png'
    };
    return <ContactBall props={data} />;
};

export function GitHubBall() {
    const data: ContactData = {
        href: 'https://github.com/c-pill',
        title: 'My GitHub',
        alt: 'My GitHub',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.png'
    };
    return <ContactBall props={data} />;
};

export function LinkedInBall() {
    const data: ContactData = {
        href: 'https://www.linkedin.com/in/connorpillsworth/',
        title: 'My LinkedIn',
        alt: 'My LinkedIn',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.png'
    };
    return <ContactBall props={data} />;
};

export function LeetcodeBall() {
    const data: ContactData = {
        href: 'https://leetcode.com/c-pill/',
        title: 'My Leetcode',
        alt: 'My Leetcode',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/640px-LeetCode_logo_white_no_text.svg.png'
    };
    return <ContactBall props={data} />;
};

export default function ContactBalls() {
    return (
        <>
            <EmailBall />
            <GitHubBall />
            <LinkedInBall />
            <LeetcodeBall />
        </>
    );
};