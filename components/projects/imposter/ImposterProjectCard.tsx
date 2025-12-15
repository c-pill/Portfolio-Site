import { ProjectData } from "@/types/project-data.type";
import { ProjectCard } from "../ProjectCard";

const projectData: ProjectData = {
   name: 'Imposter ',
   url: `projects/imposter`,
   // logo: '',
   description: 'Online implementation of the Imposter word game.',
   created_at_string: 'Sunday, 12/15/25',
   created_at_number: 100,
   languages: ['TypeScript'],
   border_color: 'rgba(165, 233, 189, 1)'
}

export default function ImposterProjectCard() {
   return <ProjectCard key='Imposter' props={projectData} />;
}