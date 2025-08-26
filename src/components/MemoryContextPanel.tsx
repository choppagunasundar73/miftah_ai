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
    const navigationSections = [
        {
            id: 'chats',
            label: 'Chats',
            icon: MessageCircle,
            description: 'Your conversations',
            badge: 3
        },
        {
            id: 'recommendations',
            label: 'Recommendations',
            icon: Lightbulb,
            description: 'AI suggestions',
            badge: null
        },
        {
            id: 'discover',
            label: 'Discover',
            icon: Compass,
            description: 'Explore experiences',
            badge: null
        },
        {
            id: 'booking',
            label: 'Booking',
            icon: Calendar,
            description: 'Reservations',
            badge: 2
        },
        {
            id: 'calendar',
            label: 'Calendar',
            icon: Calendar,
            description: 'Your schedule',
            badge: null
        },
        {
            id: 'itinerary',
            label: 'Itinerary',
            icon: Route,
            description: 'Trip planning',
            badge: null
        }
    ];

    const recentActivity = [
        { action: 'Booked dinner at Nobu', time: '2 hours ago', type: 'booking' },
        { action: 'Saved Burj Al Arab', time: '1 day ago', type: 'saved' },
        { action: 'Viewed desert safari', time: '2 days ago', type: 'viewed' }
    ];

    return (
        <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#E3DCD4] text-[#222635] transition-transform duration-300 z-30 shadow-2xl shadow-[#222635]/20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-80 overflow-hidden backdrop-blur-sm`}>

            {/* Header */}
            <div className="p-6 border-b border-[#957D65]/20">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#957D65]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <User size={20} className="text-[#957D65]" />
                        </div>
                        <div>
                            <h2 className="text-xl font-serif font-medium tracking-wide text-[#222635]">Memory</h2>
                            <p className="text-xs text-[#222635]/70 tracking-wider">NAVIGATION</p>
                        </div>
                    </div>
                    <button
                        onClick={onToggle}
                        className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105 lg:hidden"
                    >
                        <ChevronLeft size={18} />
                    </button>
                </div>

                {/* Vertical Navigation */}
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
                            Recent Activity
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
                        <div className="text-sm font-medium text-[#222635] mb-1">Help & Support</div>
                        <div className="text-xs text-[#222635]/60 leading-relaxed">Get assistance anytime</div>
                    </div>
                </div>
            </div>
        </div>
    );
}