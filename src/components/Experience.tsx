'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'project':
        return '🚀';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-primary-500 to-primary-600';
      case 'education':
        return 'from-secondary-500 to-secondary-600';
      case 'project':
        return 'from-accent-500 to-accent-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div 
      className="relative card-glass hover-lift animate-slide-up"
      style={{animationDelay: `${index * 0.2}s`}}
    >
      <div className="absolute -left-4 top-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-lg">{getTypeIcon(experience.type)}</span>
      </div>
      
      <div className="pl-8">
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(experience.type)} mb-4`}>
          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
        </div>
        
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
            <span className="font-semibold text-primary-600">{experience.company}</span>
            <span className="hidden sm:block">•</span>
            <span>{experience.location}</span>
            <span className="hidden sm:block">•</span>
            <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">{experience.duration}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <ul className="space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-primary-500 mt-1.5 text-xs">▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full border border-gray-300 hover:shadow-md transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineering Intern",
      company: "CoolR Group Inc.",
      location: "Ashburn, Virginia",
      duration: "May 2025 - Current",
      description: [
        "Developed an intelligent enterprise chatbot using Python, FastAPI, and Langchain that integrates OpenAI GPT-3.5 with Elasticsearch to enable natural language search and retrieval of knowledge base documents and cluster status",
        "Engineered a secure, web-based UI with HTML/CSS/JavaScript for real-time user interaction, leveraging Pydantic for data validation and dotenv for environment management, resulting in improved information accessibility",
        "Developed a secure RESTful API using Node.js and TypeScript that provides controlled access to international trade data stored in Elasticsearch",
        "Built a Model Context Protocol (MCP) server with advanced search and aggregation capabilities for trade data analysis, implementing field-specific queries, multi-metric aggregations, and structured data access patterns"
      ],
      technologies: ["Python", "FastAPI", "Langchain", "OpenAI GPT-3.5", "Elasticsearch", "Node.js", "TypeScript", "HTML", "CSS", "JavaScript", "Pydantic"],
      type: "work"
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "The Data Mine",
      location: "West Lafayette, Indiana",
      duration: "Aug 2024 - May 2025",
      description: [
        "Worked in the analytics team as part of the Data Mine Corporate Partners Program in collaboration with Caterpillar",
        "Collaborated with a team of 12 people using Agile methodology and technologies such as ScienceLogic to navigate insights and enable monitoring of metrics and management of databases",
        "Created Science Logic system tickets to track metrics such as active processes to power a Grafana Dashboard",
        "Enhanced data visualization and reporting processes by leveraging Python libraries (Pandas, Matplotlib, NumPy) and R environment tools, improving clarity and usability of findings"
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "R", "ScienceLogic", "Grafana", "Agile", "Data Visualization"],
      type: "work"
    },
    {
      title: "B.S. in Computer Science",
      company: "Purdue University",
      location: "West Lafayette, Indiana",
      duration: "Aug 2023 - May 2027",
      description: [
        "Currently pursuing Bachelor of Science in Computer Science with a GPA of 3.82/4.00",
        "Related Coursework: Data Structures and Algorithms, Computer Architecture, Intro to Object-Oriented Programming in Java, Programming in C, Discrete Math, Linear Algebra, Introduction to Statistics",
        "Active participant in hackathons including BoilerMake, developing innovative solutions and collaborating with diverse teams",
        "Engaged in research opportunities and corporate partnership programs to gain real-world experience"
      ],
      technologies: ["Java", "C", "Python", "Data Structures", "Algorithms", "Computer Architecture", "Statistics", "Linear Algebra"],
      type: "education"
    },
    {
      title: "School Management System",
      company: "Personal Project",
      location: "Remote",
      duration: "May 2025",
      description: [
        "Developed a full-stack AI-powered school management system using Node.js/Express, MySQL, and Python/Gradio",
        "Integrated OpenAI API with function calling to enable natural language queries for student-subject data, ID resolution, and name-based searches",
        "Implemented comprehensive database design and API architecture for efficient data management",
        "Created intuitive user interface for seamless interaction with complex educational data"
      ],
      technologies: ["Node.js", "Express", "MySQL", "Python", "Gradio", "OpenAI API", "REST APIs"],
      type: "project"
    },
    {
      title: "AI Music Generation App - BoilerMake Hackathon",
      company: "Hackathon Project",
      location: "West Lafayette, Indiana",
      duration: "Feb 2025",
      description: [
        "Engineered a full-stack web app with Python backend and responsive frontend (HTML/CSS/JS) to generate AI-driven melodies using probabilistic models and Markov Chains",
        "Built real-time server-client architecture with a virtual piano interface",
        "Developed innovative 'Text-to-MIDI' feature that converts emotional tone in text into musical output",
        "Implemented advanced algorithms for music generation and real-time audio processing"
      ],
      technologies: ["Python", "HTML", "CSS", "JavaScript", "Markov Chains", "Real-time Architecture", "MIDI"],
      type: "project"
    },
    {
      title: "BizChat - Social Messaging Platform",
      company: "Academic Project",
      location: "West Lafayette, Indiana",
      duration: "Oct 2024 - Dec 2024",
      description: [
        "Developed a Java-based multi-user messaging app with Swing UI, real-time chat, friend management, blocking, and persistent user data via serialization",
        "Built a multithreaded server using the Runnable interface for concurrent client handling",
        "Applied Object-Oriented Programming principles and implemented comprehensive JUnit testing to ensure robust, scalable performance",
        "Designed and implemented complex user interaction features including friend management and blocking systems"
      ],
      technologies: ["Java", "Swing", "Multithreading", "JUnit", "OOP", "Serialization", "Server Architecture"],
      type: "project"
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 to-secondary-50/40 backdrop-blur-sm"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My journey through education, projects, and continuous learning in computer science
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl card-glass animate-slide-up" style={{animationDelay: '0.8s'}}>
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning & Growing</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skills and seeking new challenges. Currently exploring advanced topics in 
              machine learning, cloud computing, and modern web development frameworks.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Let's Connect
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;