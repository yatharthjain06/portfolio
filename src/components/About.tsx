'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/YatharthJainProfilePicture.jpeg"
                alt="Yatharth Jain"
                fill
                className="rounded-full object-cover shadow-2xl ring-8 ring-white/10 group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight">
                <span className="block text-white/90 animate-slide-up">Hello,</span>
                <span className="block gradient-text animate-slide-up" style={{animationDelay: '0.2s'}}>
                  I'm Yatharth
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '0.4s'}}></div>
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
                Computer Science student at <span className="font-semibold text-white">Purdue University</span>
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Passionate developer focused on creating amazing web experiences with a keen interest in 
                data science and big data analysis. I love turning complex problems into elegant solutions.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  'Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'SQL', 'R', 'Bash',
                  'Node.js', 'FastAPI', 'Express', 'React', 'Next.js', 'HTML', 'CSS',
                  'MySQL', 'Elasticsearch', 'Git', 'Linux', 'REST APIs', 'OpenAI API'
                ].slice(0, 12).map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 