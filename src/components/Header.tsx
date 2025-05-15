'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maroon-700 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
            Yatharth Jain
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-gray-200 transition-colors">
              About Me
            </Link>
            <Link href="#projects" className="hover:text-gray-200 transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="hover:text-gray-200 transition-colors">
              Blog
            </Link>
            <Link href="#resume" className="hover:text-gray-200 transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 