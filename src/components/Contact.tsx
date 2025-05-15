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
      <span className="text-4xl mb-2">{icon}</span>
      <h3 className="text-lg font-semibold mb-1 text-gray-800">{label}</h3>
      <p className="text-sm text-gray-700 text-center px-4 break-words max-w-[230px]">{value}</p>
    </>
  );

  return (
    <div className="bg-white rounded-xl w-[220px] h-[160px] flex flex-col items-center justify-center shadow-lg transform transition-all hover:scale-105 p-4">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex flex-col items-center justify-center hover:text-maroon-700 transition-colors"
        >
          {content}
        </a>
      ) : (
        content
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
      value: "yatharthjain0930@gmail.com",
      link: "mailto:yatharthjain0930@gmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me on LinkedIn",
      link: "https://www.linkedin.com/in/contactyatharthjain/"
    },
    {
      icon: "👨‍💻",
      label: "GitHub",
      value: "Check out my projects",
      link: "https://github.com/yatharthjain06"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 