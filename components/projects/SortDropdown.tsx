import styles from '@/styles/Projects.module.css';

export default function SortDropdown({ sort }) {
    return (
        <>
            <button className={styles.sortButton}>{sort}</button>
            <div className={styles.sortOptions}>
                
            </div>
        </>
    );
};
