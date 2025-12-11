import ImposterStyles from '@/styles/projects/imposter.module.css';

export default function ImposterMenu({ playerList, setPlayerList, imposterCount, setImposterCount }) {
   return (
      <div id={ImposterStyles.imposterMenu}>
         <div id={ImposterStyles.playerList}>
            {
               playerList.map((player: string, index: number) => 
                  player === '' ? null : (
                     <input
                        className={ImposterStyles.playerName}
                        key={index}
                        name='PlayerName'
                        defaultValue={player}
                        onBlur={(e) => {
                           setPlayerList([...playerList.slice(0, index), e.target.value, ...playerList.slice(index+1)]);
                        }}
                     />
                  )
               )
            }
            <button
               type='button'
               onClick={() => {
                  setPlayerList([...playerList, `Player ${playerList.length + 1}`])
               }}
            >
               Add Player
            </button>
         </div>
         {/* For changing number of imposters. Input weird so left out for now */}
         {/* <div id={ImposterStyles.imposterCount}>
            <input
               type='number'
               name='ImposterCount'
               key='imposterCount'
               defaultValue={1}
               min='1'
               max={playerList.filter((player: string) => player !== '').length}
               onKeyDown={(e) => {
                  if (['e', 'E', '+', '-'].includes(e.key)) {
                     e.preventDefault();
                  }
               }}
               onChange={(e) => {
                  setImposterCount(e.target.value)
               }}
            />
         </div> */}
      </div>
   );
};
