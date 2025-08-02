'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transform transition-all duration-300">
            Yatharth Jain
          </Link>
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <Link href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  About Me
                </Link>
                <Link href="#experience" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Experience
                </Link>
                <Link href="#projects" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Projects
                </Link>
                <Link href="#resume" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Resume
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Contact
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Blog
                </Link>
              </>
            ) : (
              <>
                <Link href="/#about" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  About Me
                </Link>
                <Link href="/#experience" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Experience
                </Link>
                <Link href="/#projects" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Projects
                </Link>
                <Link href="/#resume" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Resume
                </Link>
                <Link href="/#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Contact
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
                  Blog
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 