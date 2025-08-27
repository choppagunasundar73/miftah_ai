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
    Users
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import miftahKeyLogo from '../assets/miftah_key_logo.png';

interface MemoryContextPanelProps {
    isOpen: boolean;
    onToggle: () => void;
    activeSection: string;
    onSectionChange: (section: string) => void;
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
            badge: 3
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

    const recentActivity = [
        { action: t('activity.booked_dinner'), time: `2 ${t('time.hours_ago')}`, type: 'booking' },
        { action: t('activity.saved_burj'), time: `1 ${t('time.yesterday')}`, type: 'saved' },
        { action: t('activity.viewed_safari'), time: `2 ${t('time.days_ago')}`, type: 'viewed' }
    ];

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
                    {/* Recent Activity */}
                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-[#222635]/80 mb-4">
                            {t('memory.recent_activity')}
                        </h3>
                        <div className="space-y-3">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="group bg-white/40 hover:bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-[#222635] mb-2 group-hover:text-[#957D65] transition-colors duration-200">{activity.action}</p>
                                            <div className="flex items-center space-x-2 text-xs text-[#222635]/60">
                                                <Clock size={12} className="text-[#957D65]/60" />
                                                <span>{activity.time}</span>
                                            </div>
                                        </div>
                                        <div className={`w-3 h-3 rounded-full mt-1 shadow-sm ${activity.type === 'booking' ? 'bg-[#957D65] shadow-[#957D65]/30' :
                                            activity.type === 'saved' ? 'bg-[#957D65]/70 shadow-[#957D65]/20' : 'bg-[#957D65]/40 shadow-[#957D65]/10'
                                            }`}></div>
                                    </div>
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