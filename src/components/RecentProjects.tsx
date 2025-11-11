'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const RecentProjects = () => {
  const projects = [
    {
      title: 'JordanTrains',
      company: 'Jordan Stirling',
      description: 'When Jordan approached us, he was looking to grow his online coaching business through Everfit and boost his visibility in Christchurch. We built a sleek, energetic website that links directly to his Everfit system and strengthens his brand identity — making it easier for new clients to find him, learn about his training approach, and sign up online.',
      image: '/jordantrains.png',
      gradient: 'from-yellow-400 to-lime-500',
      type: 'Website',
      link: null
    },
    {
      title: 'Model Analyser',
      company: 'Powerco',
      description: 'We engineered a web-based visualization system for Powerco to compare and analyse electricity distribution models across their network. Built as a single-page React application, the platform integrates real-time network data and visualizes the hierarchy from Grid Exit Points to individual devices using color-coded indicators. This system enhances visibility across Powerco\'s infrastructure, helping engineers diagnose issues faster and plan maintenance more effectively.',
      image: '/powerco.png',
      gradient: 'from-purple-500 to-indigo-600',
      type: 'Software App',
      link: null
    },
    {
      title: 'Nexus',
      company: 'Triage Plus',
      description: 'We contributed to the development of Nexus, a Triage Plus application designed to manage patients and incidents before hospital arrival. Our work included building responsive web dashboards and enhancing backend functionality to improve multi-device access and overall performance. Triage Plus has since become one of New Zealand’s leading emergency response software companies, with its platform now used nationwide by emergency rescue teams to streamline critical pre-hospital operations.',
      image: '/triageplus.png',
      gradient: 'from-blue-500 to-cyan-600',
      type: 'Software App',
      link: 'https://www.triage-plus.com/product-triage-nexus'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real solutions we've built for real businesses. Here's how we've helped our clients succeed.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const ProjectCard = () => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.3 });

              return (
                <div
                  ref={ref}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Project Info */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.company}
                      </div>
                      <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                        {project.type}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More About Nexus
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </motion.div>

                  {/* Project Image */}
                  <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="relative w-full max-w-3xl">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.company}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            };

            return <ProjectCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
