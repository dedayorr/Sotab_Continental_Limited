"use client"
import { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Newspaper, Search } from 'lucide-react';

function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: <Newspaper className="w-4 h-4" /> },
    { name: 'Real Estate Tips', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Market Trends', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'News & Updates', icon: <Newspaper className="w-4 h-4" /> },
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'Real Estate Tips',
      title: '10 Essential Tips for First-Time Property Buyers in Nigeria',
      excerpt: 'Navigate the Nigerian real estate market with confidence. Learn about documentation, location selection, and smart investment strategies.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Nov 10, 2025',
      readTime: '5 min read',
      featured: true,
    },
    {
      id: 2,
      category: 'Market Trends',
      title: 'Lagos Real Estate Market: 2025 Trends and Predictions',
      excerpt: 'Discover the emerging hotspots, price trends, and investment opportunities shaping Lagos real estate landscape this year.',
      image: '/api/placeholder/800/500',
      author: 'Hon. Adesote Adebowale',
      date: 'Nov 8, 2025',
      readTime: '7 min read',
      featured: true,
    },
    {
      id: 3,
      category: 'News & Updates',
      title: 'Sotab Continental Launches New Sustainable Housing Project',
      excerpt: 'We are excited to announce our latest eco-friendly residential development featuring solar power and modern amenities.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Nov 5, 2025',
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 4,
      category: 'Real Estate Tips',
      title: 'How to Maximize ROI on Rental Properties',
      excerpt: 'Expert strategies for property owners looking to increase rental income and property value over time.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Nov 3, 2025',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 5,
      category: 'Market Trends',
      title: 'The Rise of Smart Homes in Nigerian Real Estate',
      excerpt: 'Technology integration is transforming how Nigerians buy, sell, and live in properties. Explore the smart home revolution.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Oct 28, 2025',
      readTime: '5 min read',
      featured: false,
    },
    {
      id: 6,
      category: 'News & Updates',
      title: 'Sotab Named Top Real Estate Company in West Africa',
      excerpt: 'Recognition for our commitment to innovation, sustainability, and community impact in the real estate sector.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Oct 25, 2025',
      readTime: '3 min read',
      featured: false,
    },
    {
      id: 7,
      category: 'Real Estate Tips',
      title: 'Understanding Property Documentation in Nigeria',
      excerpt: 'A comprehensive guide to C of O, land titles, and essential documents every property owner should have.',
      image: '/api/placeholder/800/500',
      author: 'Sotab Team',
      date: 'Oct 20, 2025',
      readTime: '8 min read',
      featured: false,
    },
    {
      id: 8,
      category: 'Market Trends',
      title: 'Commercial Real Estate: Opportunities in 2025',
      excerpt: 'Analyzing the commercial property market and identifying lucrative investment opportunities for businesses.',
      image: '/api/placeholder/800/500',
      author: 'Hon. Adesote Adebowale',
      date: 'Oct 18, 2025',
      readTime: '6 min read',
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative min-h-[450px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #282b53 0%, #1f3693 50%, #771933 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Stay informed with the latest real estate tips, market trends, and company news
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.name
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={
                  activeCategory === category.name
                    ? { backgroundColor: '#771933' }
                    : {}
                }
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#282b53' }}>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gray-200">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, #282b53 0%, #771933 100%)',
                        opacity: 0.9,
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-6">
                        <div className="text-6xl mb-4">
                          {post.category === 'Real Estate Tips' && '💡'}
                          {post.category === 'Market Trends' && '📈'}
                          {post.category === 'News & Updates' && '📰'}
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: '#771933' }}
                    >
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                        style={{ backgroundColor: '#282b53' }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#282b53' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button
                        className="flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                        style={{ color: '#771933' }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#282b53' }}>
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gray-200">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: post.id % 2 === 0
                          ? 'linear-gradient(135deg, #282b53 0%, #1f3693 100%)'
                          : 'linear-gradient(135deg, #771933 0%, #282b53 100%)',
                        opacity: 0.85,
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl">
                        {post.category === 'Real Estate Tips' && '💡'}
                        {post.category === 'Market Trends' && '📈'}
                        {post.category === 'News & Updates' && '📰'}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-white font-semibold"
                        style={{ backgroundColor: '#771933' }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#282b53' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>{post.readTime}</span>
                      </div>
                      <button
                        className="flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                        style={{ color: '#771933' }}
                      >
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#282b53' }}>
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #282b53 0%, #771933 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Sotab Insights
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Subscribe to our newsletter for exclusive real estate tips, market analysis, and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
            />
            <button
              className="px-8 py-4 bg-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              style={{ color: '#771933' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;