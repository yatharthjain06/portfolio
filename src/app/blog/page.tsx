import React from 'react';
import Blog from '@/components/Blog';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest blog posts about web development, programming, and technology.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen animated-gradient">
      <Header />
      <div className="pt-20">
        <Blog />
      </div>
    </main>
  );
} 