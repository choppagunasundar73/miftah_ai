import React, { useState } from 'react';
import { 
  Lightbulb, 
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
  ChevronRight
} from 'lucide-react';

export function RecommendationsContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    { id: 'all', label: 'All Recommendations', count: 24 },
    { id: 'dining', label: 'Dining', count: 8 },
    { id: 'experiences', label: 'Experiences', count: 6 },
    { id: 'shopping', label: 'Shopping', count: 4 },
    { id: 'culture', label: 'Culture', count: 6 }
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
      views: 1240
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
      saved: true,
      views: 856
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
      saved: false,
      views: 642
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
      saved: true,
      views: 1120
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
      saved: false,
      views: 2100
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
      saved: false,
      views: 734
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
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              AI Recommendations
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              Personalized suggestions curated by artificial intelligence based on your preferences
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
              <Filter size={20} />
            </button>
            <div className="flex bg-white/40 rounded-lg p-1 border border-[#957D65]/10">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#222635]/60 hover:text-[#222635]'
                }`}
              >
                Grid
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#222635]/60 hover:text-[#222635]'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-[#957D65] text-[#E3DCD4] shadow-lg shadow-[#957D65]/20'
                  : 'bg-white/40 text-[#222635]/70 hover:bg-white/60 hover:text-[#222635] border border-[#957D65]/10'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-[#E3DCD4]/20 text-[#E3DCD4]' 
                  : 'bg-[#957D65]/10 text-[#957D65]'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Grid/List */}
      <div className="flex-1 overflow-y-auto">
        <div className={`p-6 ${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filteredRecommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`group bg-white/60 hover:bg-white/80 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-sm hover:shadow-lg backdrop-blur-sm ${
                viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-[#957D65]/20 to-[#957D65]/10 overflow-hidden ${
                viewMode === 'list' ? 'w-32 h-24 rounded-xl flex-shrink-0' : 'h-48'
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
                    {recommendation.confidence}% Match
                  </div>
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className={`p-2 rounded-full hover:scale-110 transition-all duration-200 ${
                    recommendation.saved ? 'bg-[#957D65] text-[#E3DCD4]' : 'bg-white/90 text-[#957D65]'
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

                {/* Views */}
                <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-black/20 px-2 py-1 rounded-full">
                  <Eye size={10} className="text-white" />
                  <span className="text-xs text-white">{recommendation.views}</span>
                </div>
              </div>

              {/* Content */}
              <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-serif font-medium text-[#222635] group-hover:text-[#957D65] transition-colors">
                    {recommendation.title}
                  </h3>
                  <Lightbulb size={18} className="text-[#957D65] mt-1 flex-shrink-0 ml-2" />
                </div>

                <p className="text-[#222635]/70 leading-relaxed mb-4 line-clamp-2">
                  {recommendation.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-[#222635]/60">
                    <MapPin size={14} />
                    <span>{recommendation.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-[#222635]/60">
                    <Clock size={14} />
                    <span>{recommendation.estimatedTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="p-3 bg-gradient-to-r from-[#957D65]/5 to-[#957D65]/10 rounded-xl border border-[#957D65]/10 mb-4">
                  <div className="flex items-start space-x-2">
                    <Sparkles size={14} className="text-[#957D65] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#222635]/70 leading-relaxed">
                        <span className="font-medium text-[#957D65]">AI Insight:</span> {recommendation.aiReason}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="flex-1 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[#957D65]/20 flex items-center justify-center space-x-2">
                    <span>Learn More & Book</span>
                    <ChevronRight size={16} />
                  </button>
                  <button className="p-3 bg-[#222635]/5 text-[#222635] rounded-xl hover:bg-[#222635]/10 transition-all duration-200 hover:scale-105">
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecommendations.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">No recommendations found</h3>
            <p className="text-[#222635]/40 max-w-md leading-relaxed">
              Try selecting a different category or check back later for new AI-powered suggestions
            </p>
          </div>
        )}
      </div>
    </div>
  );
}