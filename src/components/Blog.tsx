'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, date, description, slug }) => {
  return (
    <div className="group card-glass hover-lift relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 mb-2 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full">
                {date}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 btn-primary text-sm group/btn"
        >
          Read Article
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-primary-50/50 backdrop-blur-sm"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughts, insights, and experiences from my journey in technology and software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
        
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Coming Soon!</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              I'm working on some exciting blog posts. Check back soon for insights on technology, programming, and my journey as a developer.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 