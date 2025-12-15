// import ImposterStyles from '@/styles/projects/imposter.module.css';
// import imposterDict from '@/public/data/imposter/imposterDict.json' assert { type: 'json' };
// import { useEffect, useState } from 'react';

// export default function ImposterDictionary() {
//    const [words, setWords] = useState([]);
//    const [hints, setHints] = useState([]);
   
//    useEffect(() => {
//       const wordDict = imposterDict.map(pair => pair.word);
//       const hintsDict = imposterDict.map(pair => pair.hints);
//       setWords(wordDict);
//       setHints(hintsDict);      
//    }, []);

//    return (
//       <div id={ImposterStyles.imposterDictionary}>
//          <div id={ImposterStyles.words}>
//             <h3>Words</h3>
//             {
//                words.map(word => <h4>{word}</h4>)
//             }
//             <h4>Cat</h4><h4>Cat</h4>
//          </div>
//          <div id={ImposterStyles.hints}>
//             <h3>Hints</h3>
//             {
//                hints.map((hintGroup) => {
//                   return (
//                      <h4>
//                      {
//                         hintGroup.map((hint) => `${hint} `)
//                      }
//                      </h4>
//                   ) 
//                })
//             }
//          </div>
//       </div>
//    );
// };
