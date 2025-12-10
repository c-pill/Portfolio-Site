import { GitLogo } from "./ProjectLogos";
import ProjectStyles from '@/styles/Projects.module.css';

export function GitApiErrorCard() {
   return (
      <div 
         id='gitError'
         className={ProjectStyles.projectCard}
         key='gitError'
         style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '1dvw'
         }}>
         <h2>
            <a href='https://github.com/c-pill?tab=repositories' target="_blank" className={ProjectStyles.projectLink}>
               My GitHub Projects
            </a>
            <GitLogo />
         </h2>
         <h3 style={{textAlign: 'center', justifyContent: 'center'}}>Looks like there was an issue with the GitHub API. No worries! Press this card&apos;s title to view my projects on GitHub!</h3>
      </div>
   );
};