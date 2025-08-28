import { useState } from 'react';
import {
  Star,
  MapPin,
  Clock,
  Filter,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Sparkles,
  Eye,
  ChevronRight,
  Search
} from 'lucide-react';
import miftahKeyLogo from '../../assets/miftah_key_logo.png';

export function RecommendationsContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'Curated Selection', count: 24 },
    { id: 'dining', label: 'Exclusive Dining', count: 8 },
    { id: 'experiences', label: 'Premium Experiences', count: 6 },
    { id: 'shopping', label: 'Luxury Shopping', count: 4 },
    { id: 'culture', label: 'Cultural Immersion', count: 6 }
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Nobu Dubai',
      category: 'dining',
      description: 'World-renowned Japanese cuisine with stunning views of the Palm Jumeirah and innovative dishes by Chef Nobu',
      rating: 4.8,
      location: 'Atlantis The Palm',
      estimatedTime: '2-3 hours',
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center',
      tags: ['Fine Dining', 'Japanese', 'Ocean View', 'Celebrity Chef'],
      aiReason: 'Based on your preference for luxury dining and Japanese cuisine, plus your recent searches for oceanfront restaurants',
      confidence: 95,
      trending: true,
      saved: false,
    },
    {
      id: 2,
      title: 'Desert Safari with Falconry',
      category: 'experiences',
      description: 'Authentic Bedouin experience with traditional falconry demonstration, camel riding, and luxury desert camp dining',
      rating: 4.9,
      location: 'Dubai Desert Conservation Reserve',
      estimatedTime: '6 hours',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop&crop=center',
      tags: ['Adventure', 'Culture', 'Wildlife', 'Authentic'],
      aiReason: 'Perfect match for your interest in authentic cultural experiences and adventure activities',
      confidence: 92,
      trending: false,
      saved: true
    },
    {
      id: 3,
      title: 'Gold Souk Private Tour',
      category: 'shopping',
      description: 'Exclusive guided tour of Dubai\'s famous gold market with expert insights, private shopping assistance, and authentication services',
      rating: 4.7,
      location: 'Deira Gold Souk',
      estimatedTime: '3 hours',
      price: '$',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      tags: ['Shopping', 'Culture', 'History', 'Luxury'],
      aiReason: 'Recommended based on your shopping preferences and interest in cultural heritage sites',
      confidence: 88,
      trending: false,
      saved: false
    },
    {
      id: 4,
      title: 'Louvre Abu Dhabi VIP Experience',
      category: 'culture',
      description: 'Private curator-led tour of the architectural marvel with exclusive access to special exhibitions and art collections',
      rating: 4.9,
      location: 'Saadiyat Island, Abu Dhabi',
      estimatedTime: '4 hours',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center',
      tags: ['Art', 'Architecture', 'VIP', 'Educational'],
      aiReason: 'Aligns with your appreciation for art, architecture, and exclusive cultural experiences',
      confidence: 94,
      trending: true,
      saved: true
    },
    {
      id: 5,
      title: 'Burj Khalifa Sky Lounge',
      category: 'experiences',
      description: 'Exclusive access to the world\'s highest lounge with panoramic city views, premium cocktails, and sunset experiences',
      rating: 4.6,
      location: 'Downtown Dubai',
      estimatedTime: '2 hours',
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&crop=center',
      tags: ['Views', 'Luxury', 'Cocktails', 'Iconic'],
      aiReason: 'Matches your preference for luxury experiences and iconic Dubai landmarks',
      confidence: 90,
      trending: true,
      saved: false
    },
    {
      id: 6,
      title: 'Spice Souk Culinary Journey',
      category: 'culture',
      description: 'Immersive culinary tour through traditional spice markets with cooking class and authentic Emirati meal preparation',
      rating: 4.8,
      location: 'Old Dubai',
      estimatedTime: '4 hours',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center',
      tags: ['Culinary', 'Traditional', 'Hands-on', 'Authentic'],
      aiReason: 'Perfect for your interest in authentic cultural experiences and culinary adventures',
      confidence: 87,
      trending: false,
      saved: false
    }
  ];

  const filteredRecommendations = activeFilter === 'all'
    ? recommendations
    : recommendations.filter(rec => rec.category === activeFilter);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-[#957D65] bg-[#957D65]/10';
    if (confidence >= 80) return 'text-[#957D65]/80 bg-[#957D65]/5';
    return 'text-[#222635]/60 bg-[#222635]/5';
  };

  return (
    <div className="h-full flex flex-col bg-[#222635]">
      {/* Luxury Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-[#957D65]/20 bg-[#222635]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Miftah Recommendations
            </h1>
            <p className="text-base text-[#E3DCD4]/70 leading-relaxed font-light"
              style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              Personally selected experiences tailored to your refined preferences
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20">
              <Filter size={20} />
            </button>
            <div className="flex bg-[#E3DCD4]/5 rounded-xl p-1 border border-[#957D65]/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-400 ${viewMode === 'grid' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                  }`}
                style={{ fontFamily: "'Avenir Next', sans-serif" }}
              >
                Gallery
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-400 ${viewMode === 'list' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                  }`}
                style={{ fontFamily: "'Avenir Next', sans-serif" }}
              >
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#957D65] z-10" size={18} style={{ opacity: 1 }} />
          <input
            type="text"
            placeholder="Discover exclusive experiences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 rounded-2xl text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:ring-2 focus:ring-[#957D65]/40 focus:border-[#957D65]/50 transition-all duration-400 backdrop-blur-sm text-sm"
            style={{ fontFamily: "'Avenir Next', sans-serif" }}
          />
        </div>

        {/* Premium Filters */}
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex-shrink-0 flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-400 hover:scale-102 ${activeFilter === filter.id
                ? 'bg-[#957D65] text-[#E3DCD4] shadow-lg shadow-[#957D65]/30'
                : 'bg-[#E3DCD4]/10 text-[#E3DCD4]/70 hover:bg-[#E3DCD4]/20 hover:text-[#E3DCD4] border border-[#957D65]/20'
                }`}
              style={{
                fontFamily: "'Avenir Next', sans-serif",
                letterSpacing: '0.5px',
                textTransform: 'uppercase' as const,
                fontSize: '12px'
              }}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${activeFilter === filter.id
                ? 'bg-[#E3DCD4]/20 text-[#E3DCD4]'
                : 'bg-[#957D65]/20 text-[#957D65]'
                }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Luxury Recommendations Gallery */}
      <div className="flex-1 overflow-y-auto bg-[#222635]">
        <div className={`px-4 sm:px-6 lg:px-8 py-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8' : 'space-y-6'}`}>
          {filteredRecommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-3xl border-none transition-all duration-500 hover:scale-[1.01] overflow-hidden shadow-2xl hover:shadow-3xl backdrop-blur-sm ${viewMode === 'list' ? 'flex items-center space-x-8 p-8' : ''
                }`}
              style={{
                boxShadow: '0px 12px 32px rgba(34, 38, 53, 0.12)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0px 16px 40px rgba(34, 38, 53, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0px 12px 32px rgba(34, 38, 53, 0.12)';
              }}
            >
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-[#957D65]/20 to-[#957D65]/10 overflow-hidden ${viewMode === 'list' ? 'w-32 h-24 rounded-xl flex-shrink-0' : 'h-48'
                }`}>
                <img
                  src={recommendation.image}
                  alt={recommendation.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  {recommendation.trending && (
                    <div className="flex items-center space-x-1 bg-[#957D65] px-2 py-1 rounded-full">
                      <TrendingUp size={10} className="text-[#E3DCD4]" />
                      <span className="text-xs font-bold text-[#E3DCD4]">TRENDING</span>
                    </div>
                  )}
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(recommendation.confidence)}`}>
                    {recommendation.confidence}% MATCH
                  </div>
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className={`p-2 rounded-full hover:scale-110 transition-all duration-200 ${recommendation.saved ? 'bg-[#957D65] text-[#E3DCD4]' : 'bg-white/90 text-[#957D65]'
                    }`}>
                    <Heart size={14} className={recommendation.saved ? 'fill-current' : ''} />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-all duration-200">
                    <Share2 size={14} className="text-[#222635]" />
                  </button>
                </div>

                {/* Rating & Price */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star size={12} className="text-[#957D65] fill-current" />
                    <span className="text-xs font-medium text-[#222635]">{recommendation.rating}</span>
                  </div>
                  <div className="bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-[#222635]">{recommendation.price}</span>
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className={viewMode === 'list' ? 'flex-1 pl-4' : 'p-4'}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-serif font-semibold text-[#222635] group-hover:text-[#957D65] transition-colors leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                    {recommendation.title}
                  </h3>
                  <img
                    src={miftahKeyLogo}
                    alt="Miftah Key Logo"
                    className="w-6 h-6 object-contain rounded-sm mt-1 flex-shrink-0 ml-2 bg-transparent mix-blend-multiply"
                  />
                </div>

                <p className="text-sm text-[#222635]/70 leading-relaxed mb-3 line-clamp-2">
                  {recommendation.description}
                </p>

                {/* Details */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center space-x-2 text-xs text-[#222635]/60">
                    <MapPin size={12} />
                    <span>{recommendation.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#222635]/60">
                    <Clock size={12} />
                    <span>{recommendation.estimatedTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {recommendation.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#957D65]/10 text-[#957D65] text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {recommendation.tags.length > 3 && (
                    <span className="px-2 py-1 bg-[#222635]/5 text-[#222635]/60 text-xs rounded-full font-medium">
                      +{recommendation.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* AI Reason */}
                <div className="p-2 bg-gradient-to-r from-[#957D65]/5 to-[#957D65]/10 rounded-xl border border-[#957D65]/10 mb-3">
                  <div className="flex items-start space-x-2">
                    <Sparkles size={12} className="text-[#957D65] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#222635]/70 leading-relaxed">
                        <span className="font-medium text-[#957D65]">AI INSIGHT:</span> {recommendation.aiReason}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="flex-1 py-2 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[#957D65]/20 flex items-center justify-center space-x-2 text-sm">
                    <span>EXPLORE EXPERIENCE</span>
                    <ChevronRight size={14} />
                  </button>
                  <button className="p-2 bg-[#222635]/5 text-[#222635] rounded-xl hover:bg-[#222635]/10 transition-all duration-200 hover:scale-105">
                    <Bookmark size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecommendations.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-4 sm:p-6 lg:p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <img
                src={miftahKeyLogo}
                alt="Miftah Key Logo"
                className="w-10 h-10 object-contain rounded-sm bg-transparent mix-blend-multiply"
              />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#E3DCD4]/60 mb-3">No Recommendations Found</h3>
            <p className="text-[#E3DCD4]/40 max-w-md leading-relaxed">
              Try adjusting your preferences to discover curated experiences
            </p>
          </div>
        )}
      </div>
    </div>
  );
}