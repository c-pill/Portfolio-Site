import ImposterStyles from '@/styles/projects/imposter.module.css';
import { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import imposterDict from '@/public/data/imposter/imposterDict.json' assert { type: 'json' };


export default function ImposterCycle({ playerList, imposterCount, setPlay }) {
   const [word, setWord] = useState('d');
   const [hints, setHints] = useState([]);
   const [reveal, setReveal] = useState(false);
   const [imposterIndicies, setImposterIndicies] = useState([]);
   const [playerIndex, setPlayerIndex] = useState(0);
   const [playerColors, setPlayerColors] = useState([]);
   
   const designateImposters = () => {
      const nextImposters = [];
      const indicies = Array.from({length: playerList.length}, (_, i) => i);
      for (let i = 0; i < imposterCount; i++) {
         const randIndex = Math.floor(Math.random() * indicies.length);
         nextImposters.push(indicies[randIndex]);
         indicies.splice(randIndex, 1);
      }
      setImposterIndicies(nextImposters);
   };
   
   const newWord = () => {
      const randIndex = Math.floor(Math.random() * imposterDict.length);
      setWord(imposterDict[randIndex].word);
      setHints(imposterDict[randIndex].hints);
   };
   
   const pickHint = () => {
      const randIndex = Math.floor(Math.random() * hints.length);
      return hints[randIndex];
   }
   
   const newRound = () => {
      setPlayerIndex(0);
      designateImposters();
      newWord();
   };
   
   useEffect(() => {
      newRound();
      const colors = [];
      for (let i = 0; i < playerList.length; i++) {
         const hue = Math.floor(Math.random() * 361);
         const saturation = Math.floor(Math.random() * 101);
         const lightness = '65%';
         colors[i] = `hsl(${hue}, ${saturation}%, ${lightness})`;
      }
      setPlayerColors(colors);
   }, [newRound, playerList])

   return (
      <>
         <button
            id={ImposterStyles.exitButton}
            type='button'
            onClick={() => setPlay(false)}
         >
            🚪
         </button>
         <div id={ImposterStyles.cycleView}>
            <PlayerCard
               player={playerList[playerIndex]}
               imposter={imposterIndicies.includes(playerIndex)}
               word={word}
               hint={pickHint()}
               reveal={reveal}
               setReveal={setReveal}
               color={playerColors[playerIndex]}
            />
         </div>
         <button 
            className={ImposterStyles.imposterButton}
            type='button'
            onClick={() => {
               const nextIndex = playerIndex + 1;
               if (nextIndex === playerList.length) {
                  newRound();
               }
               else {
                  setPlayerIndex(nextIndex);
               }
               setReveal(false);
            }}
         >
            NEXT PLAYER
         </button>
      </>
   );
};
