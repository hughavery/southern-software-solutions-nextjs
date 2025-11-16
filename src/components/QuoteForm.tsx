'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  services: string[];
  timeframe: string;
  projectDetails: string;
  email: string;
}

const QuoteForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    services: [],
    timeframe: '',
    projectDetails: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const totalSteps = 6;

  // Sync step with URL
  useEffect(() => {
    const step = searchParams.get('step');
    if (step) {
      const stepNum = parseInt(step);
      if (stepNum >= 1 && stepNum <= totalSteps) {
        setCurrentStep(stepNum);
      }
    }
  }, [searchParams]);

  const updateStep = (step: number) => {
    setCurrentStep(step);
    router.push(`/quote?step=${step}`, { scroll: false });
  };

  const nextStep = async () => {
    if (currentStep === totalSteps) {
      // Submit the form
      await handleSubmit();
    } else if (currentStep < totalSteps) {
      updateStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success state - move to a thank you step
        updateStep(totalSteps + 1);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      updateStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    router.push('/quote');
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const services = [
    'Website Design',
    'Software App',
    'Branding',
    'Email Signature',
    'Digital Marketing',
    'SEO',
    'Maintenance',
    'Other'
  ];

  const timeframes = [
    'ASAP',
    '3 - 5 days',
    '1 week',
    '2 weeks',
    '3 weeks',
    '1 month',
    '1 - 3 months',
    '3 - 6 months',
    'No rush'
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim().length > 0;
      case 2:
        return true; // Company name is optional
      case 3:
        return formData.services.length > 0;
      case 4:
        return formData.timeframe;
      case 5:
        return formData.projectDetails.trim();
      case 6:
        // Strict email validation: must have @ and . and valid structure
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(formData.email.trim());
      default:
        return false;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8">
          <Image
            src="/logo.png"
            alt="Southern Software Solutions"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 md:px-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 px-6 md:px-8 pb-8">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Name */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Let's get started — what's your name?
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                  We'll use this to personalize your experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Company */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Awesome! Who will we be helping today?
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                  Tell us the name of your business or organization.
                </p>
                <input
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors w-full mb-12"
                />
              </div>
            )}

            {/* Step 3: Services */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  What do you need help with?
                </h1>
                <p className="text-gray-600 text-lg mb-8">Select everything that fits your goals — no limits.</p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${
                        formData.services.includes(service)
                          ? 'bg-cyan-400 border-cyan-400 text-white'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Timeframe */}
            {currentStep === 4 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  When would you like to get started?
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                  Your timeline helps us plan the right approach for you.
                </p>
                <div className="relative">
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors w-full appearance-none bg-transparent cursor-pointer mb-12"
                  >
                    <option value="">Choose your timeframe</option>
                    {timeframes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 5: Project Details */}
            {currentStep === 5 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Tell us about your vision.
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                  What are you hoping to build, improve, or accomplish? The more detail you share, the more accurate your quote will be.
                </p>
                <textarea
                  placeholder="Describe your goals, challenges, features, or anything important…"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  rows={6}
                  className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors w-full resize-none mb-12"
                />
              </div>
            )}

            {/* Step 6: Email */}
            {currentStep === 6 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Almost done! Where should we send your personalized quote?
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                  We'll never spam you — just your custom proposal.
                </p>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-lg px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-cyan-400 focus:outline-none transition-colors w-full mb-12"
                />
                {submitError && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again or email us directly at contact@southernsoftwaresolutions.tech
                  </div>
                )}
              </div>
            )}

            {/* Step 7: Success */}
            {currentStep === 7 && (
              <div className="animate-fadeIn text-center">
                <div className="mb-8">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/fist-bump.png"
                      alt="Success"
                      width={120}
                      height={120}
                      className="w-28 h-28 md:w-32 md:h-32"
                    />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Thank you, {formData.firstName}!
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Your quote request has been received. We'll send you a personalized quote within 24 hours.
                  </p>
                  <p className="text-lg text-gray-600 mb-12">
                    Check your email ({formData.email}) for a confirmation message.
                  </p>
                </div>
                <button
                  onClick={() => router.push('/#home')}
                  className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 transition-all duration-300"
                >
                  Got it
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep <= totalSteps && (
              <div className="flex items-center gap-6">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    BACK
                  </button>
                )}
                <button
                  onClick={nextStep}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
                >
                  {isSubmitting ? 'SUBMITTING...' : currentStep === totalSteps ? 'SUBMIT' : 'NEXT STEP'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
