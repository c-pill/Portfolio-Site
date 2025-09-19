import { useEffect, useState } from 'react';
import Header from '@/components/global/Header';
import { AnimateContactBalls } from '@/public/scripts/Contact.script'; 
import ContactBalls from '@/components/contact/ContactBalls';
import { AddGrowText, RemoveGrowText } from '@/public/scripts/globals';
import React from 'react';
import ContactHead from '@/components/pageHeads/ContactHead';

export default function ContactMe() {
   const [textGenerated, setTextGenerated] = useState(false);

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
      content.style.marginLeft = 'auto';
      content.style.marginRight = 'auto';
      content.style.width = '100dvw';
      content.style.height = '100%';

      const handleAddGrowText = () => {
         if (!textGenerated) {
               AddGrowText("If you'd like to reach out, please do!", 'h1');
               AddGrowText('Click the screen to start/stop icons', 'h3');
               setTextGenerated(true);
         }
      };

      const handleRemoveGrowText = () => {
         RemoveGrowText();
         setTextGenerated(false);
      }

      handleAddGrowText();
      AnimateContactBalls();

      document.addEventListener('resize', handleRemoveGrowText);

      return () => document.removeEventListener('resize', handleRemoveGrowText);
   }, [textGenerated]);

   
   return (
      <>
         <ContactHead />
         <Header />
         <div id='content' >
         </div>
         <ContactBalls />
      </>
   );
};
