import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav id='header'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Me</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact Me</Link>
    </nav>
  );
};
