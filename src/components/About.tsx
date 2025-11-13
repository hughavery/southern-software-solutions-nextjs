import React from 'react';
import { MapPin, Award, Users, Zap } from 'lucide-react';

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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-left">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Based in Taranaki, New Zealand</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Southern Software Solutions
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I'm Hugh Avery, the founder and lead developer behind Southern Software Solutions. I started
            this company in 2025 helping local businesses in Taranaki build their online presence. After
            seeing the impact that great websites could have on small businesses, I made the shift to do
            this full-time and am now serving clients across New Zealand.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            What we love most is sitting down with each business, getting to know the ins and outs of
            what you do, and crafting a solution that's tailored specifically to you. We believe the best
            digital experiences come from true collaboration and understanding your unique needs.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With a focus on modern design principles, advanced technology, and user-centered development,
            we help businesses across New Zealand establish a powerful online presence that
            converts visitors into customers and builds lasting relationships.
          </p>
        </div>

        {/* Values rendered where stats were */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start bg-blue-50 p-6 rounded-2xl shadow-lg">
              <div className="bg-white p-4 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
