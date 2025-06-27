import React, { JSX } from "react";
import styles from '@/styles/Projects.module.css';

export function GitProjectCard({ project }: GitProps) {
    return (
        <div className={styles.projectCard}>
            <h2>
                <a href={project.html_url} target="_blank">
                    {project.name}
                </a>
            </h2>
            <h3>{project.description}</h3>
            {/* languages */}
            <h4>Size: {project.size_string}</h4>
            <h4>Created:             {project.created_at_string}</h4>
            <h4>Last updated:   {project.pushed_at_string}</h4>
        </div>
    );
};

export function GitProjectCards(gitData: GitHubData[]): JSX.Element {
    return (
        <>
            {gitData.map((project) => (
                <GitProjectCard key={project.name} project={project}/>
            ))}
        </>
    );
};