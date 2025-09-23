import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to create a winning strategy.',
      duration: '1-2 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our designers create stunning, user-centered designs that align with your brand and convert visitors into customers.',
      duration: '2-3 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring your design to life with clean, efficient code using the latest technologies and best practices.',
      duration: '3-4 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Optimization',
      description: 'Rigorous testing across devices and browsers ensures your website performs flawlessly for every user.',
      duration: '1 week',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle the launch and provide ongoing support to ensure your website continues to deliver results.',
      duration: 'Ongoing',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time. 
            From concept to launch, we've got you covered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full hidden lg:block">
              <div 
                className="bg-gradient-to-b from-blue-500 to-purple-500 w-full rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } transition-all duration-500 ${
                    activeStep >= index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                      activeStep >= index 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      Step {index + 1} • {step.duration}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl transform transition-all duration-500 ${
                      activeStep >= index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Pulse animation for active step */}
                    {activeStep === index && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} animate-ping opacity-20`}></div>
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;