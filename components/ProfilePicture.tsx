import profilePicture from '@/public/ProfilePicture.png';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';

export default function ProfilePicture() {
    return (
        <Image className='page-fade-in'
            id={styles.profilePicture} 
            src={profilePicture}
            alt='Connor Pillsworth'
            width={100}
            height={100}
            priority={false}
        />
    )
}