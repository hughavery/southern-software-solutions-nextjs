import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's make something great together",
  subtitle = "Hop to us for a free proposal today",
  buttonText = "LET'S DO THIS",
  buttonLink = "/quote"
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-black rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center p-6 md:p-8 lg:p-10">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 md:w-80 md:h-80">
                <Image
                  src="/quote.png"
                  alt="Get a quote"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                {subtitle}
              </p>
              <Link
                href={buttonLink}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 group"
              >
                {buttonText}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
