import { convertTimeToNumber, convertTimeToString } from "@/public/scripts/Projects.script";
import { ProjectData } from "@/types/project-data.type";

const created_at_date = 'Mon Dec 15 2025 12:54:52 GMT-0500';
const last_updated_date = 'Mon Feb 2 2026 9:36:54 GMT-0500';

const imposterData: ProjectData = {
   name: 'Imposter ',
   url: `projects/imposter`,
   description: 'Online implementation of the Imposter word game.',
   created_at_string: convertTimeToString(created_at_date),
   created_at_number: convertTimeToNumber(created_at_date),
   pushed_at_string: convertTimeToString(last_updated_date),
   pushed_at_number: convertTimeToNumber(last_updated_date),
   languages: ['TypeScript'],
   border_color: 'rgb(94, 202, 130)'
};

export default imposterData;
