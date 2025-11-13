import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, FileText, Code, TestTube, Rocket } from 'lucide-react';

const SoftwareProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((stepRef, index) => {
      if (stepRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(stepRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Requirements Analysis',
      description: 'Deep dive into your business processes, user needs, and technical requirements to define the perfect solution.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Architecture & Planning',
      description: 'Design the system architecture with scalability and security in mind.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Build your application using modern frameworks, ensuring full ownership and complete customization.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TestTube,
      title: 'Testing & Integration',
      description: 'Rigorous testing including unit tests, integration tests, and user acceptance testing to ensure reliability.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Deploy to production with monitoring and provide ongoing support to ensure optimal performance.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Software Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, our systematic approach ensures your software
            application is built to scale and deliver exceptional user experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full hidden lg:block">
              <div
                className="bg-gradient-to-b from-purple-500 to-pink-500 w-full rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={el => {
                    if (el) stepRefs.current[index] = el;
                  }}
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
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      Step {index + 1}
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
      </div>
    </section>
  );
};

export default SoftwareProcess;