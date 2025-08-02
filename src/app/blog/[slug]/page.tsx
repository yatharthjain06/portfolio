import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { getBlogPost, blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen animated-gradient">
      <Header />
      <article className="pt-24 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-glass p-8 lg:p-12 animate-fade-in">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-medium transition-all duration-300 hover:scale-105 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight animate-slide-up">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <span className="text-lg font-medium bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full">
                    {post.date}
                  </span>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">
                    {Math.ceil(post.content.split(' ').length / 200)} min read
                  </span>
                </div>
              </div>
              
              <div className="section-divider mb-8"></div>
              
              <div className="prose prose-xl max-w-none animate-slide-up" style={{animationDelay: '0.4s'}}>
                {post.content.split('\n').map((paragraph, index) => {
                  const trimmedParagraph = paragraph.trim();
                  if (!trimmedParagraph) return <div key={index} className="h-6"></div>;
                  
                  return (
                    <p key={index} className="text-gray-700 mb-6 text-xl leading-relaxed font-light">
                      {trimmedParagraph}
                    </p>
                  );
                })}
              </div>
              
              <div className="section-divider my-12"></div>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl animate-slide-up" style={{animationDelay: '0.6s'}}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thanks for reading!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I hope you found this article helpful. Feel free to reach out if you have any questions or want to discuss this topic further.
                </p>
                <div className="flex gap-4">
                  <Link href="/blog" className="btn-primary">
                    Read More Posts
                  </Link>
                  <Link href="/#contact" className="btn-secondary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 