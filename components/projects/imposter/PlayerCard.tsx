import ImposterStyles from '@/styles/projects/imposter.module.css';

export default function PlayerCard({ player, imposter, word, hint, reveal, setReveal, color }) {   
   return (
      <div 
         className={ImposterStyles.playerCard}
         style={{backgroundColor: color}}
         onClick={() => setReveal(!reveal)}
      >
         {
            !reveal ? 
            <h2>{player}</h2>
            :
            <>
               {
                  imposter ? 
                  <>
                     <h2>🚨IMPOSTER🚨</h2>
                     <h2>Your hint is: {hint}</h2>
                  </>
                  :
                  <h2>{word}</h2>
               }
            </>
         }
      </div>
   );
};
