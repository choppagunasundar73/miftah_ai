import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Camera, Calendar, AlertTriangle, Sparkles } from 'lucide-react';
import { ChatsContent } from './sections/ChatsContent';
import { RecommendationsContent } from './sections/RecommendationsContent';
import { DiscoverContent } from './sections/DiscoverContent';
import { BookingContent } from './sections/BookingContent';
import { CalendarContent } from './sections/CalendarContent';
import { ItineraryContent } from './sections/ItineraryContent';

interface Message {
  id: string;
  type: 'user' | 'concierge';
  content: string;
  timestamp: Date;
  serviceCards?: ServiceCard[];
  suggestions?: string[];
}

interface ServiceCard {
  id: string;
  type: 'restaurant' | 'hotel' | 'experience' | 'flight';
  title: string;
  subtitle: string;
  price?: string;
  rating?: number;
  image?: string;
  actions: Array<{ label: string; primary?: boolean }>;
}

interface ConversationCanvasProps {
  memoryOpen: boolean;
  inspirationOpen: boolean;
  activeSection: string;
}

export function ConversationCanvas({ memoryOpen, inspirationOpen, activeSection }: ConversationCanvasProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'concierge',
      content: 'Good afternoon! I\'m your personal concierge. How may I assist you with your luxury travel experience today?',
      timestamp: new Date(Date.now() - 300000),
      suggestions: ['Plan a weekend getaway', 'Find fine dining', 'Book spa treatments', 'Arrange transportation']
    },
    {
      id: '2',
      type: 'user',
      content: 'I\'d like to find an exceptional restaurant for dinner tonight in Dubai',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: '3',
      type: 'concierge',
      content: 'Excellent choice! Based on your preferences for fine dining and your location in Dubai, I\'ve curated these exceptional restaurants for tonight:',
      timestamp: new Date(Date.now() - 180000),
      serviceCards: [
        {
          id: 'nobu',
          type: 'restaurant',
          title: 'Nobu Dubai',
          subtitle: 'Japanese • Atlantis The Palm • Available 8:00 PM',
          price: '$$$',
          rating: 4.8,
          actions: [{ label: 'Reserve Now', primary: true }, { label: 'More Info' }, { label: 'Save' }]
        },
        {
          id: 'pierchic',
          type: 'restaurant',
          title: 'Pierchic',
          subtitle: 'Seafood • Al Qasr • Available 7:30 PM',
          price: '$$$$',
          rating: 4.9,
          actions: [{ label: 'Reserve Now', primary: true }, { label: 'More Info' }, { label: 'Save' }]
        }
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const predictiveSuggestions = [
    'Show my calendar for this week',
    'Plan a romantic dinner',
    'Book a desert safari',
    'Find luxury shopping',
    'Arrange airport transfer'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setShowSuggestions(false);
    
    // Simulate concierge response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          type: 'concierge',
          content: 'I understand you\'re looking for assistance. Let me help you with that right away.',
          timestamp: new Date(),
          suggestions: ['Tell me more', 'Show alternatives', 'Book this option']
        };
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 2000);
    }, 500);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setShowSuggestions(value.length > 2);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'chats':
        return <ChatsContent />;
      case 'recommendations':
        return <RecommendationsContent />;
      case 'discover':
        return <DiscoverContent />;
      case 'booking':
        return <BookingContent />;
      case 'calendar':
        return <CalendarContent />;
      case 'itinerary':
        return <ItineraryContent />;
      default:
        return <ChatsContent />;
    }
  };

  return (
    <div className={`flex-1 flex flex-col bg-[#E3DCD4] transition-all duration-300 ${
      memoryOpen ? 'ml-80' : 'ml-0'
    } ${inspirationOpen ? 'mr-80' : 'mr-0'}`}>
      
      {/* Section Content */}
      {renderSectionContent()}
      
    </div>
  );
}