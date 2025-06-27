import styles from '@/styles/About.module.css';
import Image from 'next/image';

export function UGA_AI() {
    return (
        <div className={styles.workContainerL}>
            <a href='https://www.ai.uga.edu/ms-artificial-intelligence' className={styles.workImageContainer} target='_blank' title='UGA M.S. AI'>
                <Image className={styles.workImage} priority={true} alt='UGA M.S. AI' src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/University_of_Georgia_seal.png/250px-University_of_Georgia_seal.png' width={100} height={100}/>
            </a>
            <div className={styles.workText}>
                <h3>
                    University of Georgia
                </h3>
                <h4>
                    Master of Science in Computer Science
                </h4>
                <h5>
                    Expected to graduate May 2026
                </h5>
                <ul>
                    <li>
                        GPA: N/A
                    </li>
                    <li>
                        Will have finished a Master's Thesis by graduation
                    </li>
                    <li>
                        In progress! ⚒️
                    </li>
                </ul>
            </div>
        </div>
    );
};

export function UGA_CSCI() {
    return (
        <div className={styles.workContainerR}>
            <a href='https://www.cs.uga.edu/bachelor-science-computer-science' className={styles.workImageContainerL} target='_blank' title='UGA B.S. CSCI'>
                <Image className={styles.workImage} alt='UGA B.S. CSCI' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/250px-Georgia_Athletics_logo.png' width={100} height={100}/>
            </a>
            <div className={styles.workText}>
                <h3>
                    University of Georgia
                </h3>
                <h4>
                    Bachelor of Science in Computer Science
                </h4>
                <h5>
                    Graduated May 2025, magna cum laude
                </h5>
                <ul>
                    <li>
                        GPA: 3.88/4.00
                    </li>
                    <li>
                        Studied abroad in Big Island, Hawai'i
                    </li>
                </ul>
            </div>
        </div>
    );
};
