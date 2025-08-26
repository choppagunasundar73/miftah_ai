import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  MessageCircle, 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Star,
  UserPlus,
  Filter,
  TrendingUp,
  Globe,
  Camera,
  MoreHorizontal
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CommunityContent() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Posts', count: 48 },
    { id: 'trending', label: 'Trending', count: 12 },
    { id: 'local', label: 'Local Tips', count: 18 },
    { id: 'experiences', label: 'Experiences', count: 15 },
    { id: 'events', label: 'Events', count: 8 }
  ];

  const communityPosts = [
    {
      id: 1,
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        location: 'Dubai Marina',
        verified: true
      },
      content: 'Just discovered this hidden gem in Old Dubai! The traditional coffee house serves the most authentic Arabic coffee with dates. Perfect spot for experiencing local culture.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      category: 'local',
      trending: true,
      tags: ['Coffee', 'Culture', 'Hidden Gem', 'Old Dubai']
    },
    {
      id: 2,
      author: {
        name: 'Ahmed Al-Rashid',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        location: 'Downtown Dubai',
        verified: false
      },
      content: 'Sunset dinner at Atmosphere was absolutely magical! The view from Burj Khalifa level 122 is unmatched. Highly recommend the tasting menu - every course was perfection.',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
      timestamp: '5 hours ago',
      likes: 67,
      comments: 15,
      shares: 12,
      category: 'experiences',
      trending: true,
      tags: ['Fine Dining', 'Views', 'Burj Khalifa', 'Luxury']
    },
    {
      id: 3,
      author: {
        name: 'Maria Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        location: 'Jumeirah Beach',
        verified: true
      },
      content: 'Beach yoga session this morning was incredible! The instructor was amazing and the sunrise over the Arabian Gulf was breathtaking. Perfect way to start the day in Dubai.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      timestamp: '1 day ago',
      likes: 43,
      comments: 12,
      shares: 7,
      category: 'experiences',
      trending: false,
      tags: ['Yoga', 'Beach', 'Wellness', 'Sunrise']
    },
    {
      id: 4,
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        location: 'Dubai Mall',
        verified: false
      },
      content: 'Pro tip: Visit the Gold Souk early morning for the best deals and fewer crowds. The shopkeepers are more willing to negotiate and you can really take your time exploring.',
      timestamp: '2 days ago',
      likes: 31,
      comments: 9,
      shares: 18,
      category: 'local',
      trending: false,
      tags: ['Shopping', 'Gold Souk', 'Tips', 'Bargaining']
    },
    {
      id: 5,
      author: {
        name: 'Fatima Al-Zahra',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        location: 'Business Bay',
        verified: true
      },
      content: 'Excited to announce our monthly photography meetup! This Saturday at Dubai Fountain area. Bring your cameras and let\'s capture the magic of Dubai together. All skill levels welcome!',
      timestamp: '3 days ago',
      likes: 52,
      comments: 23,
      shares: 15,
      category: 'events',
      trending: true,
      tags: ['Photography', 'Meetup', 'Dubai Fountain', 'Community']
    }
  ];

  const filteredPosts = communityPosts
    .filter(post => activeFilter === 'all' || post.category === activeFilter || (activeFilter === 'trending' && post.trending))
    .filter(post =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const getCategoryColor = (category: string) => {
    const colors = {
      local: 'bg-[#957D65]/20 text-[#957D65]',
      experiences: 'bg-[#222635]/20 text-[#222635]',
      events: 'bg-[#957D65]/15 text-[#957D65]',
      trending: 'bg-gradient-to-r from-[#957D65] to-[#957D65]/80 text-[#E3DCD4]'
    };
    return colors[category as keyof typeof colors] || 'bg-[#957D65]/10 text-[#957D65]';
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              Community
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              Connect with fellow travelers and discover local insights
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
              <Filter size={20} />
            </button>
            <button className="group p-4 bg-gradient-to-r from-[#957D65] to-[#957D65]/90 text-[#E3DCD4] rounded-2xl hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20 hover:shadow-xl">
              <Plus size={24} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#957D65]/60" size={16} />
          <input
            type="text"
            placeholder="Search community posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/50 border border-[#957D65]/20 rounded-xl text-[#222635] placeholder-[#957D65]/60 focus:outline-none focus:ring-2 focus:ring-[#957D65]/30 focus:border-[#957D65]/40 transition-all duration-200 backdrop-blur-sm"
          />
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

      {/* Community Posts */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white/60 hover:bg-white/80 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.01] overflow-hidden shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#957D65]/20"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-[#222635]">{post.author.name}</h3>
                        {post.author.verified && (
                          <div className="w-4 h-4 bg-[#957D65] rounded-full flex items-center justify-center">
                            <span className="text-[#E3DCD4] text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#222635]/60">
                        <MapPin size={12} />
                        <span>{post.author.location}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.trending && (
                      <div className="flex items-center space-x-1 bg-[#957D65] px-2 py-1 rounded-full">
                        <TrendingUp size={10} className="text-[#E3DCD4]" />
                        <span className="text-xs font-bold text-[#E3DCD4]">Trending</span>
                      </div>
                    )}
                    <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200">
                      <MoreHorizontal size={16} className="text-[#222635]/60" />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-[#222635]/80 leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#957D65]/10 text-[#957D65] text-xs rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              )}

              {/* Post Actions */}
              <div className="p-6 pt-4 border-t border-[#957D65]/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-[#222635]/60 hover:text-[#957D65] transition-colors duration-200">
                      <Heart size={18} />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-[#222635]/60 hover:text-[#957D65] transition-colors duration-200">
                      <MessageCircle size={18} />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-[#222635]/60 hover:text-[#957D65] transition-colors duration-200">
                      <Share2 size={18} />
                      <span className="text-sm font-medium">{post.shares}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-[#957D65]/10 hover:bg-[#957D65]/20 text-[#957D65] rounded-lg transition-all duration-200 hover:scale-105">
                    <UserPlus size={16} />
                    <span className="text-sm font-medium">Connect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <Users size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">No posts found</h3>
            <p className="text-[#222635]/40 max-w-md leading-relaxed">
              {searchQuery ? 'Try adjusting your search terms' : 'Be the first to share your Dubai experience with the community!'}
            </p>
            <button className="mt-6 px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
              Create Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
