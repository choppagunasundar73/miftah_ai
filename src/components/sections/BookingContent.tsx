import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  CheckCircle,
  AlertCircle,
  XCircle,
  MoreVertical,
  Phone,
  Mail,
  Edit,
  Trash2,
  Download,
  Filter,
  Plus,
  Search
} from 'lucide-react';

export function BookingContent() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: 5 },
    { id: 'past', label: 'Past', count: 12 },
    { id: 'cancelled', label: 'Cancelled', count: 2 }
  ];

  const statusFilters = [
    { id: 'all', label: 'All Status' },
    { id: 'confirmed', label: 'Confirmed' },
    { id: 'pending', label: 'Pending' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  const bookings = [
    {
      id: 1,
      title: 'Nobu Dubai - Chef\'s Table Experience',
      type: 'dining',
      date: '2025-01-15',
      time: '20:00',
      duration: '3 hours',
      location: 'Atlantis The Palm, Dubai',
      status: 'confirmed',
      guests: 2,
      totalAmount: 1200,
      currency: 'AED',
      bookingRef: 'NOB-2025-001',
      contactPerson: 'Executive Chef Concierge',
      contactPhone: '+971 4 426 2626',
      contactEmail: 'reservations@nobudubai.com',
      specialRequests: 'Private oceanfront table, curated wine pairing, dietary preferences accommodated',
      paymentStatus: 'paid',
      cancellationPolicy: 'White-glove service included',
      category: 'upcoming',
      exclusivity: 'Members Only',
      tier: 'Platinum'
    },
    {
      id: 2,
      title: 'Private Desert Sanctuary with Royal Falconry',
      type: 'adventure',
      date: '2025-01-18',
      time: '15:00',
      duration: '6 hours',
      location: 'Dubai Desert Conservation Reserve',
      status: 'confirmed',
      guests: 4,
      totalAmount: 2400,
      currency: 'AED',
      bookingRef: 'DSF-2025-002',
      contactPerson: 'Master Falconer Ahmed Al-Rashid',
      contactPhone: '+971 50 123 4567',
      contactEmail: 'ahmed@desertsafari.ae',
      specialRequests: 'Private helicopter transfer, professional photographer, bespoke dining experience',
      paymentStatus: 'paid',
      cancellationPolicy: 'Dedicated experience curator assigned',
      category: 'upcoming',
      exclusivity: 'Exclusive',
      tier: 'Diamond'
    },
    {
      id: 3,
      title: 'Royal Suite Wellness Sanctuary',
      type: 'wellness',
      date: '2025-01-20',
      time: '10:00',
      duration: '4 hours',
      location: 'Burj Al Arab, Dubai',
      status: 'pending',
      guests: 1,
      totalAmount: 1800,
      currency: 'AED',
      bookingRef: 'SPA-2025-003',
      contactPerson: 'Wellness Curator Amira',
      contactPhone: '+971 4 301 7777',
      contactEmail: 'spa@burjalarab.com',
      specialRequests: 'Private royal suite, personalized aromatherapy blend, champagne service',
      paymentStatus: 'pending',
      cancellationPolicy: 'Personal wellness concierge included',
      category: 'upcoming',
      exclusivity: 'By Invitation',
      tier: 'Platinum'
    },
    {
      id: 4,
      title: 'Private Yacht Charter',
      type: 'luxury',
      date: '2024-12-20',
      time: '16:00',
      duration: '4 hours',
      location: 'Dubai Marina',
      status: 'completed',
      guests: 8,
      totalAmount: 5000,
      currency: 'AED',
      bookingRef: 'YCH-2024-015',
      contactPerson: 'Captain Hassan',
      contactPhone: '+971 50 987 6543',
      contactEmail: 'hassan@marinayachts.ae',
      specialRequests: 'Sunset cruise, champagne service, photographer',
      paymentStatus: 'paid',
      cancellationPolicy: 'Completed',
      category: 'past'
    },
    {
      id: 5,
      title: 'Helicopter Tour of Dubai',
      type: 'adventure',
      date: '2024-11-15',
      time: '09:00',
      duration: '45 minutes',
      location: 'Dubai Helipad',
      status: 'cancelled',
      guests: 2,
      totalAmount: 1500,
      currency: 'AED',
      bookingRef: 'HEL-2024-008',
      contactPerson: 'Flight Coordinator',
      contactPhone: '+971 4 555 0123',
      contactEmail: 'flights@dubaihelitours.com',
      specialRequests: 'Morning flight for best visibility',
      paymentStatus: 'refunded',
      cancellationPolicy: 'Cancelled due to weather conditions',
      category: 'cancelled'
    }
  ];

  const filteredBookings = bookings
    .filter(booking => booking.category === activeTab)
    .filter(booking => filterStatus === 'all' || booking.status === filterStatus)
    .filter(booking =>
      booking.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.bookingRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (booking.specialRequests && booking.specialRequests.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle size={10} className="text-white/90" />;
      case 'pending': return <AlertCircle size={10} className="text-white/90" />;
      case 'cancelled': return <XCircle size={10} className="text-white/90" />;
      case 'completed': return <CheckCircle size={10} className="text-white/90" />;
      default: return <AlertCircle size={10} className="text-slate-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-500/90 text-white/95 border-emerald-500/90';
      case 'pending': return 'bg-amber-400/90 text-white/95 border-amber-400/90';
      case 'cancelled': return 'bg-slate-400/80 text-white/90 border-slate-400/80';
      case 'completed': return 'bg-[#957D65]/90 text-white/95 border-[#957D65]/90';
      default: return 'bg-slate-300/80 text-slate-700 border-slate-300/80';
    }
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      dining: '🍽️',
      adventure: '🏜️',
      wellness: '🧘',
      luxury: '⭐',
      culture: '🏛️',
      shopping: '🛍️'
    };
    return icons[type as keyof typeof icons] || '📅';
  };

  return (
    <div className="h-full flex flex-col bg-[#222635] overflow-hidden">
      {/* Luxury Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-[#957D65]/20 bg-[#222635]">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Itinerary Management
            </h1>
            <p className="text-base text-[#E3DCD4]/70 leading-relaxed font-light"
              style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              Manage all your reservations and bookings in one place
            </p>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <button className="p-3 sm:p-4 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20 hover:border-[#957D65]/50">
              <Filter size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="flex items-center space-x-2 px-4 sm:px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 shadow-2xl shadow-[#957D65]/30 hover:shadow-[#957D65]/40"
              style={{ fontFamily: "'Avenir Next', sans-serif", fontWeight: 500, letterSpacing: '0.5px' }}>
              <Plus size={20} />
              <span className="text-sm uppercase tracking-wider hidden sm:inline">New Booking</span>
              <span className="text-sm uppercase tracking-wider sm:hidden">New</span>
            </button>
          </div>
        </div>

        {/* Luxury Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#957D65] z-10" style={{ opacity: 1 }} />
          <input
            type="text"
            placeholder="Search reservations, locations, or references..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 rounded-2xl text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:ring-2 focus:ring-[#957D65]/40 focus:border-[#957D65]/50 transition-all duration-400 backdrop-blur-sm text-sm"
            style={{ fontFamily: "'Avenir Next', sans-serif" }}
          />
        </div>

        {/* Luxury Navigation Tabs */}
        <div className="flex space-x-2 bg-[#E3DCD4]/5 rounded-2xl p-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-3 px-4 py-3 rounded-xl text-sm font-small transition-all duration-400 ${activeTab === tab.id
                ? 'bg-[#957D65] text-[#E3DCD4] shadow-xl shadow-[#957D65]/20'
                : 'text-[#E3DCD4]/70 hover:text-[#E3DCD4] hover:bg-[#E3DCD4]/10'
                }`}
              style={{ fontFamily: "'Avenir Next', sans-serif" }}
            >
              <span className="tracking-wide">{tab.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${activeTab === tab.id
                ? 'bg-[#E3DCD4]/20 text-[#E3DCD4]'
                : 'bg-[#957D65]/20 text-[#957D65]'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>



        {/* Premium Status Filters */}
        <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2">
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilterStatus(filter.id)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-400 hover:scale-102 ${filterStatus === filter.id
                ? 'bg-[#957D65] text-[#E3DCD4] shadow-lg shadow-[#957D65]/30'
                : 'bg-[#E3DCD4]/10 text-[#E3DCD4]/70 hover:bg-[#E3DCD4]/20 hover:text-[#E3DCD4] border border-[#957D65]/20'
                }`}
              style={{
                fontFamily: "'Avenir Next', sans-serif",
                letterSpacing: '0.5px',
                textTransform: 'uppercase' as const,
                fontSize: '12px'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Luxury Reservations Gallery */}
      <div className="flex-1 overflow-y-auto bg-[#222635]">
        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-4 sm:space-y-6">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="group bg-[#E3DCD4] hover:bg-[#E3DCD4] rounded-xl border-none transition-all duration-500 hover:scale-[1.005] shadow-lg hover:shadow-xl backdrop-blur-sm"
              style={{
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0px 4px 16px rgba(34, 38, 53, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0px 8px 24px rgba(34, 38, 53, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(34, 38, 53, 0.08)';
              }}
            >
              <div>
                {/* Luxury Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{getTypeIcon(booking.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-[#222635] group-hover:text-[#957D65] transition-colors mb-2 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                            {booking.title}
                          </h3>
                          {(booking as any).exclusivity && (
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-3 py-1 bg-[#957D65] text-[#E3DCD4] rounded-full text-xs font-medium uppercase tracking-wider"
                                style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                                {(booking as any).exclusivity}
                              </span>
                              <span className="px-3 py-1 bg-[#222635] text-[#E3DCD4] rounded-full text-xs font-medium uppercase tracking-wider"
                                style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                                {(booking as any).tier} Member
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-[#222635]/50 text-sm font-light" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        Reservation Reference: {booking.bookingRef}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Pricing Display */}
                <div className="flex items-center justify-end space-x-3 mb-4">
                  <div className="text-right">
                    <div className="text-xl font-medium text-[#957D65] mb-1"
                      style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                      <span className="text-sm opacity-80 mr-1">AED</span>
                      {booking.totalAmount.toLocaleString()}
                    </div>
                    <div className={`text-xs font-medium ${booking.paymentStatus === 'paid' ? 'text-[#957D65]' :
                      booking.paymentStatus === 'pending' ? 'text-[#222635]/60' : 'text-[#222635]/60'
                      }`} style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                      {booking.paymentStatus === 'paid' ? '✓ Secured' :
                        booking.paymentStatus === 'pending' ? '⏳ Processing' : '↩ Refunded'}
                    </div>
                  </div>
                  <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-[#957D65]/10 rounded-xl transition-all duration-400">
                    <MoreVertical size={18} className="text-[#222635]/60" />
                  </button>
                </div>

                {/* Luxury Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center space-x-3 p-3 bg-[#222635]/5 rounded-xl">
                    <Calendar size={18} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635] mb-1" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-xs text-[#222635]/60 uppercase tracking-wider" style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                        Date
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-[#222635]/5 rounded-xl">
                    <Clock size={18} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635] mb-1" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        {booking.time}
                      </div>
                      <div className="text-xs text-[#222635]/60 uppercase tracking-wider" style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                        {booking.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-[#222635]/5 rounded-xl">
                    <User size={18} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635] mb-1" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
                      </div>
                      <div className="text-xs text-[#222635]/60 uppercase tracking-wider" style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                        Party Size
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Location */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-[#957D65]/10 rounded-xl border border-[#957D65]/20">
                  <MapPin size={18} className="text-[#957D65]" />
                  <span className="text-sm text-[#222635] font-medium" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    {booking.location}
                  </span>
                </div>

                {/* Luxury Service Details */}
                {booking.specialRequests && (
                  <div className="mb-4 p-3 bg-[#222635]/5 rounded-xl">
                    <h4 className="text-sm font-semibold text-[#222635] mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                      Experience Details
                    </h4>
                    <p className="text-sm text-[#222635]/80 leading-relaxed" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                      {booking.specialRequests}
                    </p>
                  </div>
                )}

                {/* Concierge Contact & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#957D65]/20">
                  <div className="flex items-center space-x-4 text-sm text-[#222635]/70" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    <div className="flex items-center space-x-2">
                      <User size={14} className="text-[#957D65]" />
                      <span className="font-medium">{booking.contactPerson}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={14} className="text-[#957D65]" />
                      <span>{booking.contactPhone}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                      <button className="p-2 hover:bg-[#957D65]/10 rounded-xl transition-all duration-400 hover:scale-110">
                        <Edit size={16} className="text-[#957D65]" />
                      </button>
                    )}
                    <button className="p-2 hover:bg-[#957D65]/10 rounded-xl transition-all duration-400 hover:scale-110">
                      <Download size={16} className="text-[#957D65]" />
                    </button>
                  </div>
                </div>

                {/* Premium Service Policy */}
                <div className="mt-3 text-sm text-[#222635]/60" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  <span className="font-medium uppercase tracking-wider text-xs">Service:</span>
                  <span className="ml-2">{booking.cancellationPolicy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="flex flex-col items-center justify-center h-96 text-center px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
            <div className="w-20 sm:w-32 h-20 sm:h-32 bg-[#957D65]/10 rounded-3xl flex items-center justify-center mb-8 sm:mb-12">
              <Calendar size={32} className="text-[#957D65] sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#E3DCD4]/80 mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
              No Reservations Found
            </h3>
            <p className="text-base sm:text-xl text-[#E3DCD4]/60 max-w-2xl leading-relaxed mb-8 sm:mb-12"
              style={{ fontFamily: "'Avenir Next', sans-serif" }}>
              {searchQuery ? 'Refine your search to find specific reservations' :
                activeTab === 'upcoming' ? 'Your exclusive experiences await curation' :
                  activeTab === 'past' ? 'No experience history to display' : 'No archived reservations'}
            </p>
            <button className="px-8 sm:px-12 py-4 sm:py-6 bg-[#957D65] text-[#E3DCD4] rounded-2xl font-medium tracking-wider hover:scale-102 transition-all duration-400 shadow-2xl shadow-[#957D65]/30 text-base sm:text-lg uppercase"
              style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
              Curate New Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
}