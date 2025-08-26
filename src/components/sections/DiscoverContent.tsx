import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Camera, 
  Heart,
  Share2,
  Filter,
  Search,
  TrendingUp,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function DiscoverContent() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'trending', label: 'Trending Now', icon: TrendingUp, count: 12 },
    { id: 'hidden-gems', label: 'Hidden Gems', icon: Compass, count: 8 },
    { id: 'local-favorites', label: 'Local Favorites', icon: Heart, count: 15 },
    { id: 'seasonal', label: 'Seasonal', icon: Clock, count: 6 },
    { id: 'exclusive', label: 'Exclusive Access', icon: Award, count: 4 }
  ];

  const discoveries = [
    {
      id: 1,
      title: 'Secret Rooftop Garden at DIFC',
      category: 'hidden-gems',
      description: 'A hidden oasis in the heart of Dubai\'s financial district, featuring rare plants, meditation spaces, and panoramic city views',
      location: 'Dubai International Financial Centre',
      duration: '1-2 hours',
      difficulty: 'Easy',
      rating: 4.9,
      reviews: 127,
      price: 'Free',
      tags: ['Nature', 'Views', 'Photography', 'Peaceful'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
      trending: false,
      exclusive: false,
      localFavorite: true,
      bestTime: 'Sunset',
      crowdLevel: 'Low',
      instagrammable: true
    },
    {
      id: 2,
      title: 'Underground Art Gallery in Al Fahidi',
      category: 'trending',
      description: 'Contemporary art space in historic Dubai showcasing emerging Middle Eastern artists in converted traditional buildings',
      location: 'Al Fahidi Historical Neighbourhood',
      duration: '2-3 hours',
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 89,
      price: 'AED 25',
      tags: ['Art', 'Culture', 'History', 'Local Artists'],
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
      trending: true,
      exclusive: false,
      localFavorite: true,
      bestTime: 'Afternoon',
      crowdLevel: 'Medium',
      instagrammable: true
    },
    {
      id: 3,
      title: 'Private Beach Club at Saadiyat Island',
      category: 'exclusive',
      description: 'Members-only beach club with pristine white sand, crystal waters, and world-class spa facilities',
      location: 'Saadiyat Island, Abu Dhabi',
      duration: 'Full Day',
      difficulty: 'Easy',
      rating: 4.8,
      reviews: 234,
      price: 'AED 500',
      tags: ['Beach', 'Luxury', 'Spa', 'Exclusive'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center',
      trending: true,
      exclusive: true,
      localFavorite: false,
      bestTime: 'Morning',
      crowdLevel: 'Low',
      instagrammable: true
    },
    {
      id: 4,
      title: 'Traditional Dhow Building Workshop',
      category: 'local-favorites',
      description: 'Learn the ancient art of dhow construction from master craftsmen in Dubai Creek\'s traditional boatyard',
      location: 'Dubai Creek',
      duration: '4 hours',
      difficulty: 'Moderate',
      rating: 4.6,
      reviews: 56,
      price: 'AED 150',
      tags: ['Traditional', 'Hands-on', 'Maritime', 'Cultural'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
      trending: false,
      exclusive: false,
      localFavorite: true,
      bestTime: 'Morning',
      crowdLevel: 'Low',
      instagrammable: false
    },
    {
      id: 5,
      title: 'Falconry Experience in the Desert',
      category: 'seasonal',
      description: 'Winter-only falconry experience with Bedouin masters, featuring hunting demonstrations and traditional desert lunch',
      location: 'Dubai Desert Conservation Reserve',
      duration: '6 hours',
      difficulty: 'Moderate',
      rating: 4.9,
      reviews: 178,
      price: 'AED 800',
      tags: ['Wildlife', 'Traditional', 'Desert', 'Seasonal'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      trending: true,
      exclusive: false,
      localFavorite: false,
      bestTime: 'Winter Only',
      crowdLevel: 'Low',
      instagrammable: true
    },
    {
      id: 6,
      title: 'Moonlight Kayaking in Mangroves',
      category: 'hidden-gems',
      description: 'Guided night kayaking through bioluminescent waters in Abu Dhabi\'s protected mangrove forests',
      location: 'Eastern Mangroves, Abu Dhabi',
      duration: '3 hours',
      difficulty: 'Moderate',
      rating: 4.8,
      reviews: 92,
      price: 'AED 200',
      tags: ['Nature', 'Adventure', 'Night', 'Unique'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      trending: false,
      exclusive: false,
      localFavorite: true,
      bestTime: 'New Moon',
      crowdLevel: 'Very Low',
      instagrammable: true
    }
  ];

  const filteredDiscoveries = discoveries
    .filter(item => activeCategory === 'trending' ? item.trending : 
                   activeCategory === 'hidden-gems' ? item.category === 'hidden-gems' :
                   activeCategory === 'local-favorites' ? item.localFavorite :
                   activeCategory === 'seasonal' ? item.category === 'seasonal' :
                   activeCategory === 'exclusive' ? item.exclusive :
                   true)
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Easy': 'bg-green-100 text-green-700',
      'Moderate': 'bg-yellow-100 text-yellow-700',
      'Hard': 'bg-red-100 text-red-700'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getCrowdLevelColor = (level: string) => {
    const colors = {
      'Very Low': 'bg-[#957D65]/20 text-[#957D65]',
      'Low': 'bg-[#957D65]/15 text-[#957D65]',
      'Medium': 'bg-[#222635]/15 text-[#222635]',
      'High': 'bg-[#222635]/20 text-[#222635]'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              Discover Experiences
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              Uncover hidden gems and unique experiences curated by local experts
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
              <Filter size={20} />
            </button>
            <button className="p-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
              <Globe size={20} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#222635]/40" />
          <input
            type="text"
            placeholder="Search experiences, locations, or activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/60 border border-[#957D65]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#957D65]/30 focus:border-[#957D65]/40 text-[#222635] placeholder-[#222635]/40 transition-all duration-200 backdrop-blur-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#957D65] text-[#E3DCD4] shadow-lg shadow-[#957D65]/20'
                    : 'bg-white/40 text-[#222635]/70 hover:bg-white/60 hover:text-[#222635] border border-[#957D65]/10'
                }`}
              >
                <Icon size={16} />
                <span>{category.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id 
                    ? 'bg-[#E3DCD4]/20 text-[#E3DCD4]' 
                    : 'bg-[#957D65]/10 text-[#957D65]'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Discoveries Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDiscoveries.map((discovery) => (
            <div
              key={discovery.id}
              className="group bg-white/60 hover:bg-white/80 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#957D65]/20 to-[#957D65]/10 overflow-hidden">
                <img 
                  src={discovery.image} 
                  alt={discovery.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {discovery.trending && (
                    <div className="flex items-center space-x-1 bg-[#957D65] px-2 py-1 rounded-full">
                      <TrendingUp size={10} className="text-[#E3DCD4]" />
                      <span className="text-xs font-bold text-[#E3DCD4]">TRENDING</span>
                    </div>
                  )}
                  {discovery.exclusive && (
                    <div className="flex items-center space-x-1 bg-[#222635] px-2 py-1 rounded-full">
                      <Award size={10} className="text-[#E3DCD4]" />
                      <span className="text-xs font-bold text-[#E3DCD4]">EXCLUSIVE</span>
                    </div>
                  )}
                  {discovery.localFavorite && (
                    <div className="flex items-center space-x-1 bg-[#957D65]/80 px-2 py-1 rounded-full">
                      <Heart size={10} className="text-[#E3DCD4]" />
                      <span className="text-xs font-bold text-[#E3DCD4]">LOCAL</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-all duration-200">
                    <Heart size={14} className="text-[#957D65]" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-all duration-200">
                    <Share2 size={14} className="text-[#222635]" />
                  </button>
                  {discovery.instagrammable && (
                    <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-all duration-200">
                      <Camera size={14} className="text-[#957D65]" />
                    </button>
                  )}
                </div>

                {/* Rating & Reviews */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star size={12} className="text-[#957D65] fill-current" />
                    <span className="text-xs font-medium text-[#222635]">{discovery.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <Users size={12} className="text-[#222635]" />
                    <span className="text-xs font-medium text-[#222635]">{discovery.reviews}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-[#222635]/80 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-[#E3DCD4]">{discovery.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-serif font-medium text-[#222635] group-hover:text-[#957D65] transition-colors line-clamp-2">
                    {discovery.title}
                  </h3>
                  <Compass size={18} className="text-[#957D65] mt-1 flex-shrink-0 ml-2" />
                </div>

                <p className="text-[#222635]/70 leading-relaxed mb-4 line-clamp-3">
                  {discovery.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-[#222635]/60">
                    <MapPin size={12} />
                    <span className="truncate">{discovery.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#222635]/60">
                    <Clock size={12} />
                    <span>{discovery.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(discovery.difficulty)}`}>
                      {discovery.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCrowdLevelColor(discovery.crowdLevel)}`}>
                      {discovery.crowdLevel} Crowd
                    </span>
                  </div>
                </div>

                {/* Best Time */}
                <div className="flex items-center space-x-2 mb-4 p-2 bg-[#957D65]/5 rounded-lg">
                  <Zap size={14} className="text-[#957D65]" />
                  <span className="text-sm text-[#957D65] font-medium">Best Time: {discovery.bestTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {discovery.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#957D65]/10 text-[#957D65] text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {discovery.tags.length > 3 && (
                    <span className="px-2 py-1 bg-[#222635]/5 text-[#222635]/60 text-xs rounded-full font-medium">
                      +{discovery.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[#957D65]/20 flex items-center justify-center space-x-2">
                  <Compass size={16} />
                  <span>Explore Experience</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDiscoveries.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <Compass size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">No experiences found</h3>
            <p className="text-[#222635]/40 max-w-md leading-relaxed">
              Try adjusting your search or explore different categories to discover amazing experiences
            </p>
          </div>
        )}
      </div>
    </div>
  );
}