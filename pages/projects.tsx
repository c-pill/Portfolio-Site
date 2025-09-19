import Header from '@/components/global/Header';
import { GetGitRepoData, GitToList } from '@/public/scripts/Projects.script';
import React, { useEffect, useState } from 'react';
import { Sort } from '@/types/sort.enum'; 
import ProjectStyles from '@/styles/Projects.module.css';
import ProjectHead from '@/components/pageHeads/ProjectHead';

export default function ProjectList() {
   const [gitData, setGitData] = useState([]);
   const [sort, setSort] = useState(Sort.Largest);
   const [sortOpen, setSortOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');

   useEffect(() => {
      const body = document.body;
      body.style.background = 'rgb(50, 50, 50)';
      GetGitRepoData()
         .then((gitData) => setGitData(gitData));
   }, []);
      
   function handleSearch(event: { target: { value: React.SetStateAction<string>; }; }) {
      setSearchQuery(event.target.value);
   }

   function handleSortButton(method: Sort) {
      setSort(method);
      setSortOpen(false);
   }

   return (
      <>
         <ProjectHead />
         <Header />
         <div id={ProjectStyles.content}>
            <div id={ProjectStyles.projectFilters}> 
                  <input id={ProjectStyles.searchBar} type='text' placeholder='Search projects' onChange={handleSearch}/>
                  {
                     sortOpen 
                        ? 
                        <div className={ProjectStyles.sortOptions}>
                              <button className={ProjectStyles.sortOption} onClick={() => handleSortButton(Sort.Newest)}>
                                 {Sort.Newest}
                              </button>
                              <button className={ProjectStyles.sortOption} onClick={() => handleSortButton(Sort.Oldest)}>
                                 {Sort.Oldest}
                              </button>
                              <button className={ProjectStyles.sortOption} onClick={() => handleSortButton(Sort.Largest)}>
                                 {Sort.Largest}
                              </button>
                              <button className={ProjectStyles.sortOption} onClick={() => handleSortButton(Sort.Smallest)}>
                                 {Sort.Smallest}
                              </button>
                        </div>
                        :
                        <button className={ProjectStyles.sortButton} type='button' onClick={() => setSortOpen(!sortOpen)}>{sort}</button>
                  }
            </div>
            <div className={ProjectStyles.projectList}>
            {
               GitToList(gitData, sort, searchQuery)
            }
            </div>
         </div>
      </>
   );
}