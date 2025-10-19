'use client';

import React from 'react';
import Image from 'next/image';

const RecentProjects = () => {
  const projects = [
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
      description: 'We were contracted to help develop Nexus, the main app for Triage Plus, a SaaS platform for prehospital patient and incident management. Nexus enables emergency services to coordinate vehicles, crews, and first responders while sharing real-time patient information such as triage status and initial treatment. Our contribution focused on enhancing multi-platform functionality, including web dashboards and backend systems, allowing secure, simultaneous access across devices. The platform improves situational awareness, supports efficient resource allocation, and streamlines administration for billing, compliance, and clinical record management, ultimately contributing to faster response times and better patient outcomes.',
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Project Info */}
              <div className="flex-1">
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
              </div>

              {/* Project Image */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative w-full max-w-3xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.company}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
