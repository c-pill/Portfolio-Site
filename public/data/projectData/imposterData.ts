import { convertTimeToNumber, convertTimeToString } from "@/public/scripts/Projects.script";
import { ProjectData } from "@/types/project-data.type";

const created_at_date = 'Mon Dec 15 2025 12:54:52 GMT-0500';

const imposterData: ProjectData = {
   name: 'Imposter ',
   url: `projects/imposter`,
   description: 'Online implementation of the Imposter word game.',
   created_at_string: convertTimeToString(created_at_date),
   created_at_number: convertTimeToNumber(created_at_date),
   languages: ['TypeScript'],
   border_color: 'rgba(165, 233, 189, 1)'
};

export default imposterData;
