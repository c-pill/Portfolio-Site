import ImposterCycle from '@/components/projects/imposter/ImposterCycle';
import ImposterMenu from '@/components/projects/imposter/ImposterMenu';
import ImposterStyles from '@/styles/projects/imposter.module.css';
import { useEffect, useState } from 'react';

export default function testPage() {
   const [playerList, setPlayerList] = useState([
      'Player 1',
      'Player 2',
      'Player 3',
   ]);
   const [play, setPlay] = useState(false);
   const [imposterCount, setImposterCount] = useState(1);

   useEffect(() => {
      const body = document.body;
      const header = document.getElementById('header');
      const content = document.getElementById('content');
      body.style.backgroundColor = 'rgba(165, 233, 189, 1)';
      body.style.justifyContent = 'center';
      body.style.alignItems = 'center';
   }, []);

   return (
      <div id={ImposterStyles.body}>
         <h1 id={ImposterStyles.title}>IMPOSTER</h1>
         {
            !play ? 
            <>
               <ImposterMenu
                  playerList={playerList}
                  setPlayerList={setPlayerList}
                  imposterCount={imposterCount}
                  setImposterCount={setImposterCount} 
               />
               <button
                  className={ImposterStyles.imposterButton}
                  type='button'
                  onClick={() => setPlay(true)}
               >
                  START
               </button>
            </>
            : 
            <ImposterCycle
               playerList={playerList}
               imposterCount={imposterCount}
               setPlay={setPlay}
            />
         }
         
      </div>
   )
}
