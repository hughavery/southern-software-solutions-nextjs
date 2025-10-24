import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  Industry Insights
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  January 20, 2025
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  6 min read
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How AI Website Builders Like Bolt.new Are Changing Web Design in 2025 (And Why You Still Need a Developer)
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                AI tools like Bolt.new and Lovable are disrupting Wix and Squarespace. But does that mean websites will get cheaper? Here's the honest truth from a Christchurch developer.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The AI Website Revolution Is Here</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you've been following tech news lately, you've probably heard about AI website builders like <strong>Bolt.new</strong>, <strong>Lovable</strong>, and <strong>V0.dev</strong>. These tools let you describe what you want in plain English, and boom—you get a working website in minutes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                As a web developer in Christchurch, I get asked constantly: <em>"Does this mean I can skip hiring you and just use AI?"</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The short answer? <strong>Sort of, but not really.</strong>
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What AI Website Builders Actually Do Well</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let's be honest—these tools are genuinely impressive. Here's what they're great at:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Speed:</strong>
                      <span className="text-gray-700"> Generate a basic website in under 10 minutes</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">No Wix Fees:</strong>
                      <span className="text-gray-700"> Unlike Wix ($27-49/month), you own the code</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Modern Tech:</strong>
                      <span className="text-gray-700"> Uses actual code (React, Tailwind) not outdated builders</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Great Starting Point:</strong>
                      <span className="text-gray-700"> Perfect for prototyping ideas quickly</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                So yes, AI tools are a <strong>massive improvement over Wix/Squarespace</strong>. You avoid monthly fees, platform lock-in, and slow loading times.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Where AI Still Falls Short (And Why I'm Not Worried About My Job)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Here's the reality: <strong>AI can build you a website, but it can't build you a business.</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                These tools handle about 70% of the process brilliantly—but that last 30% is where the value is. Here's what AI struggles with:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Business Strategy:</strong>
                      <span className="text-gray-700"> AI doesn't understand YOUR customers or what makes them buy</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Complex Integrations:</strong>
                      <span className="text-gray-700"> Need Xero, Stripe, or a booking system? Good luck debugging that</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">SEO & Performance:</strong>
                      <span className="text-gray-700"> AI sites often have bloated code and poor optimization</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Maintenance:</strong>
                      <span className="text-gray-700"> When something breaks, who fixes it? Not the AI</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Brand Identity:</strong>
                      <span className="text-gray-700"> AI makes generic sites. You need something that stands out</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">So, Will Website Costs Go Down in 2025?</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Yes and no.</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Here's what's actually changing:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The New Pricing Reality</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Basic Websites (5-10 pages, simple design):</p>
                    <p className="text-gray-700">
                      <strong>Before:</strong> $3,000-5,000 <br />
                      <strong>Now with AI tools:</strong> $1,500-3,000 <br />
                      <span className="text-sm text-gray-600">AI speeds up layout/design, but developer still needed for polish, SEO, deployment</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Business Sites (10+ pages, custom features):</p>
                    <p className="text-gray-700">
                      <strong>Before:</strong> $5,000-10,000 <br />
                      <strong>Now with AI tools:</strong> $4,000-8,000 <br />
                      <span className="text-sm text-gray-600">AI helps with boilerplate code, but custom functionality still takes expertise</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Complex Applications (e-commerce, portals, dashboards):</p>
                    <p className="text-gray-700">
                      <strong>Price:</strong> Still $10,000+ <br />
                      <span className="text-sm text-gray-600">AI barely makes a dent here—these need architecture, security, and ongoing support</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bottom line:</strong> AI makes the process <em>faster</em>, which means <em>slightly cheaper</em> for basic sites. But it doesn't eliminate the need for a developer—it just makes good developers more efficient.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How I Actually Use AI in My Work</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Full transparency: I use AI tools every day. Here's my workflow:
              </p>

              <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
                <li className="leading-relaxed"><strong>Client Discovery:</strong> Understand their business, goals, and customers (AI can't do this)</li>
                <li className="leading-relaxed"><strong>AI Prototyping:</strong> Use Bolt.new to generate initial layouts and components fast</li>
                <li className="leading-relaxed"><strong>Refinement:</strong> Customize the design, optimize performance, add brand identity</li>
                <li className="leading-relaxed"><strong>Integration:</strong> Connect payment systems, booking tools, email services, etc.</li>
                <li className="leading-relaxed"><strong>SEO & Speed:</strong> Optimize for Google, add analytics, structured data</li>
                <li className="leading-relaxed"><strong>Deployment & Support:</strong> Launch on proper hosting, provide ongoing maintenance</li>
              </ol>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>AI handles step 2. I handle everything else.</strong>
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Should Your Business Use AI Tools or Hire a Developer?</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Here's my honest recommendation:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <p className="font-semibold text-gray-900 mb-4">Use AI tools if:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>You just need a simple landing page</li>
                  <li>You're comfortable troubleshooting code</li>
                  <li>You have time to learn and iterate</li>
                  <li>Budget is extremely tight (under $1,000)</li>
                </ul>

                <p className="font-semibold text-gray-900 mb-4">Hire a developer (or developer using AI) if:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Your website is core to your business revenue</li>
                  <li>You need integrations (payments, bookings, CRM)</li>
                  <li>SEO and Google rankings matter to you</li>
                  <li>You want something unique that stands out</li>
                  <li>You don't have time to DIY and debug issues</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Verdict: AI Is a Tool, Not a Replacement</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                AI website builders like Bolt.new are <strong>game-changers</strong>—but they're tools for developers, not replacements for them.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Think of it like this: power tools made carpentry faster and cheaper. But you still hire a carpenter to build your house—you don't buy a nail gun and DIY it.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                AI makes web development more accessible and <em>slightly</em> cheaper. But if you want a website that actually grows your business? You still need someone who understands marketing, SEO, user experience, and technical implementation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Good news for Christchurch businesses:</strong> developers who use AI can now deliver better sites, faster, at lower cost than traditional agencies. You get the best of both worlds.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Want a Website That Actually Works for Your Business?</h3>
                <p className="text-gray-700 mb-6">
                  I use AI tools to speed up development—but I bring the strategy, SEO, and custom integrations that AI can't. Get the best of both worlds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/website-design"
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all font-semibold"
                  >
                    View Packages
                  </Link>
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 mt-12 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/hughavery.jpg"
                      alt="Hugh Avery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Hugh Avery</p>
                    <p className="text-gray-600 text-sm">Founder, Southern Software Solutions</p>
                    <p className="text-gray-600 text-sm mt-2">
                      Christchurch-based web developer helping local businesses grow online. Combining modern AI tools with
                      proven development practices to build websites that actually convert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
