import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white/25 z-20 backdrop-blur">
      <div className="p-4 flex justify-center max-w-2xl mx-auto">
        <div className="space-x-7">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

