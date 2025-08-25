import { useState } from 'react';
import { Send, EyeOff, TrendingUp, Utensils, Calendar, MapPin, Star } from 'lucide-react';

interface IncognitoInterfaceProps {
  onExitIncognito: () => void;
}

export function IncognitoInterface({ onExitIncognito }: IncognitoInterfaceProps) {
  const [inputValue, setInputValue] = useState('');

  const trendingRecommendations = [
    {
      category: 'Dining',
      icon: Utensils,
      items: [
        { name: 'Nobu Dubai', type: 'Japanese Fine Dining', rating: 4.8 },
        { name: 'Pierchic', type: 'Seafood Restaurant', rating: 4.9 },
        { name: 'At.mosphere', type: 'International Cuisine', rating: 4.7 }
      ]
    },
    {
      category: 'Events',
      icon: Calendar,
      items: [
        { name: 'Dubai Opera Shows', type: 'Cultural Events', rating: 4.8 },
        { name: 'Burj Khalifa Light Show', type: 'Entertainment', rating: 4.9 },
        { name: 'Desert Safari', type: 'Adventure Experience', rating: 4.7 }
      ]
    },
    {
      category: 'Experiences',
      icon: MapPin,
      items: [
        { name: 'Private Yacht Charter', type: 'Luxury Experience', rating: 4.9 },
        { name: 'Helicopter Tour', type: 'Sightseeing', rating: 4.8 },
        { name: 'Spa at Burj Al Arab', type: 'Wellness', rating: 4.9 }
      ]
    }
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    // In incognito mode, we don't save history
    console.log('Incognito message:', inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d2e] via-[#222635] to-[#1a1d2e] flex flex-col">
      {/* Incognito Header */}
      <div className="p-4 border-b border-[#957D65]/10">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#957D65]/20 rounded-full flex items-center justify-center">
              <EyeOff size={16} className="text-[#957D65]" />
            </div>
            <div>
              <span className="text-[#E3DCD4] font-medium">Incognito Mode</span>
              <p className="text-xs text-[#E3DCD4]/60">Private conversation • No history saved</p>
            </div>
          </div>
          <button
            onClick={onExitIncognito}
            className="px-4 py-2 text-sm text-[#E3DCD4]/70 hover:text-[#E3DCD4] hover:bg-[#957D65]/10 rounded-lg transition-all duration-200"
          >
            Exit Incognito
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full space-y-12">
          {/* Central Input */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-[#957D65]/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <EyeOff size={40} className="text-[#957D65]" />
              </div>
              <h1 className="text-4xl font-serif font-medium text-[#E3DCD4] tracking-wide">
                Private Concierge
              </h1>
              <p className="text-[#E3DCD4]/70 text-lg leading-relaxed max-w-2xl mx-auto">
                Start a private conversation with your luxury concierge. 
                Your requests remain confidential and no history is saved.
              </p>
            </div>

            {/* Input Box */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center bg-[#E3DCD4]/5 backdrop-blur-sm rounded-2xl border border-[#957D65]/20 p-4 shadow-2xl">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="What can I help you with today? (Private & Confidential)"
                  className="flex-1 bg-transparent text-[#E3DCD4] placeholder-[#E3DCD4]/40 text-lg focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-4 p-3 bg-[#957D65] hover:bg-[#957D65]/80 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Send size={20} className="text-[#E3DCD4]" />
                </button>
              </div>
            </div>
          </div>

          {/* Trending Recommendations */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp size={20} className="text-[#957D65]" />
                <h2 className="text-xl font-serif font-medium text-[#E3DCD4] tracking-wide">
                  Trending Now
                </h2>
              </div>
              <p className="text-[#E3DCD4]/60 text-sm">
                Popular recommendations to inspire your choices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingRecommendations.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#E3DCD4]/5 backdrop-blur-sm rounded-xl border border-[#E3DCD4]/10 p-6 hover:bg-[#E3DCD4]/10 hover:border-[#957D65]/20 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#957D65]/20 rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-[#957D65]" />
                      </div>
                      <h3 className="font-serif font-medium text-[#E3DCD4] tracking-wide">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="p-3 bg-[#E3DCD4]/5 rounded-lg hover:bg-[#E3DCD4]/10 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-[#E3DCD4] text-sm">{item.name}</h4>
                            <div className="flex items-center space-x-1">
                              <Star size={12} className="text-[#957D65] fill-current" />
                              <span className="text-xs text-[#957D65]">{item.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs text-[#E3DCD4]/60">{item.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#957D65]/10 rounded-full border border-[#957D65]/20">
              <EyeOff size={14} className="text-[#957D65]" />
              <span className="text-xs text-[#E3DCD4]/70">
                Your privacy is protected • No data is stored or tracked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}