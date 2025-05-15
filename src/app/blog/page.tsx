import React from 'react';
import Blog from '@/components/Blog';
import Header from '@/components/Header';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Blog />
      </div>
    </main>
  );
} 