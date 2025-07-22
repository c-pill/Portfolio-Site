import Header from '@/components/Header';
import { GetGitRepoData, GitToList, SortProjects } from '@/public/scripts/Projects.script';
import React, { useEffect, useState } from 'react';
import { Sort } from '@/types/sort.enum'; 
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useHoriScroll } from '@/hooks/useHoriScroll';

export default function ProjectList() {
    const [gitData, setGitData] = useState([]);
    const [sort, setSort] = useState(Sort.Largest);
    const [sortOpen, setSortOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const matches = useMediaQuery('(max-width: 900px) or (max-height: 850px)');
    const tooShort = useMediaQuery('(max-height: 500px)');

    useHoriScroll(!matches);

    useEffect(() => {
        const body = document.body;
        const content = document.getElementById('content');

        body.style.background = 'rgb(50, 50, 50)';
        body.style.overflowX = 'hidden';

        body.style.overflowY = tooShort ? 'scroll' : 'hidden';

        content.style.minHeight = '55dvh';
        content.style.height = 'fit-content';
        content.style.background = 'none';
        content.style.scrollbarWidth = 'none';
        content.style.scrollBehavior = 'smooth';

        content.style.overflowX = matches ? 'hidden' : 'scroll';
        content.style.overflowY = matches || tooShort ? 'scroll' : 'hidden';

        const gitError = document.getElementById('gitError');
        content.style.justifyContent = matches || gitError ? 'center' : 'left';
        content.style.marginRight = 'auto';
        content.style.marginLeft = 'auto';
    });

    useEffect(() => {
        GetGitRepoData()
            .then((gitData) => setGitData(gitData));
    }, []);
        
    function handleSearch(event: any) {
        setSearchQuery(event.target.value)
    }
    
    function handleSortButton(method: Sort) {
        setSort(method);
        setSortOpen(false);
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
                        </div>
                        :
                        <button className={styles.sortButton} type='button' onClick={() => setSortOpen(!sortOpen)}>{sort}</button>
                }
            </div>
            <div id='content'>
                <div id={styles.projectList}>
                {
                    GitToList(gitData, sort, searchQuery)
                }
                </div>
            </div>
        </>
    );
}