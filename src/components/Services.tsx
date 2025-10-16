import React from 'react';
import { Monitor, Smartphone, Wrench } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Design',
      description: 'Custom, responsive websites that look stunning and perform flawlessly across all devices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX', 'Branding'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '/website-design'
    },
    {
      icon: Smartphone,
      title: 'Software Apps',
      description: 'Powerful software apps built with cutting-edge technology to streamline your business processes.',
      features: ['Modern Frameworks', 'Database Integration', 'API Development', 'Cloud Deployment', 'AI integration'],
      gradient: 'from-purple-500 to-pink-500',
      link: '/software-apps'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Keep your website secure, updated, and running smoothly with our maintenance packages.',
      features: ['Security Updates', 'Content Updates', 'Performance Monitoring', 'Ongoing Support', 'Design Tweaks'],
      gradient: 'from-sky-400 to-teal-800',
      link: '/maintenance'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-50 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch and beyond, we provide comprehensive digital solutions 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 relative overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradient} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 cursor-pointer`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;