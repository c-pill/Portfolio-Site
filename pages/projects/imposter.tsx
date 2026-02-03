import ImposterHead from '@/components/pageHeads/projectHeads/ImposterHead';
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
   const [openRules, setOpenRules] = useState(false);
   const [unawareImposter, setUnawareImposter] = useState(false);

   useEffect(() => {
      const body = document.body;
      body.style.backgroundColor = 'rgb(94, 202, 130)';
      body.style.justifyContent = 'center';
      body.style.alignItems = 'center';
   }, []);

   return (
      <>
      <ImposterHead />
         <div id={ImposterStyles.body}>
            <h1 id={ImposterStyles.title}>IMPOSTER</h1>
            {
               openRules ?
               <div id={ImposterStyles.options}>
                  <h1>Optional Settings</h1>
                  <div className={ImposterStyles.setting}>
                     <h2>Unaware Imposter</h2>
                     <input name='Imposter Knows' type='checkbox' onChange={e => setUnawareImposter(!unawareImposter)} checked={unawareImposter}/>
                  </div>
                  <button
                     className={ImposterStyles.genericButton}   
                     type='button'
                     onClick={() => setOpenRules(false)}
                  >
                     Done
                  </button>
               </div>
               :
               null
            }
            {
               !play ? 
               <>
                  <button
                     className={ImposterStyles.topLeftButton}
                     type='button'
                     onClick={() => setOpenRules(!openRules)}
                  >
                     🔧
                  </button>
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
                  unawareImposter={unawareImposter}
               />
            }
         </div>
      </>
   )
}
