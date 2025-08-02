'use client';

import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/30 to-accent-50/30 backdrop-blur-sm"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="card-glass overflow-hidden animate-slide-up">
            <div className="bg-gradient-to-r from-secondary-500 to-accent-500 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Yatharth Jain - Resume</h3>
                <a
                  href="/Yatharth-Jain-Resume.docx.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
            
            <div className="p-2">
              <iframe
                src="/Yatharth-Jain-Resume.docx.pdf"
                className="w-full h-[800px] lg:h-[900px] rounded-lg"
                title="Yatharth Jain Resume"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 