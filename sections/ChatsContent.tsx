import React, { useState } from 'react';
import { 
  MessageCircle, 
  Search, 
  Plus, 
  MoreVertical, 
  Clock, 
  Star, 
  User,
  Bot,
  Phone,
  Video,
  Archive
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ChatsContent() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('chats.all_chats'), count: 12 },
    { id: 'active', label: t('chats.active'), count: 5 },
    { id: 'archived', label: t('chats.archived'), count: 7 }
  ];

  const conversations = [
    {
      id: 1,
      title: 'Dubai Fine Dining Experience',
      lastMessage: 'Perfect! I\'ve secured your reservation at Nobu for tonight at 8 PM. The chef\'s table experience includes...',
      timestamp: '2 min ago',
      unread: 2,
      starred: true,
      type: 'dining',
      avatar: 'concierge',
      status: 'active',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Weekend Desert Safari Planning',
      lastMessage: 'The luxury desert camp experience is confirmed for Saturday. Your private guide will meet you at...',
      timestamp: '1 hour ago',
      unread: 0,
      starred: false,
      type: 'adventure',
      avatar: 'concierge',
      status: 'active',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Abu Dhabi Cultural Tour',
      lastMessage: 'The Sheikh Zayed Grand Mosque private tour has been arranged. Your cultural expert guide...',
      timestamp: '3 hours ago',
      unread: 1,
      starred: true,
      type: 'culture',
      avatar: 'concierge',
      status: 'active',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Luxury Shopping Consultation',
      lastMessage: 'I\'ve curated a selection of exclusive boutiques in Mall of the Emirates. The personal shopping...',
      timestamp: 'Yesterday',
      unread: 0,
      starred: false,
      type: 'shopping',
      avatar: 'concierge',
      status: 'archived',
      priority: 'low'
    },
    {
      id: 5,
      title: 'Spa & Wellness Retreat',
      lastMessage: 'Your wellness journey at Talise Spa has been customized. The signature treatments include...',
      timestamp: '2 days ago',
      unread: 0,
      starred: true,
      type: 'wellness',
      avatar: 'concierge',
      status: 'archived',
      priority: 'low'
    },
    {
      id: 6,
      title: 'Business Travel Arrangements',
      lastMessage: 'Your executive suite at Burj Al Arab is confirmed. The helicopter transfer and meeting room...',
      timestamp: '3 days ago',
      unread: 0,
      starred: false,
      type: 'business',
      avatar: 'concierge',
      status: 'archived',
      priority: 'high'
    }
  ];

  const filteredConversations = conversations
    .filter(conv => activeFilter === 'all' || conv.status === activeFilter)
    .filter(conv =>
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getTypeColor = (type: string) => {
    const colors = {
      dining: 'bg-[#957D65]/20 text-[#957D65]',
      adventure: 'bg-[#222635]/20 text-[#222635]',
      culture: 'bg-[#957D65]/15 text-[#957D65]',
      shopping: 'bg-[#222635]/15 text-[#222635]',
      wellness: 'bg-[#957D65]/25 text-[#957D65]',
      business: 'bg-[#222635]/25 text-[#222635]'
    };
    return colors[type as keyof typeof colors] || 'bg-[#957D65]/10 text-[#957D65]';
  };

  const getPriorityIndicator = (priority: string) => {
    const colors = {
      high: 'bg-[#957D65]',
      medium: 'bg-[#957D65]/70',
      low: 'bg-[#957D65]/40'
    };
    return colors[priority as keyof typeof colors] || 'bg-[#957D65]/40';
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              {t('chats.conversations')}
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              {t('chats.personalized_history')}
            </p>
          </div>
          <button className="group p-4 bg-gradient-to-r from-[#957D65] to-[#957D65]/90 text-[#E3DCD4] rounded-2xl hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20 hover:shadow-xl">
            <Plus size={24} className="group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#222635]/40" />
          <input
            type="text"
            placeholder={t('chats.search_conversations')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/60 border border-[#957D65]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#957D65]/30 focus:border-[#957D65]/40 text-[#222635] placeholder-[#222635]/40 transition-all duration-200 backdrop-blur-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
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

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-4">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="group bg-white/50 hover:bg-white/70 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.01] cursor-pointer shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#957D65] to-[#957D65]/80 rounded-xl flex items-center justify-center shadow-sm">
                        {conversation.avatar === 'concierge' ? (
                          <Bot size={20} className="text-[#E3DCD4]" />
                        ) : (
                          <User size={20} className="text-[#E3DCD4]" />
                        )}
                      </div>
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getPriorityIndicator(conversation.priority)}`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-serif font-medium text-lg text-[#222635] group-hover:text-[#957D65] transition-colors truncate">
                          {conversation.title}
                        </h3>
                        {conversation.starred && (
                          <Star size={16} className="text-[#957D65] fill-current flex-shrink-0" />
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize flex-shrink-0 ${getTypeColor(conversation.type)}`}>
                          {conversation.type}
                        </span>
                      </div>
                      
                      <p className="text-[#222635]/70 leading-relaxed line-clamp-2 mb-3">
                        {conversation.lastMessage}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-[#222635]/50">
                          <Clock size={14} />
                          <span>{conversation.timestamp}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {conversation.unread > 0 && (
                            <div className="w-6 h-6 bg-[#957D65] rounded-full flex items-center justify-center">
                              <span className="text-[#E3DCD4] text-xs font-bold">{conversation.unread}</span>
                            </div>
                          )}
                          
                          {/* Quick Actions */}
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                              <Phone size={14} className="text-[#957D65]" />
                            </button>
                            <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                              <Video size={14} className="text-[#957D65]" />
                            </button>
                            <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                              <Archive size={14} className="text-[#222635]/60" />
                            </button>
                            <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                              <MoreVertical size={14} className="text-[#222635]/60" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredConversations.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">{t('chats.no_conversations')}</h3>
            <p className="text-[#222635]/40 max-w-md leading-relaxed">
              {searchQuery ? t('chats.adjust_search') : t('chats.start_new')}
            </p>
            <button className="mt-6 px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
              {t('chats.start_new_chat')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}