'use client';

import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Resume</h2>
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/Yatharth-Jain-Resume.docx.pdf"
            className="w-full h-[800px]"
            title="Yatharth Jain Resume"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume; 