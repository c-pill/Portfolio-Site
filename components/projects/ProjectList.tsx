import { SortProjects } from '@/public/scripts/Projects.script';
import ProjectStyles from '@/styles/Projects.module.css';
import { ProjectData } from '@/types/project-data.type';
import { ProjectCard } from './ProjectCard';
import { GitApiErrorCard } from './GitApiErrorCard';
import { JSX } from 'react/jsx-runtime';

export default function ProjectList({
   gitProjectData,
   otherProjectData,
   otherCards,
   sort,
   searchQuery
}) 
{
   const projectData: ProjectData[] = gitProjectData ? [...gitProjectData, ...otherProjectData] : otherProjectData;      
   SortProjects(projectData, sort);
   const searchLowerCase = searchQuery.toLowerCase();

   return (
      <div className={ProjectStyles.projectList}>
         {   
            projectData.filter((data: ProjectData) => {
               const nameIncludes = data.name.toLowerCase().includes(searchLowerCase);
               const descriptionIncludes = data.description.toLowerCase().includes(searchLowerCase);
               return nameIncludes || descriptionIncludes;
            }).map((project) => (
               <ProjectCard key={project.name} props={project}/>
            ))
         }
         { 
            otherCards.map((card: JSX.Element) => card)
         }
         {
            !gitProjectData ? <GitApiErrorCard /> : null
         }     
      </div>
   );
};
