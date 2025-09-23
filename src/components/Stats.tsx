'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Award, Users } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
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
      const targets = { projects: 50, clients: 30, years: 5, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      const intervals: NodeJS.Timeout[] = [];

      Object.keys(targets).forEach(key => {
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;
        let current = 0;

        const intervalId = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervalId);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);

        intervals.push(intervalId);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      value: counts.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for themselves - our track record of delivering 
            exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;