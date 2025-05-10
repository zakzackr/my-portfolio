import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-[#f0e7db]/20 z-20 backdrop-blur">
      <div className="p-4 flex justify-center max-w-2xl mx-auto">
        <div className="space-x-7">
          <Link href="/" className="hover:underline transition">Home</Link>
          <Link href="/resume" className="hover:underline transition">Resume</Link>
          <Link href="/projects" className="hover:underline transition">Projects</Link>
          <Link href="/posts" className="hover:underline transition">Posts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

