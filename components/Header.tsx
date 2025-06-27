import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();

  return (
    <div id='header'>
        <div onClick={() => { router.push('/'); }}>Home</div>
        <div onClick={() => { router.push('/about'); }}>About Me</div>
        <div onClick={() => { router.push('/projects'); }}>Projects</div>
        <div onClick={() => { router.push('/contact'); }}>Contact Me</div>
    </div>
  );
};
