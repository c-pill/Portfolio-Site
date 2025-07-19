import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { AnimateContactBalls } from '@/public/scripts/Contact.script'; 
import ContactBalls from '@/components/ContactBalls';
import { AddAverageColorShadow, AddGrowText } from '@/public/scripts/globals';
import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Contact.module.css';

export default function ContactMe() {
    const [textGenerated, setTextGenerated] = useState(false);

    useEffect(() => {
        const body = document.body;
        const header = document.getElementById('header');
        const content = document.getElementById('content');
        const contactBalls: HTMLElement[] = Array.from(document.body.getElementsByClassName(styles.contactBall)) as HTMLElement[];
        const contactImages: HTMLElement[] = Array.from(document.body.getElementsByClassName(styles.ballImg)) as HTMLElement[];

        header.style.zIndex = '2';

        body.style.overflowY = 'hidden';
        body.style.background = 'rgb(69, 157, 78)';
        body.style.justifyContent = 'center';
        
        content.style.transition = 'ease-out width 0.5s';
        content.style.background = 'none';
        content.style.flexWrap = 'wrap'
        content.style.flexDirection = 'column';
        content.style.justifyContent = 'center';
        content.style.marginLeft = 'auto';
        content.style.marginRight = 'auto';

        if (!textGenerated) {
            AddGrowText("If you'd like to reach out, please do!", 'h1');
            AddGrowText('Click the screen to start/stop icons', 'h3');
            setTextGenerated(true);
        }

        AddAverageColorShadow(contactImages, contactBalls);
    }, []);

    AnimateContactBalls();
    
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Header />
            <div id='content' >
            </div>
            <ContactBalls />
        </>
    );
};
