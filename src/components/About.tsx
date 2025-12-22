import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is at the heart of everything we do, from design to deployment.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.'
    }
  ];

  return (
    <section id="about" className="bg-white">
      {/* Story Section */}
      <div className="bg-gradient-to-r from-cyan-950 to-cyan-900 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                Our Story
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-xl text-cyan-100 leading-relaxed mb-6">
                We are a small but growing business, currently made up of a web designer, a graphic designer, and a software engineer. We started Southern Software Solutions after seeing too many companies pay top dollar for websites that didn't reflect their brand or connect with their audience.
              </p>
              <p className="font-body text-xl text-cyan-100 leading-relaxed">
                With our combined skills, we focus on creating websites that blend technical precision with clean, effective visuals. Our goal is to help businesses put their best digital foot forward, making every online interaction count.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                Our Mission
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-xl text-cyan-50 leading-relaxed">
                At Southern Software Solutions, our mission is to equip New Zealand businesses with digital tools that genuinely move the needle. We focus on understanding your goals first, then designing websites and systems that elevate your brand, simplify your operations, and support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-l from-cyan-900 to-cyan-700 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                Our Values
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col items-start bg-cyan-900/30 border border-cyan-700/50 p-6 rounded-2xl backdrop-blur-sm">
                    <div className="bg-cyan-800/50 p-4 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h4 className="font-heading text-xl font-semibold text-white mb-2">{value.title}</h4>
                    <p className="font-body text-cyan-100">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
