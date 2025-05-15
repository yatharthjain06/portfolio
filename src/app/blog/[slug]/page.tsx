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
    <main className="min-h-screen bg-white">
      <Header />
      <article className="pt-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" className="text-maroon-700 hover:text-maroon-800 mb-6 inline-block text-lg">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="text-gray-500 mb-8 text-xl">{post.date}</div>
          <div className="prose prose-xl max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              const trimmedParagraph = paragraph.trim();
              if (!trimmedParagraph) return null;
              return (
                <p key={index} className="text-gray-600 mb-4 text-xl leading-relaxed">
                  {trimmedParagraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </main>
  );
} 