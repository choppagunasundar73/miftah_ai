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
    Star
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
            label: t('memory.chats'),
            icon: MessageCircle,
            description: t('memory.your_conversations'),
            badge: 3
        },
        {
            id: 'recommendations',
            label: t('memory.recommendations'),
            icon: Lightbulb,
            description: t('memory.ai_suggestions'),
            badge: null
        },
        {
            id: 'discover',
            label: t('memory.discover'),
            icon: Compass,
            description: t('memory.explore_experiences'),
            badge: null
        },
        {
            id: 'booking',
            label: t('memory.booking'),
            icon: Calendar,
            description: t('memory.reservations'),
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
            id: 'itinerary',
            label: t('memory.itinerary'),
            icon: Route,
            description: t('memory.trip_planning'),
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
            } w-80 overflow-hidden backdrop-blur-sm`}>

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
                    {/* Active Section Info */}
                    <div className="bg-[#957D65]/10 backdrop-blur-sm rounded-xl p-4 border border-[#957D65]/20">
                        <div className="flex items-center space-x-3 mb-2">
                            {(() => {
                                const activeItem = navigationSections.find(s => s.id === activeSection);
                                const Icon = activeItem?.icon || MessageCircle;
                                return <Icon size={20} className="text-[#957D65]" />;
                            })()}
                            <h3 className="font-serif font-medium text-lg tracking-wide text-[#222635]">
                                {navigationSections.find(s => s.id === activeSection)?.label || 'Chats'}
                            </h3>
                        </div>
                        <p className="text-sm text-[#222635]/70 leading-relaxed">
                            {navigationSections.find(s => s.id === activeSection)?.description || 'Your conversations'}
                        </p>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-[#222635]/80 mb-4">
                            {t('memory.recent_activity')}
                        </h3>
                        <div className="space-y-3">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="bg-[#957D65]/5 backdrop-blur-sm rounded-lg p-3 border border-[#957D65]/10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-[#222635] mb-1">{activity.action}</p>
                                            <div className="flex items-center space-x-2 text-xs text-[#222635]/60">
                                                <Clock size={10} />
                                                <span>{activity.time}</span>
                                            </div>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full mt-1 ${activity.type === 'booking' ? 'bg-[#957D65]' :
                                            activity.type === 'saved' ? 'bg-[#957D65]/70' : 'bg-[#957D65]/40'
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

            {/* Help & Support Footer */}
            <div className="p-2 border-t border-[#957D65]/20 bg-[#957D65]/5 backdrop-blur-sm">
                <div className="flex items-center space-x-1">
                    <div className="w-6 h-6 bg-[#957D65]/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-[#957D65]/30 transition-colors duration-200">
                        <span className="text-[#957D65] text-sm font-bold">?</span>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-[#222635] mb-1">{t('memory.help_support')}</div>
                        <div className="text-xs text-[#222635]/60 leading-relaxed">{t('memory.get_assistance')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}