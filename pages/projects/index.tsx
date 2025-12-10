import Header from '@/components/global/Header';
import { GetGitRepoData, GitToList } from '@/public/scripts/Projects.script';
import React, { useEffect, useState } from 'react';
import { Sort } from '@/types/sort.enum'; 
import ProjectStyles from '@/styles/Projects.module.css';
import ProjectHead from '@/components/pageHeads/ProjectHead';
import ProjectFilter from '@/components/projects/ProjectFilter';

export default function ProjectList() {
   const [gitData, setGitData] = useState([]);
   const [sort, setSort] = useState<string>(Sort.Largest);
   const [searchQuery, setSearchQuery] = useState('');

   useEffect(() => {
      const body = document.body;
      body.style.background = 'rgb(50, 50, 50)';
      GetGitRepoData()
         .then((gitData) => setGitData(gitData));
   }, []);

   return (
      <>
         <ProjectHead />
         <Header />
         <ProjectFilter sort={sort} setSort={setSort} setSearchQuery={setSearchQuery} />
         <div className={ProjectStyles.projectList}>
            {
               GitToList(gitData, sort, searchQuery)
            }
         </div>
      </>
   );
}