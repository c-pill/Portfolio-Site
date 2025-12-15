import ImposterCycle from '@/components/projects/imposter/ImposterCycle';
import ImposterStartMenu from '@/components/projects/imposter/ImposterStartMenu';
// import ImposterDictionary from '@/components/projects/imposter/ImposterDictionary';
import ImposterStyles from '@/styles/projects/imposter.module.css';
import { useEffect, useState } from 'react';

export default function Imposter() {
   const [playerList, setPlayerList] = useState([
      'Player 1',
      'Player 2',
      'Player 3',
   ]);
   const [play, setPlay] = useState(false);
   const [imposterCount, setImposterCount] = useState(1);
   // const [openDictionary, setOpenDictionary] = useState(false);

   useEffect(() => {
      const body = document.body;
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
               {/* <button
                  className={ImposterStyles.topRightButton}
                  type='button'
                  onClick={() => setOpenDictionary(!openDictionary)}
                  // onBlur={() => setOpenDictionary(false)}
               >
                  📖
               </button> */}
               <ImposterStartMenu
                  playerList={playerList}
                  setPlayerList={setPlayerList}
                  imposterCount={imposterCount}
                  setImposterCount={setImposterCount} 
               />
               <button
                  className={ImposterStyles.topRightButton}
                  type='button'
                  onClick={() => setPlay(true)}
               >
                  ✔️
               </button>
               {/* {
                  openDictionary ? 
                  <ImposterDictionary />
                  :
                  <></>
               } */}
            </>
            : 
            <ImposterCycle
               playerList={playerList.filter(player => player !== '')}
               imposterCount={imposterCount}
               setPlay={setPlay}
            />
         }
         
      </div>
   )
}
