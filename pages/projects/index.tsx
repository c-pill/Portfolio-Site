import Header from '@/components/Header';
import { GitProjectCards } from '@/components/ProjectCard';
import { GetGitRepoData, SortProjects } from '@/public/scripts/Projects.script';
import React, { useEffect, useState } from 'react';
import { Sort } from '@/types/sort.enum'; 
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';

export default function ProjectList() {
    const [gitData, setGitData] = useState([]);
    const [sort, setSort] = useState(Sort.Largest);
    const [sortOpen, setSortOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const body = document.body;
        const content = document.getElementById('content');

        body.style.background = 'rgb(50, 50, 50)';

        content.style.background = 'none';
        content.style.overflowX = 'auto';
        content.style.overflowY = 'hidden';
        content.style.height = '100%';
        content.style.width = '70dvw';
        content.style.scrollbarWidth = 'none';
        content.style.justifyContent = 'left';
        content.style.scrollBehavior = 'smooth';

        content.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                content.scrollLeft += e.deltaY * 5;
            }
        }, { passive: false });
    });
    
    useState(() => {
        GetGitRepoData()
            .then(gitData => {
                SortProjects(gitData, sort);
                setGitData(gitData);
            });
    });

    function handleSearch(event: any) {
        setSearchQuery(event.target.value)
    }

    function handleSortButton(method: Sort) {
        setSort(method);
        setSortOpen(false);
    }

    function sortAndFilterList() {
        SortProjects(gitData, sort);
        const searchLowerCase = searchQuery.toLowerCase();
        return GitProjectCards(gitData.filter((data: GitHubData) => {
            const nameIncludes = data.name.toLowerCase().includes(searchLowerCase);
            const descriptionIncludes = data.description.toLowerCase().includes(searchLowerCase);
            return nameIncludes || descriptionIncludes;
        }));
    }

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Header />
            <div id={styles.projectFilters}> 
                <input id={styles.searchBar} type='text' placeholder='Search projects' onChange={handleSearch}/>
                {
                    sortOpen 
                        ? 
                        <div className={styles.sortOptions}>
                            <button className={styles.sortOption} onClick={() => handleSortButton(Sort.Newest)}>
                                {Sort.Newest}
                            </button>
                            <button className={styles.sortOption} onClick={() => handleSortButton(Sort.Oldest)}>
                                {Sort.Oldest}
                            </button>
                            <button className={styles.sortOption} onClick={() => handleSortButton(Sort.Largest)}>
                                {Sort.Largest}
                            </button>
                            <button className={styles.sortOption} onClick={() => handleSortButton(Sort.Smallest)}>
                                {Sort.Smallest}
                            </button>
                            {/* <button className={styles.sortOption} onClick={() => handleSortButton(Sort.Terminal)}>
                                {Sort.Terminal}
                            </button> */}
                        </div>
                        :
                        <button className={styles.sortButton} type='button' onClick={() => setSortOpen(!sortOpen)}>{sort}</button>
                }
            </div>
            <div id='content'>
                <div id={styles.projectList}>
                {
                    sortAndFilterList()
                }
                </div>
            </div>
        </>
    );
}