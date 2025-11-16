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
      {/* Mission Section */}
      <div className="bg-blue-500 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                OUR MISSION
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-white leading-relaxed">
                At Southern Software Solutions, our mission is to equip New Zealand businesses with digital tools that genuinely move the needle. We focus on understanding your goals first, then designing websites and systems that elevate your brand, simplify your operations, and support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                OUR VISION
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We envision a future where every business, regardless of size, has access to world-class
                digital solutions that level the playing field.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                With a focus on modern design principles, advanced technology, and user-centered development,
                we're building a digital landscape across New Zealand where businesses thrive online —
                converting visitors into customers and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                OUR VALUES
              </h3>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col items-start bg-blue-50 p-6 rounded-2xl shadow-lg">
                    <div className="bg-white p-4 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
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
