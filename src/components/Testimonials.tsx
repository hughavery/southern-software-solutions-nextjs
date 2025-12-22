import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dean Brown',
      role: 'Founder, Triage Plus',
      content: 'Hugh made a strong contribution to the backend systems on a large project, helping improve reliability and performance. He worked seamlessly with the wider team and provided valuable technical support throughout.',
      avatar: '/deanbrown.webp'
    },
    {
      name: 'Jordan Stirling',
      role: 'Personal Trainer, Flex Fitness Christchurch',
      content: 'I wanted to attract more clients to my online personal training business. The website they developed for my brand, Jordan Trains, not only helped me gain new clients but also added a polished, professional touch to my brand.',
      avatar: '/jordanstirling.jpg'
    },
    {
      name: 'James Oliver',
      role: 'Club President, Gisborne',
      content: 'We reached out from Gisborne and Hugh delivered an outstanding logo for our cricket club. Professional work and great communication throughout the process.',
      avatar: '/defaultavatar.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What It's Like to Work With Us
          </h2>
          <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto">
            Here's what our clients around New Zealand had to say after partnering with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="h-8 w-8 text-cyan-200 mb-4" />

              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="font-body text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;