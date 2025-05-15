'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-[60vh] pt-16 pb-4 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <Image
              src="/YatharthJainProfilePicture.jpeg"
              alt="Yatharth Jain"
              fill
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Hello, I'm Yatharth Jain
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am currently a sophomore studying computer science at Purdue University. 
              As a passionate developer, I focus on creating amazing web experiences and 
              have a keen interest in data science and big data analysis. My technical 
              skills include Java, Python, HTML, CSS, JavaScript, C, R, and SQL. I'm 
              proficient with development tools such as IntelliJ, Android Studio, 
              PyCharm, Jupyter Notebooks, and Visual Studio Code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 