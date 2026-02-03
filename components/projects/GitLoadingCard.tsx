import { GitLogo } from "./ProjectLogos";
import ProjectStyles from '@/styles/Projects.module.css';

export function GitLoadingCard() {
   return (
      <div 
         id='gitLoading'
         className={ProjectStyles.projectCard}
         key='gitLoading'
         style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            justifyContent: 'center'
         }}
      >
         <GitLogo />
         <h3 style={{alignSelf: 'center', justifyContent: 'center'}}>GitHub Projects Loading...</h3>
      </div>
   );
};
