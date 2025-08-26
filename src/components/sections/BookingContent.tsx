import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CreditCard, 
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
  Plus
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function BookingContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [filterStatus, setFilterStatus] = useState('all');

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
      contactPerson: 'Restaurant Manager',
      contactPhone: '+971 4 426 2626',
      contactEmail: 'reservations@nobudubai.com',
      specialRequests: 'Window table with ocean view, dietary restrictions: no shellfish',
      paymentStatus: 'paid',
      cancellationPolicy: 'Free cancellation until 24 hours before',
      category: 'upcoming'
    },
    {
      id: 2,
      title: 'Desert Safari with Falconry Experience',
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
      contactPerson: 'Safari Guide Ahmed',
      contactPhone: '+971 50 123 4567',
      contactEmail: 'ahmed@desertsafari.ae',
      specialRequests: 'Photography equipment allowed, vegetarian dinner option',
      paymentStatus: 'paid',
      cancellationPolicy: 'Free cancellation until 48 hours before',
      category: 'upcoming'
    },
    {
      id: 3,
      title: 'Spa Day at Talise Spa',
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
      contactPerson: 'Spa Coordinator',
      contactPhone: '+971 4 301 7777',
      contactEmail: 'spa@burjalarab.com',
      specialRequests: 'Couples massage suite, aromatherapy preference',
      paymentStatus: 'pending',
      cancellationPolicy: 'Free cancellation until 24 hours before',
      category: 'upcoming'
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
    .filter(booking => filterStatus === 'all' || booking.status === filterStatus);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle size={16} className="text-green-600" />;
      case 'pending': return <AlertCircle size={16} className="text-yellow-600" />;
      case 'cancelled': return <XCircle size={16} className="text-red-600" />;
      case 'completed': return <CheckCircle size={16} className="text-[#957D65]" />;
      default: return <AlertCircle size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      case 'completed': return 'bg-[#957D65]/10 text-[#957D65] border-[#957D65]/20';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
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
    <div className="h-full flex flex-col bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Header */}
      <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
              Booking Management
            </h1>
            <p className="text-[#222635]/60 leading-relaxed">
              Manage all your reservations and bookings in one place
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
              <Filter size={20} />
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
              <Plus size={20} />
              <span className="font-medium">New Booking</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/40 rounded-lg p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#957D65] text-[#E3DCD4] shadow-sm'
                  : 'text-[#222635]/70 hover:text-[#222635] hover:bg-white/50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id 
                  ? 'bg-[#E3DCD4]/20 text-[#E3DCD4]' 
                  : 'bg-[#957D65]/10 text-[#957D65]'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilterStatus(filter.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                filterStatus === filter.id
                  ? 'bg-[#222635] text-[#E3DCD4]'
                  : 'bg-white/40 text-[#222635]/70 hover:bg-white/60 hover:text-[#222635] border border-[#957D65]/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-4">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="group bg-white/60 hover:bg-white/80 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{getTypeIcon(booking.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-serif font-medium text-[#222635] group-hover:text-[#957D65] transition-colors">
                          {booking.title}
                        </h3>
                        <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          <span className="capitalize">{booking.status}</span>
                        </span>
                      </div>
                      <p className="text-[#222635]/60 text-sm">Booking Reference: {booking.bookingRef}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <div className="text-lg font-serif font-medium text-[#222635]">
                        {booking.totalAmount} {booking.currency}
                      </div>
                      <div className={`text-xs ${
                        booking.paymentStatus === 'paid' ? 'text-green-600' : 
                        booking.paymentStatus === 'pending' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {booking.paymentStatus === 'paid' ? '✓ Paid' : 
                         booking.paymentStatus === 'pending' ? '⏳ Pending' : '↩ Refunded'}
                      </div>
                    </div>
                    <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200">
                      <MoreVertical size={16} className="text-[#222635]/60" />
                    </button>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-3 p-3 bg-white/40 rounded-lg">
                    <Calendar size={16} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635]">{booking.date}</div>
                      <div className="text-xs text-[#222635]/60">Date</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/40 rounded-lg">
                    <Clock size={16} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635]">{booking.time}</div>
                      <div className="text-xs text-[#222635]/60">{booking.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/40 rounded-lg">
                    <User size={16} className="text-[#957D65]" />
                    <div>
                      <div className="text-sm font-medium text-[#222635]">{booking.guests} Guests</div>
                      <div className="text-xs text-[#222635]/60">Party Size</div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4 p-3 bg-[#957D65]/5 rounded-lg">
                  <MapPin size={16} className="text-[#957D65]" />
                  <span className="text-[#222635] font-medium">{booking.location}</span>
                </div>

                {/* Special Requests */}
                {booking.specialRequests && (
                  <div className="mb-4 p-3 bg-[#222635]/5 rounded-lg">
                    <h4 className="text-sm font-medium text-[#222635] mb-1">Special Requests</h4>
                    <p className="text-sm text-[#222635]/70">{booking.specialRequests}</p>
                  </div>
                )}

                {/* Contact & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#957D65]/10">
                  <div className="flex items-center space-x-4 text-sm text-[#222635]/60">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{booking.contactPerson}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={14} />
                      <span>{booking.contactPhone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={14} />
                      <span>{booking.contactEmail}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                      <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                        <Edit size={16} className="text-[#957D65]" />
                      </button>
                    )}
                    <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-110">
                      <Download size={16} className="text-[#957D65]" />
                    </button>
                    {booking.status === 'confirmed' && (
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="mt-3 text-xs text-[#222635]/50">
                  <span className="font-medium">Cancellation Policy:</span> {booking.cancellationPolicy}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center p-8">
            <div className="w-20 h-20 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mb-6">
              <Calendar size={32} className="text-[#957D65]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#222635]/60 mb-3">No bookings found</h3>
            <p className="text-[#222635]/40 max-w-md leading-relaxed">
              {activeTab === 'upcoming' ? 'You have no upcoming bookings' : 
               activeTab === 'past' ? 'No past bookings to display' : 'No cancelled bookings'}
            </p>
            <button className="mt-6 px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wide hover:scale-105 transition-all duration-200 shadow-lg shadow-[#957D65]/20">
              Make New Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}