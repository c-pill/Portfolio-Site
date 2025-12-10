import { EmailBall } from "@/components/contact/ContactBalls";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectData } from "@/types/project-data.type";

import ProjectStyles from '@/styles/Projects.module.css';

export default function testPage() {
   const projectData: ProjectData = {
      name: 'Test',
      url: 'google.com',
      logo: EmailBall(),
      description: 'Testing testing',
      created_at_string: 'Sunday, 11/23/25',
      created_at_number: 50,
      languages: [],
      border_color: `purple`
   }

   return (
      <>
         <h1 style={{marginLeft: 'auto', marginTop: 'auto', justifyContent: 'center'}}>
            Test project page for adding non-github projects
         </h1>
         <div className={ProjectStyles.projectList}>
            <ProjectCard key={'test'} props={projectData}/>
         </div>
      </>
   )
}