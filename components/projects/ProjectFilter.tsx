import ProjectStyles from '@/styles/Projects.module.css';
import { Sort } from '@/types/sort.enum';
import { useState } from 'react';

export default function ProjectFilter({sort, setSort, setSearchQuery}) {
   const [sortOpen, setSortOpen] = useState(false);

   function handleSearch(event: { target: { value: React.SetStateAction<string>; }; }) {
      setSearchQuery(event.target.value);
   }

   function handleSortButton(method: Sort) {
      setSort(method);
      setSortOpen(false);
   }
   
   return (
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
   );
};
