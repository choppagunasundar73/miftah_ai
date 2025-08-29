import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MapPin, Calendar, Utensils, Camera, Star, ChevronRight } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';
import miftahLogo from '../assets/miftah_logo.png';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  bookingCards?: BookingCard[];
}

interface BookingCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  image: string;
  price?: string;
}

interface ChatInterfaceProps {
  isActive: boolean;
}

interface NewsItem {
  title: string;
  description: string;
  image: string;
  source: string;
  url: string;
}

export function ChatInterface({ isActive }: ChatInterfaceProps) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isInitialState, setIsInitialState] = useState(true);
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const searchRecommendations = [
    { icon: MapPin, text: t('chat.best_luxury_hotels')},
    { icon: Utensils, text: t('chat.romantic_dinner')},
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch news content from the URL
  useEffect(() => {
    const fetchNewsContent = async () => {
      try {
        setIsLoadingNews(true);
        
        // Simulate API call delay for realistic loading
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Since direct fetching from external URLs has CORS restrictions,
        // we'll simulate the fetched content structure
        const mockFetchedContent = {
          title: 'F1 House 44: Lewis Hamilton\'s Exclusive Racing Experience',
          description: 'Join Lewis Hamilton at House 44 for an unprecedented Formula 1 experience featuring exclusive track access, private hospitality suites, meet-and-greets with racing legends, and behind-the-scenes access to the Mercedes-AMG Petronas F1 Team facilities.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
          source: 'Soho House Events',
          url: 'https://www.sohohouse.com/house-notes/issue-006/events/f1-house-44'
        };
        
        // In a real implementation, you would:
        // 1. Use a backend proxy to fetch the URL content
        // 2. Parse the HTML to extract title, description, and image
        // 3. Return structured data
        
        setNewsItem(mockFetchedContent);
      } catch (error) {
        console.error('Failed to fetch news content:', error);
        // Fallback content
        setNewsItem({
          title: 'F1 House 44: Exclusive Racing Experience',
          description: 'Experience the thrill of Formula 1 at House 44 with exclusive access to private viewing areas and premium hospitality.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
          source: 'Soho House Events',
          url: 'https://www.sohohouse.com/house-notes/issue-006/events/f1-house-44'
        });
      } finally {
        setIsLoadingNews(false);
      }
    };

    fetchNewsContent();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsInitialState(false);

    // Simulate AI response with booking cards for restaurant queries
    setTimeout(() => {
      const isRestaurantQuery = currentInput.toLowerCase().includes('restaurant') ||
        currentInput.toLowerCase().includes('dinner') ||
        currentInput.toLowerCase().includes('dining');

      let aiMessage: Message;

      if (isRestaurantQuery) {
        aiMessage = {
          id: (Date.now() + 1).toString(),
          text: "Certainly. Pierchic is a top choice — set over the water with stunning views of the Burj Al Arab. Would you like me to suggest a few more exclusive options",
          sender: 'ai',
          timestamp: new Date(),
          bookingCards: [
            {
              id: 'guy-savoy',
              title: 'Guy Savoy',
              subtitle: 'Modern French classics overlooking the Seine',
              description: 'French haute cuisine by Alain Ducasse. Elegant dining with a...',
              rating: 5,
              image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center',
              price: '$$$'
            },
            {
              id: 'le-meurice',
              title: 'Le Meurice',
              subtitle: 'French haute cuisine by Alain Ducasse. Elegant dining with a...',
              description: 'Exquisite French dining experience',
              rating: 4,
              image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center',
              price: '$$$$'
            },
            {
              id: 'pierchic',
              title: 'Pierchic',
              subtitle: 'Seafood restaurant over water with Burj Al Arab views',
              description: 'Overwater dining with stunning views and fresh seafood',
              rating: 5,
              image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&crop=center',
              price: '$$$$'
            }
          ]
        };
      } else {
        aiMessage = {
          id: (Date.now() + 1).toString(),
          text: `I'd be happy to help you with "${currentInput}". Let me find the best luxury options for you in the UAE. Based on your request, I can recommend several premium experiences that match your preferences.`,
          sender: 'ai',
          timestamp: new Date(),
        };
      }

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleRecommendationClick = (recommendation: string) => {
    setInputValue(recommendation);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  if (!isActive) return null;

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-[#222635] to-[#2a2f42] relative overflow-hidden">
      {isInitialState ? (
        // Initial centered state
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-2xl w-full space-y-4 sm:space-y-6 text-center">
            {/* Welcome message */}
            <div className="space-y-2">
              <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3">
                <img
                  src={miftahLogo}
                  alt="Miftah AI"
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-serif font-medium text-[#E3DCD4] tracking-wide">
                {t('chat.how_can_help')}
              </h2>
              <p className="text-[#E3DCD4]/70 text-xs sm:text-sm leading-relaxed px-2">
                {t('chat.luxury_concierge_ready')}
              </p>
            </div>

            {/* Search bar */}
            <div className="relative px-2 sm:px-0">
              <div className="flex items-center bg-[#E3DCD4]/10 backdrop-blur-sm rounded-xl border border-[#957D65]/30 p-2 sm:p-3 shadow-2xl">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t('chat.ask_anything')}
                  className="flex-1 bg-transparent text-[#E3DCD4] placeholder-[#E3DCD4]/50 text-sm focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 sm:ml-3 p-2 bg-[#957D65] hover:bg-[#957D65]/80 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Send size={16} className="text-[#E3DCD4]" />
                </button>
              </div>
            </div>

            {/* Search recommendations */}
            <div className="space-y-2 px-2 sm:px-0">
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#E3DCD4]/60">
                {t('chat.popular_requests')}
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                {searchRecommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleRecommendationClick(rec.text)}
                      className="flex-1 flex items-center space-x-2 p-3 sm:p-2 bg-[#E3DCD4]/5 hover:bg-[#E3DCD4]/10 rounded-lg border border-[#E3DCD4]/10 hover:border-[#957D65]/30 transition-all duration-200 hover:scale-[1.02] text-left"
                    >
                      <div className="w-6 h-6 bg-[#957D65]/20 rounded-md flex items-center justify-center flex-shrink-0">
                        <Icon size={12} className="text-[#957D65]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#E3DCD4] font-medium text-xs sm:text-xs truncate">{rec.text}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* News Feed Section */}
            <div className="space-y-2">
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#E3DCD4]/60">
                News Feed
              </h3>
              {isLoadingNews ? (
                <div className="bg-[#E3DCD4]/5 rounded-xl border border-[#E3DCD4]/10 p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-[#957D65]/10 rounded-lg animate-pulse flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-[#957D65]/10 rounded animate-pulse"></div>
                      <div className="h-3 bg-[#957D65]/10 rounded animate-pulse w-3/4"></div>
                      <div className="h-3 bg-[#957D65]/10 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              ) : newsItem ? (
                <div 
                  className="bg-[#E3DCD4]/5 hover:bg-[#E3DCD4]/10 rounded-xl border border-[#E3DCD4]/10 hover:border-[#957D65]/30 p-3 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(newsItem.url, '_blank')}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-[#957D65]/10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-[#957D65]/20 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#957D65]">
                                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10h-1V6a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14h2a3 3 0 0 0 6 0h2a3 3 0 0 0 6 0zM6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm12 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor"/>
                                </svg>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#E3DCD4] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {newsItem.title}
                      </h4>
                      <p className="text-xs text-[#E3DCD4]/70 mb-2 leading-relaxed line-clamp-2" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        {newsItem.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#957D65] uppercase tracking-wider font-medium">{newsItem.source}</span>
                        <span className="text-xs text-[#957D65] hover:text-[#957D65]/80 transition-colors underline">
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#E3DCD4]/5 rounded-xl border border-[#E3DCD4]/10 p-3">
                  <div className="text-center text-xs text-[#E3DCD4]/60">
                    Unable to load news content
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Chat conversation state
        <>
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="space-y-4">
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.sender === 'ai' && (
                      <div className="w-10 h-10 bg-[#957D65]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Sparkles size={20} className="text-[#957D65]" />
                      </div>
                    )}
                    <div
                      className={`max-w-2xl p-4 rounded-2xl ${message.sender === 'user'
                        ? 'bg-[#957D65] text-[#E3DCD4] rounded-br-md'
                        : 'bg-[#E3DCD4]/10 text-[#E3DCD4] border border-[#E3DCD4]/20 rounded-bl-md'
                        }`}
                    >
                      <p className="leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>

                  {/* Booking Cards */}
                  {message.bookingCards && (
                    <div className="ml-13">
                      <div className="bg-[#E3DCD4]/5 backdrop-blur-sm rounded-2xl border border-[#E3DCD4]/20 p-6">
                        <h3 className="text-[#E3DCD4] font-serif text-lg mb-4 tracking-wide">
                          {t('chat.recommended_restaurants')}
                        </h3>
                        <div className="flex space-x-4 overflow-x-auto pb-2">
                          {message.bookingCards.map((card) => (
                            <div
                              key={card.id}
                              className="flex-shrink-0 w-80 bg-[#E3DCD4]/10 rounded-xl border border-[#E3DCD4]/20 overflow-hidden hover:bg-[#E3DCD4]/15 transition-all duration-200"
                            >
                              {/* Card Image */}
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                              />

                              {/* Card Content */}
                              <div className="p-4 space-y-3">
                                <div>
                                  <h4 className="text-[#E3DCD4] font-serif font-medium text-lg">{card.title}</h4>
                                  <p className="text-[#E3DCD4]/70 text-sm">{card.subtitle}</p>
                                </div>

                                <p className="text-[#E3DCD4]/60 text-sm leading-relaxed">{card.description}</p>

                                {/* Rating */}
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      className={`${i < card.rating ? 'text-[#957D65] fill-current' : 'text-[#E3DCD4]/30'
                                        }`}
                                    />
                                  ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2 pt-2">
                                  <button className="flex-1 bg-[#957D65] hover:bg-[#957D65]/80 text-[#E3DCD4] px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2">
                                    <Calendar size={16} />
                                    <span>{t('chat.book_now')}</span>
                                  </button>
                                  <button className="px-4 py-2 border border-[#E3DCD4]/30 text-[#E3DCD4] rounded-lg hover:bg-[#E3DCD4]/10 transition-all duration-200 hover:scale-[1.02] flex items-center space-x-1">
                                    <span>{t('chat.explore')}</span>
                                    <ChevronRight size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-[#E3DCD4]/10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center bg-[#E3DCD4]/10 backdrop-blur-sm rounded-2xl border border-[#957D65]/30 p-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t('chat.continue_conversation')}
                  className="flex-1 bg-transparent text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-4 p-3 bg-[#957D65] hover:bg-[#957D65]/80 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Send size={18} className="text-[#E3DCD4]" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}