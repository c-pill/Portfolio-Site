import { useEffect } from 'react';
import Header from '@/components/Header';
import AnimateContactBalls from '@/public/scripts/Contact.script'; 
import ContactBalls from '@/components/ContactBalls';
import { AddGrowText } from '@/public/scripts/globals';
import React from 'react';
import Head from 'next/head';

export default function ContactMe() {
    useEffect(() => {
        const body = document.body;
        const header = document.getElementById('header');
        const content = document.getElementById('content');
        
        header.style.zIndex = '2';

        body.style.overflowY = 'hidden';
        body.style.background = 'rgb(69, 157, 78)';
        
        content.style.transition = 'ease-out width 0.5s';
        content.style.background = 'none';
        content.style.flexWrap = 'wrap'
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';

        AddGrowText("If you'd like to reach out, please do!", 'h1');
        AddGrowText('Click the screen to start/stop icons', 'h3');
    });
    
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
