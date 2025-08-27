import { useState } from 'react';
import { Compass, Sparkles, TrendingUp, Clock, ChevronRight, ExternalLink } from 'lucide-react';

interface InspirationContextPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function InspirationContextPanel({ isOpen, onToggle }: InspirationContextPanelProps) {
  const [activeCategory, setActiveCategory] = useState('trending');

  const trendingExperiences = [
    {
      title: 'Private Yacht Sunset Cruise',
      description: 'Exclusive charter with champagne service',
      location: 'Dubai Marina',
      timeframe: 'This Evening',
      urgency: 'high',
      category: 'luxury'
    },
    {
      title: 'Michelin Star Tasting Menu',
      description: 'Chef\'s table experience at CÉ LA VIE',
      location: 'Address Sky View',
      timeframe: 'Tomorrow',
      urgency: 'medium',
      category: 'dining'
    },
    {
      title: 'Desert Glamping Experience',
      description: 'Luxury camping under the stars',
      location: 'Al Maha Desert Resort',
      timeframe: 'This Weekend',
      urgency: 'low',
      category: 'adventure'
    }
  ];

  const seasonalOffers = [
    {
      title: 'Winter Wellness Retreat',
      description: '20% off spa packages at luxury resorts',
      validUntil: 'End of February',
      savings: '20% OFF',
      category: 'wellness'
    },
    {
      title: 'Cultural Heritage Tours',
      description: 'Private guided tours of historical sites',
      validUntil: 'Limited Time',
      savings: 'EXCLUSIVE',
      category: 'culture'
    }
  ];

  const curatedDestinations = [
    {
      name: 'Ras Al Khaimah',
      description: 'Mountain adventures and luxury resorts',
      travelTime: '1.5 hours from Dubai',
      highlight: 'Jais Adventure Peak'
    },
    {
      name: 'Al Ain Oasis',
      description: 'UNESCO World Heritage palm groves',
      travelTime: '2 hours from Dubai',
      highlight: 'Cultural immersion'
    }
  ];

  const categories = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'seasonal', label: 'Seasonal', icon: Clock },
    { id: 'destinations', label: 'Destinations', icon: Compass }
  ];

  return (
    <div className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-[#222635] text-[#E3DCD4] transition-transform duration-300 z-30 shadow-2xl shadow-[#222635]/20 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } w-80 overflow-hidden backdrop-blur-sm`}>
      
      {/* Header */}
      <div className="p-6 border-b border-[#957D65]/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles size={20} className="text-[#957D65]" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-medium tracking-wide">Inspiration</h2>
              <p className="text-xs text-[#E3DCD4]/70 tracking-wider">CURATED FOR YOU</p>
            </div>
          </div>
          <button 
            onClick={onToggle}
            className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Category Navigation - Horizontal Scrollable */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 bg-[#957D65]/10 rounded-lg p-1 min-w-max">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                    activeCategory === category.id
                      ? 'bg-[#957D65]/20 text-[#957D65] shadow-sm border border-[#957D65]/30'
                      : 'text-[#E3DCD4]/70 hover:text-[#E3DCD4] hover:bg-[#957D65]/5'
                  }`}
                >
                  <Icon size={16} />
                  <span className="whitespace-nowrap">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#957D65]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#957D65]/50">
        {activeCategory === 'trending' && (
          <div className="p-6 space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-widest text-[#E3DCD4]/80 mb-4">
              Trending Now
            </h3>
            {trendingExperiences.map((experience, i) => (
              <div key={i} className="group bg-[#957D65]/5 backdrop-blur-sm rounded-xl p-4 border border-[#957D65]/10 hover:bg-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-serif font-medium tracking-wide mb-1 group-hover:text-[#957D65] transition-colors">
                      {experience.title}
                    </h4>
                    <p className="text-sm text-[#E3DCD4]/70 leading-relaxed mb-2">
                      {experience.description}
                    </p>
                    <div className="text-xs text-[#E3DCD4]/50 mb-2">{experience.location}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    experience.urgency === 'high' ? 'bg-[#957D65]' :
                    experience.urgency === 'medium' ? 'bg-[#957D65]/70' : 'bg-[#957D65]/40'
                  }`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock size={12} className="text-[#957D65]" />
                    <span className="text-xs text-[#957D65] font-medium">{experience.timeframe}</span>
                  </div>
                  <ExternalLink size={14} className="text-[#E3DCD4]/40 group-hover:text-[#957D65] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'seasonal' && (
          <div className="p-6 space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-widest text-[#E3DCD4]/80 mb-4">
              Seasonal Offers
            </h3>
            {seasonalOffers.map((offer, i) => (
              <div key={i} className="group bg-[#957D65]/5 backdrop-blur-sm rounded-xl p-4 border border-[#957D65]/10 hover:bg-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-serif font-medium tracking-wide group-hover:text-[#957D65] transition-colors">
                        {offer.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        offer.savings.includes('%') 
                          ? 'bg-[#957D65]/20 text-[#957D65]' 
                          : 'bg-[#E3DCD4]/20 text-[#E3DCD4]'
                      }`}>
                        {offer.savings}
                      </span>
                    </div>
                    <p className="text-sm text-[#E3DCD4]/70 leading-relaxed mb-2">
                      {offer.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock size={12} className="text-[#957D65]" />
                    <span className="text-xs text-[#957D65] font-medium">{offer.validUntil}</span>
                  </div>
                  <ExternalLink size={14} className="text-[#E3DCD4]/40 group-hover:text-[#957D65] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'destinations' && (
          <div className="p-6 space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-widest text-[#E3DCD4]/80 mb-4">
              Curated Destinations
            </h3>
            {curatedDestinations.map((destination, i) => (
              <div key={i} className="group bg-[#957D65]/5 backdrop-blur-sm rounded-xl p-4 border border-[#957D65]/10 hover:bg-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-200 cursor-pointer">
                <div className="mb-3">
                  <h4 className="font-serif font-medium tracking-wide mb-1 group-hover:text-[#957D65] transition-colors">
                    {destination.name}
                  </h4>
                  <p className="text-sm text-[#E3DCD4]/70 leading-relaxed mb-2">
                    {destination.description}
                  </p>
                  <div className="text-xs text-[#E3DCD4]/50 mb-2">{destination.travelTime}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={12} className="text-[#957D65]" />
                    <span className="text-xs text-[#957D65] font-medium">{destination.highlight}</span>
                  </div>
                  <ExternalLink size={14} className="text-[#E3DCD4]/40 group-hover:text-[#957D65] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 border-t border-[#957D65]/20">
        <button className="w-full py-3 bg-[#957D65]/10 hover:bg-[#957D65]/20 text-[#957D65] rounded-xl font-medium tracking-wide transition-all duration-200 hover:scale-[1.02] border border-[#957D65]/20">
          Explore All Recommendations
        </button>
      </div>
    </div>
  );
}