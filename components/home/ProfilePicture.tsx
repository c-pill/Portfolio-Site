import profilePicture from '@/public/ProfilePicture.png';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';

export default function ProfilePicture() {
    return (
        <Image
            id={styles.profilePicture} 
            src={profilePicture}
            alt='Connor Pillsworth'
            width={250}
            height={500}
            style={{ height: 'auto' }}
            placeholder='blur'
            priority
        />
    )
}