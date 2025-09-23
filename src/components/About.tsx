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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-left">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Based in Christchurch, New Zealand</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Southern Software Solutions
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in the heart of Christchurch, New Zealand, Southern Software Solutions 
            has been crafting exceptional digital experiences for businesses across New Zealand 
            and Australia. Our passion lies in creating websites and web applications that not 
            only look stunning but drive real business results.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We are a small group of software engineers from the University of Canterbury who are really passionate about technology. 
            What we love most is sitting down with each business, getting to know the ins and outs of what you do, 
            and then crafting a solution that’s tailored to you. Nothing beats building together.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With a focus on modern design principles, cutting-edge technology, and user-centered 
            approach, we help businesses establish a powerful online presence that converts 
            visitors into customers and builds lasting relationships.
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
