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
      <span className="text-3xl mb-4">{icon}</span>
      <h3 className="font-semibold mb-2">{label}</h3>
      <p className="text-gray-600">{value}</p>
    </>
  );

  return (
    <div className="bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg transform transition-all hover:scale-110">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex flex-col items-center justify-center"
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
      value: "7033718706"
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
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/contactyatharthjain/"
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