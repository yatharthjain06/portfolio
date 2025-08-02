'use client';

import React from 'react';

interface ContactCardProps {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, value, link }) => {
  const content = (
    <>
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{label}</h3>
      <p className="text-gray-600 text-center px-4 break-words leading-relaxed">{value}</p>
    </>
  );

  return (
    <div className="group card-glass w-80 h-48 flex flex-col items-center justify-center hover-lift p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex flex-col items-center justify-center relative z-10"
        >
          {content}
        </a>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
          {content}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const contacts = [
    {
      icon: "📞",
      label: "Phone",
      value: "(703) 371-8706"
    },
    {
      icon: "📧",
      label: "Email",
      value: "jain787@purdue.edu",
      link: "mailto:jain787@purdue.edu"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Let's connect and network",
      link: "https://www.linkedin.com/in/contactyatharthjain/"
    },
    {
      icon: "👨‍💻",
      label: "GitHub",
      value: "Explore my code repositories",
      link: "https://github.com/yatharthjain06"
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 to-primary-50/30 backdrop-blur-sm"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ContactCard {...contact} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl card-glass animate-slide-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            <a 
              href="mailto:jain787@purdue.edu"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send me an email
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 