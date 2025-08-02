'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl card-glass hover-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative p-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary text-sm group/btn"
          >
            View Project
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      description: "A full-stack AI-powered school management system using Node.js/Express, MySQL, and Python/Gradio. Features OpenAI API integration with function calling for natural language queries of student-subject data and intelligent search capabilities.",
      image: "/BizChat.png",
      link: "https://github.com/yatharthjain06"
    },
    {
      title: "AI Music Generation App",
      description: "BoilerMake Hackathon project: Full-stack web app with Python backend generating AI-driven melodies using Markov Chains. Features real-time server-client architecture, virtual piano interface, and innovative Text-to-MIDI conversion.",
      image: "/ChronoDo.png",
      link: "https://github.com/yatharthjain06"
    },
    {
      title: "BizChat - Social Messaging Platform",
      description: "Java-based multi-user messaging app with Swing UI, real-time chat, friend management, and blocking features. Built with multithreaded server architecture using Runnable interface for concurrent client handling and comprehensive JUnit testing.",
      image: "/BizChat.png",
      link: "https://github.com/yatharthjain06/CS180-Team-Project"
    }
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-primary-50/50 backdrop-blur-sm"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovative solutions and creative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/yatharthjain06" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-secondary text-lg group"
          >
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 