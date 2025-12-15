import axios from "axios";
import { GitHubResponse } from "@/types/github-response.type";
import { ProjectData } from "@/types/project-data.type";
import { Sort } from "@/types/sort.enum";
import { GetDominantColor } from "./globals";
import { ProjectCards } from "@/components/projects/ProjectCard";
import { GitApiErrorCard } from "@/components/projects/GitApiErrorCard";
import { JSX } from "react";
import { GitLogo } from "@/components/projects/ProjectLogos";

export const convertTimeToString = (dateString: string) => {
   const date: Date = new Date(dateString);
   const readableString = date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
   });
   return readableString;
};

export const convertTimeToNumber = (dateString: string) => {
   const date: Date = new Date(dateString);
   return date.getTime();
};

export async function GetGitRepoData() {
   const formatSize = (size_kb: number) => {
      if (size_kb < 1000) return `${size_kb} KB`;
      size_kb /= 1000;
      if (size_kb < 1000) return `${size_kb} MB`;
      size_kb /= 1000;
      return `${size_kb} GB`;
   };

   const gitLogo = new Image();
   gitLogo.src = 'images/skills/GitHub.png';

   const gitColor: number[] = await GetDominantColor(gitLogo) as number[];

   const gitResponse: GitHubResponse = await axios.get('https://api.github.com/users/c-pill/repos')
      .then((response) => response.data)
      .catch(() => null);

   if (!gitResponse) return null;

   const gitRepoData: ProjectData[] = gitResponse.map(({
      name,
      html_url,
      description,
      created_at,
      pushed_at,
      size,
      languages_url
   }) => ({
      name,
      url: html_url,
      logo: GitLogo(),
      description,
      created_at_string: convertTimeToString(created_at),
      pushed_at_string: convertTimeToString(pushed_at),
      created_at_number: convertTimeToNumber(created_at),
      pushed_at_number: convertTimeToNumber(pushed_at),
      size_kb: size,
      size_string: formatSize(size),
      languages: [languages_url],
      border_color: `rgb(${gitColor.join(', ')}`

   })) as unknown as ProjectData[];

   for (let i = 0; i < gitRepoData.length; i++) {
      const languages = await axios.get(gitRepoData[i].languages[0])
         .then((response) => Object.keys(response.data))
         .catch((error) => {
               console.error(error);
               return [];
         });
      gitRepoData[i].languages = languages;
   }

   return gitRepoData;

};

export function SortProjects(projectData: ProjectData[], sort: string) {
   switch (sort) {
      case Sort.Newest: 
         projectData.sort((a, b) => b.created_at_number - a.created_at_number);
         break;
      case Sort.Oldest:
         projectData.sort((a, b) => a.created_at_number - b.created_at_number);
         break;
      case Sort.Smallest:
         projectData.sort((a, b) => a.size_kb - b.size_kb);
         break;
      case Sort.Largest:
         projectData.sort((a, b) => b.size_kb - a.size_kb);
         break;
      case Sort.Terminal:
         break;
      default:
         break;
   };
};
