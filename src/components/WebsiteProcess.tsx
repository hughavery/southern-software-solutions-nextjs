import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

const WebsiteProcess = () => {
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
      title: 'Discovery & Planning',
      description: 'We analyse your business goals, target audience, and brand requirements to create a comprehensive website strategy.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Design & Mockups',
      description: 'Custom designs that reflect your brand identity with user-friendly layouts optimized for conversions.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Hand-coded from scratch using modern technologies, ensuring fast loading speeds and perfect responsiveness.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Testing & SEO',
      description: 'Comprehensive testing across all devices and browsers, plus SEO optimization for better search rankings.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Rocket,
      title: 'Launch & Training',
      description: 'We handle the launch process and provide training so you can easily manage your new website.',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="website-process" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center md:text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left md:text-center">
            Website Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left md:text-center">
            From initial concept to live website, our streamlined process ensures
            your project is delivered on time and exceeds expectations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full hidden lg:block">
              <div
                className="bg-orange-500 w-full rounded-full transition-all duration-1000 ease-out"
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
                  <div className="flex-1 text-left lg:text-left">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                      activeStep >= index
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      Step {index + 1}
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
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

export default WebsiteProcess;