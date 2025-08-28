import { useState } from 'react';
import {
    MessageCircle,
    Lightbulb,
    Compass,
    Calendar,
    Route,
    ChevronLeft,
    User,
    Clock,
    Star,
    Users,
    MoreVertical,
    Pin
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import miftahKeyLogo from '../assets/miftah_key_logo.png';

interface MemoryContextPanelProps {
    isOpen: boolean;
    onToggle: () => void;
    activeSection: string;
    onSectionChange: (section: string) => void;
}

interface ChatHistoryItem {
    id: string;
    title: string;
    lastMessage: string;
    isPinned: boolean;
    isRecent: boolean;
    isCurrent: boolean;
}

export function MemoryContextPanel({
    isOpen,
    onToggle,
    activeSection,
    onSectionChange
}: MemoryContextPanelProps) {
    const { t } = useLanguage();
    const navigationSections = [
        {
            id: 'chats',
            label: 'Ask Miftah',
            icon: MessageCircle,
            description: t('memory.your_conversations'),
        },
        {
            id: 'recommendations',
            label: 'Miftah Recommends',
            icon: Lightbulb,
            description: t('memory.ai_suggestions'),
            badge: null
        },
        {
            id: 'discover',
            label: "What's HOT",
            icon: Compass,
            description: t('memory.explore_experiences'),
            badge: null
        },
        {
            id: 'itinerary',
            label: 'Itinerary',
            icon: Route,
            description: t('memory.trip_planning'),
            badge: 2
        },
        {
            id: 'calendar',
            label: t('memory.calendar'),
            icon: Calendar,
            description: t('memory.your_schedule'),
            badge: null
        },
        {
            id: 'community',
            label: 'Community',
            icon: Users,
            description: 'Connect with fellow travelers',
            badge: null
        }
    ];

    const chatHistory: ChatHistoryItem[] = [
        {
            id: '1',
            title: 'Dubai Desert Safari Planning',
            lastMessage: 'Perfect! I\'ve found some exclusive desert experiences for you.',
            isPinned: true,
            isRecent: true,
            isCurrent: true
        },
        {
            id: '2',
            title: 'Nobu Dubai Reservation',
            lastMessage: 'Your table for 2 is confirmed for tonight at 8 PM.',
            isPinned: false,
            isRecent: false,
            isCurrent: false
        },
        {
            id: '3',
            title: 'Burj Khalifa VIP Experience',
            lastMessage: 'I can arrange priority access to the Sky Lounge.',
            isPinned: true,
            isRecent: false,
            isCurrent: false
        },
        {
            id: '4',
            title: 'Weekend Itinerary Planning',
            lastMessage: 'Here\'s your curated weekend schedule with luxury experiences.',
            isPinned: false,
            isRecent: false,
            isCurrent: false
        },
        {
            id: '5',
            title: 'Spa & Wellness Recommendations',
            lastMessage: 'The Royal Suite at Burj Al Arab Spa would be perfect.',
            isPinned: false,
            isRecent: false,
            isCurrent: false
        }
    ];

    const handleChatSelect = (chatId: string) => {
        // This would load the selected chat
        onSectionChange('chats');
        console.log('Loading chat:', chatId);
    };

    return (
        <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#E3DCD4] text-[#222635] transition-transform duration-300 z-30 shadow-2xl shadow-[#222635]/20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-80 flex flex-col backdrop-blur-sm`}>

            {/* Navigation */}
            <div className="p-6">
                <div className="space-y-2">
                    {navigationSections.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;

                        return (
                            <button
                                key={section.id}
                                onClick={() => onSectionChange(section.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] ${isActive
                                    ? 'bg-[#957D65]/20 text-[#957D65] border border-[#957D65]/30 shadow-sm'
                                    : 'bg-[#957D65]/5 text-[#222635]/80 hover:bg-[#957D65]/10 hover:text-[#222635]'
                                    }`}
                            >
                                <div className="relative">
                                    <Icon size={18} />
                                    {section.badge && (
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#957D65] rounded-full flex items-center justify-center">
                                            <span className="text-[#E3DCD4] text-xs font-bold">{section.badge}</span>
                                        </div>
                                    )}
                                </div>
                                <span className="font-medium tracking-wide">{section.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#957D65]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#957D65]/50">
                <div className="p-6 space-y-6">
                    {/* Chat History */}
                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-[#222635]/80 mb-4">
                            Chat History
                        </h3>

                        <div className="space-y-1">
                            {chatHistory.map((chat, index) => (
                                <div key={chat.id} className={`stagger-${Math.min(index + 1, 5)}`}>
                                    <div
                                        onClick={() => handleChatSelect(chat.id)}
                                        className={`group backdrop-blur-sm rounded-lg p-3 border transition-all duration-200 cursor-pointer magnetic hover-glow ${chat.isCurrent
                                                ? 'bg-[#957D65]/10 border-[#957D65]/30 hover:bg-[#957D65]/15 hover:border-[#957D65]/40 glassmorphic'
                                                : 'bg-white/40 hover:bg-white/60 border-[#957D65]/10 hover:border-[#957D65]/20'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                                                {/* Current/Recent indicator */}
                                                <div className="flex-shrink-0">
                                                    {chat.isCurrent ? (
                                                        <div className="w-2 h-2 bg-[#957D65] rounded-full shadow-sm"></div>
                                                    ) : chat.isRecent ? (
                                                        <div className="w-2 h-2 bg-[#957D65]/60 rounded-full shadow-sm animate-pulse"></div>
                                                    ) : (
                                                        <div className="w-2 h-2"></div>
                                                    )}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <h4 className={`text-sm font-medium group-hover:text-[#957D65] transition-colors duration-200 truncate ${chat.isCurrent ? 'text-[#957D65]' : 'text-[#222635]'
                                                            }`}>
                                                            {chat.title}
                                                        </h4>
                                                        {chat.isPinned && (
                                                            <Pin size={10} className="text-[#957D65] flex-shrink-0" />
                                                        )}
                                                    </div>
                                                    {/* Only show last message for non-current chats */}
                                                    {!chat.isCurrent && (
                                                        <p className="text-xs text-[#222635]/60 truncate">
                                                            {chat.lastMessage}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#957D65]/10 rounded-md transition-all duration-200 flex-shrink-0">
                                                <MoreVertical size={12} className="text-[#957D65]/60" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sand line separator after current chat */}
                                    {chat.isCurrent && (
                                        <div className="my-3 flex items-center">
                                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#957D65]/30 to-transparent"></div>
                                            <div className="px-3">
                                                <div className="w-1 h-1 bg-[#957D65]/40 rounded-full"></div>
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#957D65]/30 to-transparent"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats - Commented out */}
                    {/* <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-[#E3DCD4]/80 mb-4">
                            Quick Stats
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#E3DCD4]/10 backdrop-blur-sm rounded-lg p-3 border border-[#E3DCD4]/20 text-center">
                                <div className="text-lg font-serif font-medium text-[#E3DCD4]">12</div>
                                <div className="text-xs text-[#E3DCD4]/60">Conversations</div>
                            </div>
                            <div className="bg-[#E3DCD4]/10 backdrop-blur-sm rounded-lg p-3 border border-[#E3DCD4]/20 text-center">
                                <div className="text-lg font-serif font-medium text-[#E3DCD4]">5</div>
                                <div className="text-xs text-[#E3DCD4]/60">Bookings</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Help & Support Footer - Fixed at bottom */}
            <div className="mt-auto p-4 border-t border-[#957D65]/20 bg-[#957D65]/5 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#957D65]/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-[#957D65]/30 transition-colors duration-200 cursor-pointer">
                        <span className="text-[#957D65] text-base font-bold">?</span>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-[#222635]">{t('memory.help_support')}</div>
                        <div className="text-xs text-[#222635]/60">{t('memory.get_assistance')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}