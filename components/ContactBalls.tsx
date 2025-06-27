import styles from '@/styles/Contact.module.css';
import Image from 'next/image';

export function EmailBall() {
    return (
        <a href='mailto:co.pillsw@gmail.com' className={styles.contactBall} title='co.pillsw@gmail.com'>
            <Image crossOrigin='anonymous' className={styles.ballImg} alt='My Email' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Microsoft_Outlook_new_logo.svg/640px-Microsoft_Outlook_new_logo.png' width={100} height={100} />
        </a>
    );
};

export function GitHubBall() {
    return (
        <a href='https://github.com/c-pill' className={styles.contactBall} target='_blank' title='My GitHub'>
            <Image crossOrigin='anonymous' priority={true} className={styles.ballImg} alt='My GitHub' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.png' width={100} height={100}/>
        </a>
    );
};

export function LinkedInBall() {
    return (
        <a href='https://www.linkedin.com/in/connorpillsworth/' className={styles.contactBall} target='_blank' title='My LinkedIn'>
            <Image crossOrigin='anonymous' priority={true} className={styles.ballImg} alt='My LinkedIn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.png' width={100} height={100}/>
        </a>
    );
};

export function LeetcodeBall() {
    return (
        <a href='https://leetcode.com/c-pill/' className={styles.contactBall} target='_blank' title='My Leetcode'>
            <Image crossOrigin='anonymous' priority={true} className={styles.ballImg} alt='My Leetcode' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/640px-LeetCode_logo_white_no_text.svg.png' width={100} height={100}/>
        </a>
    );
};

export default function ContactBalls() {
    return (
        <>
            <EmailBall />
            <GitHubBall />
            <LinkedInBall />
            <LeetcodeBall />
        </>
    );
};