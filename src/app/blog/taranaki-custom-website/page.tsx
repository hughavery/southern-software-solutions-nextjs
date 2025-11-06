import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

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
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  Local Business Growth
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  November 6, 2025
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  7 min read
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How a Custom Website Can Help Your Taranaki Business Beat the Competition and Win More Local Customers
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Taranaki businesses have a golden opportunity to dominate local search results—but the window is closing fast. Here's why your business needs to get online now, before your competitors do.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Taranaki Advantage: Small Population, Big Opportunity</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let's be honest—if you're running a business in New Plymouth, Stratford, or Hawera, you're not competing with hundreds of businesses like they are in Auckland or Wellington. <strong>That's actually your biggest advantage.</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                When someone searches Google for "electrician near me," "plumber New Plymouth," or "web design services Taranaki," there are only a handful of businesses showing up. In smaller populated areas like Taranaki, it's still <strong>incredibly achievable</strong> to reach the top of Google search results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                But here's the catch: <strong>the longer you wait, the harder it gets.</strong>
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">The First-Mover Advantage</p>
                    <p className="text-gray-700">
                      In Taranaki, the businesses that establish their online presence <em>first</em> gain massive momentum. Google rewards websites that have been around longer, have more content, and have built up local authority. Once your competitors claim those top spots, it becomes exponentially harder and more expensive to overtake them.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Your Taranaki Business Can't Afford to Wait</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Right now, if you search for most local services in Taranaki, you'll notice something: <strong>a lot of businesses still don't have proper websites.</strong> They're relying on Facebook pages, outdated sites, or just word-of-mouth.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This won't last forever.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every month you delay getting a professional website, you're giving your competitors the chance to:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Steal Your Google Rankings:</strong>
                      <span className="text-gray-700"> Once they rank above you, it takes months of effort to catch up</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Build Their Client Base First:</strong>
                      <span className="text-gray-700"> They're capturing customers who <em>should</em> be finding you</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Establish Local Authority:</strong>
                      <span className="text-gray-700"> Google trusts older, established websites more than new ones</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Control the Narrative:</strong>
                      <span className="text-gray-700"> They shape how customers perceive businesses in your industry</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The reality:</strong> In 2025, if your business isn't on the first page of Google for local searches, you're invisible. And in Taranaki, getting there is still achievable—if you act now.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How a Custom Website Actually Wins You Customers in Taranaki</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let's get practical. Here's exactly how a well-built website helps your Taranaki business succeed:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Local SEO Domination:</strong>
                      <p className="text-gray-700">Properly optimized websites show up when people search "best [your service] in Taranaki" or "[your service] near me." With the right keywords like "New Plymouth," "Stratford," and "Hawera," you capture customers actively searching for what you offer.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">24/7 Lead Generation:</strong>
                      <p className="text-gray-700">Your website works while you sleep. Potential customers can learn about your services, see your work, and contact you any time—even at 11pm on a Sunday.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Professional Credibility:</strong>
                      <p className="text-gray-700">In 2025, not having a website makes your business look outdated or untrustworthy. A modern, professional site tells customers you're serious, established, and reliable.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Control Your Brand Story:</strong>
                      <p className="text-gray-700">Facebook pages are great, but they're limited. A custom website lets you showcase your unique value, tell your story, and stand out from competitors in exactly the way you want.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Convert Browsers into Buyers:</strong>
                      <p className="text-gray-700">A well-designed website guides visitors toward taking action—whether that's calling you, booking an appointment, or making a purchase. Strategic placement of calls-to-action makes the difference between a visitor and a customer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Example: How Taranaki Businesses Are Winning with Custom Websites</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Let's say you run a personal training business in New Plymouth. Right now, when someone searches <strong>"personal trainer New Plymouth"</strong> or <strong>"fitness coach Taranaki,"</strong> they're probably finding:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Gyms with basic websites</li>
                <li>Trainers with just Facebook pages</li>
                <li>Outdated listings on Yellow Pages</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Here's your opportunity:</strong> A custom website optimized for local Taranaki searches, with testimonials from happy clients, before/after photos, clear pricing, and an easy booking system. You'd instantly stand out as the most professional, trustworthy option.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Within 3-6 months, you could be ranking #1 in Google for local searches—capturing leads that would otherwise go to competitors (or worse, to no one).
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">The Compound Effect</p>
                    <p className="text-gray-700">
                      Once your website starts ranking well and bringing in customers, Google rewards you <em>more</em>. More visitors = higher rankings = more customers. It's a snowball effect. But it only works if you start now—before your competitors do.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Makes a Custom Website Better Than a DIY Solution?</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                You might be thinking: <em>"Can't I just use Wix or Squarespace?"</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Sure, you <em>can</em>. But here's what you'll miss out on:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">DIY Website Builders (Wix, Squarespace):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Limited SEO capabilities (harder to rank on Google)</li>
                      <li>Slow loading speeds (Google penalizes slow sites)</li>
                      <li>Generic templates (looks like everyone else)</li>
                      <li>Ongoing monthly fees ($27-49/month forever)</li>
                      <li>Locked into their platform (can't migrate easily)</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-900">Custom Professional Website:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Fully optimized for Taranaki local SEO</li>
                      <li>Lightning-fast performance (better Google rankings)</li>
                      <li>Unique design that represents YOUR brand</li>
                      <li>One-time cost, you own it outright</li>
                      <li>Integrations with booking systems, payment processors, CRM tools</li>
                      <li>Built by someone who understands digital marketing and conversion optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bottom line:</strong> If you're serious about growing your business online and beating competitors in Taranaki, a custom website is an investment that pays for itself many times over.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Time to Act Is Now</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Here's the truth: <strong>Taranaki is still a wide-open opportunity for local businesses to dominate online.</strong> But that window is closing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every week that goes by, more businesses are waking up to the importance of a strong online presence. The ones who act <em>now</em> will lock in the top Google rankings, build loyal customer bases, and establish themselves as the go-to businesses in their industries.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The ones who wait? They'll be fighting an uphill battle, spending more on advertising, and always playing catch-up.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
                <p className="font-bold text-gray-900 mb-3">Don't Let Your Competitors Win By Default</p>
                <p className="text-gray-700">
                  The businesses that succeed in Taranaki won't be the ones with the biggest budgets or the most employees. They'll be the ones who recognized the opportunity early, invested in a professional online presence, and claimed their spot at the top of Google search results while it was still achievable.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you're running a business in New Plymouth, Stratford, Hawera, or anywhere in Taranaki, now is the time to get serious about your website. It's not just about having an online presence—it's about <strong>winning customers</strong>, <strong>beating your competition</strong>, and <strong>securing your position</strong> as a leader in your industry.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The opportunity is here. The question is: will you take it?</strong>
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Beat Your Taranaki Competition?</h3>
                <p className="text-gray-700 mb-6">
                  I build custom websites designed to help Taranaki businesses dominate local search results and win more customers. Let's create a website that actually grows your business—before your competitors do.
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
                    View Website Packages
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
                      Web developer specializing in helping Taranaki and South Island businesses dominate their local markets online. Expert in local SEO, custom web development, and conversion-focused design.
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
