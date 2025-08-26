import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MapPin, Calendar, Utensils, Camera, Star, ChevronRight } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';
import miftahLogo from '../assets/miftah_logo.png';

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

export function ChatInterface({ isActive }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isInitialState, setIsInitialState] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const searchRecommendations = [
    { icon: MapPin, text: 'Best luxury hotels in Dubai Marina', category: 'Hotels' },
    { icon: Utensils, text: 'Can you suggest a romantic dinner place in Dubai?', category: 'Dining' },
    { icon: Calendar, text: 'Weekend desert safari with private guide', category: 'Experiences' },
    { icon: Camera, text: 'Photography spots for Instagram in Dubai', category: 'Attractions' },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
              image: '/api/placeholder/300/200',
              price: '$$$'
            },
            {
              id: 'le-meurice',
              title: 'Le Meurice',
              subtitle: 'French haute cuisine by Alain Ducasse. Elegant dining with a...',
              description: 'Exquisite French dining experience',
              rating: 4,
              image: '/api/placeholder/300/200',
              price: '$$$$'
            },
            {
              id: 'pierchic',
              title: 'Pierchic',
              subtitle: 'Seafood restaurant over water with Burj Al Arab views',
              description: 'Overwater dining with stunning views and fresh seafood',
              rating: 5,
              image: '/api/placeholder/300/200',
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
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-[#222635] to-[#2a2f42] relative">
      {isInitialState ? (
        // Initial centered state
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full space-y-8 text-center">
            {/* Welcome message */}
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={miftahLogo}
                  alt="Miftah AI"
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-serif font-medium text-[#E3DCD4] tracking-wide">
                How can I assist you today?
              </h2>
              <p className="text-[#E3DCD4]/70 text-lg leading-relaxed">
                Your luxury concierge is ready to help with reservations, experiences, and personalized recommendations across the UAE.
              </p>
            </div>

            {/* Search bar */}
            <div className="relative">
              <div className="flex items-center bg-[#E3DCD4]/10 backdrop-blur-sm rounded-2xl border border-[#957D65]/30 p-4 shadow-2xl">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about luxury experiences in the UAE..."
                  className="flex-1 bg-transparent text-[#E3DCD4] placeholder-[#E3DCD4]/50 text-lg focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-4 p-3 bg-[#957D65] hover:bg-[#957D65]/80 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Send size={20} className="text-[#E3DCD4]" />
                </button>
              </div>
            </div>

            {/* Search recommendations */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-widest text-[#E3DCD4]/60">
                Popular Requests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {searchRecommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleRecommendationClick(rec.text)}
                      className="flex items-center space-x-3 p-4 bg-[#E3DCD4]/5 hover:bg-[#E3DCD4]/10 rounded-xl border border-[#E3DCD4]/10 hover:border-[#957D65]/30 transition-all duration-200 hover:scale-[1.02] text-left"
                    >
                      <div className="w-10 h-10 bg-[#957D65]/20 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-[#957D65]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#E3DCD4] font-medium">{rec.text}</p>
                        <p className="text-[#E3DCD4]/50 text-sm">{rec.category}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
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
                          Miftah Recommended restaurants in Dubai
                        </h3>
                        <div className="flex space-x-4 overflow-x-auto pb-2">
                          {message.bookingCards.map((card) => (
                            <div
                              key={card.id}
                              className="flex-shrink-0 w-80 bg-[#E3DCD4]/10 rounded-xl border border-[#E3DCD4]/20 overflow-hidden hover:bg-[#E3DCD4]/15 transition-all duration-200"
                            >
                              {/* Card Image */}
                              <PlaceholderImage height={192} className="w-full h-48 rounded-t-xl" />

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
                                    <span>Book now</span>
                                  </button>
                                  <button className="px-4 py-2 border border-[#E3DCD4]/30 text-[#E3DCD4] rounded-lg hover:bg-[#E3DCD4]/10 transition-all duration-200 hover:scale-[1.02] flex items-center space-x-1">
                                    <span>Explore</span>
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
                  placeholder="Continue the conversation..."
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