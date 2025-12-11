import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dean Brown',
      role: 'Founder, Triage Plus',
      content: 'Hugh is highly reliable and dedicated. He made sure every aspect of the project was perfect, and his support didn\'t stop after delivery.',
      avatar: '/deanbrown.webp'
    },
    {
      name: 'Jordan Stirling',
      role: 'Personal Trainer, Flex Fitness Christchurch',
      content: 'I wanted to attract more clients to my online personal training business. The website they developed for my brand, Jordan Trains, not only helped me gain new clients but also added a polished, professional touch to my brand.',
      avatar: '/jordanstirling.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            across New Zealand have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="h-8 w-8 text-cyan-200 mb-4" />

              <p className="text-gray-600 mb-6 leading-relaxed">
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
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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