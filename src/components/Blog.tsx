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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block bg-maroon-700 text-white px-4 py-2 rounded-lg hover:bg-maroon-800 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 