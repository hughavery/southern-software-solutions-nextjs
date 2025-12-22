import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      slug: 'ai-search-taranaki-businesses',
      title: 'How Taranaki Businesses Can Get Found in AI Search Results (Google AI Mode, AI Overviews, and ChatGPT)',
      excerpt: 'Google\'s AI search is fundamentally changing how customers find local businesses. If your Taranaki business isn\'t optimized for AI search, you\'re about to become invisible to a huge portion of potential customers.',
      date: '2025-12-21',
      readTime: '8 min read',
      category: 'AI & SEO Strategy'
    },
    {
      slug: 'taranaki-custom-website',
      title: 'How a Custom Website Can Help Your Taranaki Business Beat the Competition and Win More Local Customers',
      excerpt: 'Taranaki businesses have a golden opportunity to dominate local search results—but the window is closing fast. Here\'s why your business needs to get online now, before your competitors do.',
      date: '2025-11-06',
      readTime: '7 min read',
      category: 'Local Business Growth'
    },
    {
      slug: 'ai-website-builders-2025',
      title: 'How AI Website Builders Like Bolt.new Are Changing Web Design in 2025 (And Why You Still Need a Developer)',
      excerpt: 'AI tools like Bolt.new and Lovable are disrupting Wix and Squarespace. But does that mean websites will get cheaper? Here\'s the honest truth from a Taranaki developer.',
      date: '2025-10-20',
      readTime: '6 min read',
      category: 'Industry Insights'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Insights on web design, development, and growing your business online
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden hover:shadow-xl"
              >
                <div className="p-6 md:p-8">
                  {/* Mobile-optimized metadata layout */}
                  <div className="mb-4 space-y-3">
                    {/* Category badge - full width on mobile */}
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Date and read time - stacked on mobile, side by side on desktop */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-NZ', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
