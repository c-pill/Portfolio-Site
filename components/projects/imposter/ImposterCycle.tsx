import ImposterStyles from '@/styles/projects/imposter.module.css';
import { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import imposterDict from '@/public/data/imposter/imposterDict.json' assert { type: 'json' };

export default function ImposterCycle({ playerList, imposterCount, setPlay, unawareImposter }) {
   const [word, setWord] = useState('');
   const [fakeWord, setFakeWord] = useState('');
   const [hintIndex, setHintIndex] = useState(0);
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

   const newFakeWord = () => {
      let randIndex = Math.floor(Math.random() * imposterDict.length);
      if (imposterDict.length > 1) {
         while (imposterDict[randIndex].word == word) {
            randIndex = Math.floor(Math.random() * imposterDict.length);
         }
      }
      setFakeWord(imposterDict[randIndex].word);
   };
   
   const newRound = () => {
      setPlayerIndex(0);
      designateImposters();
      newWord();
      newFakeWord();
      setHintIndex(Math.floor(Math.random() * hints.length));
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
   }, [])

   return (
      <>
         <button
            className={ImposterStyles.topRightButton}
            type='button'
            onClick={() => setPlay(false)}
            >
            ❌
         </button>
         <div id={ImposterStyles.cycleView}>
            <PlayerCard
               player={playerList[playerIndex]}
               imposter={imposterIndicies.includes(playerIndex)}
               word={word}
               hint={hints[hintIndex]}
               fakeWord={fakeWord}
               unawareImposter={unawareImposter}
               reveal={reveal}
               setReveal={setReveal}
               color={playerColors[playerIndex]}
               />
            <button 
               id={ImposterStyles.nextPlayerButton}
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
         </div>
      </>
   );
};
