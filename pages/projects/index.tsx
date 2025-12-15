import Header from '@/components/global/Header';
import { GetGitRepoData } from '@/public/scripts/Projects.script';
import React, { useEffect, useState } from 'react';
import { Sort } from '@/types/sort.enum'; 
import ProjectIndexHead from '@/components/pageHeads/projectHeads/IndexHead';
import ProjectFilter from '@/components/projects/ProjectFilter';
import imposterData from '@/public/data/projectData/imposterData';
import ProjectList from '@/components/projects/ProjectList';

export default function Projects() {
   const [gitData, setGitData] = useState([]);
   const [sort, setSort] = useState<string>(Sort.Newest);
   const [searchQuery, setSearchQuery] = useState('');

   useEffect(() => {
      const body = document.body;
      body.style.background = 'rgb(50, 50, 50)';
      GetGitRepoData()
         .then((gitData) => setGitData(gitData));
   }, []);

   return (
      <>
         <ProjectIndexHead />
         <Header />
         <ProjectFilter sort={sort} setSort={setSort} setSearchQuery={setSearchQuery} />
         <ProjectList gitProjectData={gitData} otherProjectData={[imposterData]} sort={sort} searchQuery={searchQuery} />
      </>
   );
};
