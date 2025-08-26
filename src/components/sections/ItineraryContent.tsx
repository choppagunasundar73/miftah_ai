import React, { useState } from 'react';
import {
  Route,
  MapPin,
  Clock,
  Calendar,
  User,
  Star,
  Plus,
  Edit,
  Share2,
  Download,
  ChevronRight,
  ChevronDown,
  Plane,
  Car,
  Camera,
  Utensils,
  Bed,
  ShoppingBag,
  Mountain,
  Building
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ItineraryContent() {
  const { t } = useLanguage();
  const [activeItinerary, setActiveItinerary] = useState('dubai-weekend');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const itineraries = [
    {
      id: 'dubai-weekend',
      title: 'Dubai Luxury Weekend',
      destination: 'Dubai, UAE',
      duration: '3 Days, 2 Nights',
      dates: 'Jan 15-17, 2025',
      travelers: 2,
      status: 'confirmed',
      budget: 8500,
      currency: 'AED',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 'abu-dhabi-culture',
      title: 'Abu Dhabi Cultural Journey',
      destination: 'Abu Dhabi, UAE',
      duration: '2 Days, 1 Night',
      dates: 'Jan 22-23, 2025',
      travelers: 2,
      status: 'draft',
      budget: 4200,
      currency: 'AED',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 'ras-al-khaimah',
      title: 'Ras Al Khaimah Adventure',
      destination: 'Ras Al Khaimah, UAE',
      duration: '4 Days, 3 Nights',
      dates: 'Feb 5-8, 2025',
      travelers: 4,
      status: 'planning',
      budget: 12000,
      currency: 'AED',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=200&fit=crop&crop=center'
    }
  ];

  const itineraryDetails = {
    'dubai-weekend': {
      days: [
        {
          day: 1,
          date: 'January 15, 2025',
          title: 'Arrival & Luxury Welcome',
          activities: [
            {
              time: '14:00',
              type: 'transport',
              title: 'Airport Pickup',
              description: 'Private luxury transfer from Dubai International Airport',
              location: 'Dubai International Airport',
              duration: '45 minutes',
              cost: 300,
              status: 'confirmed',
              icon: Car
            },
            {
              time: '15:30',
              type: 'accommodation',
              title: 'Check-in at Burj Al Arab',
              description: 'Royal Suite with panoramic city and ocean views',
              location: 'Burj Al Arab Jumeirah',
              duration: '30 minutes',
              cost: 4500,
              status: 'confirmed',
              icon: Bed
            },
            {
              time: '17:00',
              type: 'experience',
              title: 'Sunset at Skyview Bar',
              description: 'Welcome cocktails with 360-degree city views',
              location: 'Burj Al Arab - Skyview Bar',
              duration: '2 hours',
              cost: 400,
              status: 'confirmed',
              icon: Camera
            },
            {
              time: '20:00',
              type: 'dining',
              title: 'Dinner at Al Muntaha',
              description: 'Fine dining experience 200 meters above sea level',
              location: 'Burj Al Arab - Al Muntaha',
              duration: '3 hours',
              cost: 1200,
              status: 'confirmed',
              icon: Utensils
            }
          ]
        },
        {
          day: 2,
          date: 'January 16, 2025',
          title: 'Desert Adventure & Culture',
          activities: [
            {
              time: '09:00',
              type: 'dining',
              title: 'Breakfast at Sahn Eddar',
              description: 'Traditional Arabic breakfast with international options',
              location: 'Burj Al Arab - Sahn Eddar',
              duration: '1.5 hours',
              cost: 200,
              status: 'confirmed',
              icon: Utensils
            },
            {
              time: '11:00',
              type: 'transport',
              title: 'Desert Safari Pickup',
              description: 'Luxury 4WD vehicle for desert adventure',
              location: 'Hotel Lobby',
              duration: '30 minutes',
              cost: 0,
              status: 'confirmed',
              icon: Car
            },
            {
              time: '11:30',
              type: 'experience',
              title: 'Premium Desert Safari',
              description: 'Dune bashing, camel riding, falconry demonstration',
              location: 'Dubai Desert Conservation Reserve',
              duration: '8 hours',
              cost: 1800,
              status: 'confirmed',
              icon: Mountain
            },
            {
              time: '19:30',
              type: 'dining',
              title: 'Bedouin Camp Dinner',
              description: 'Traditional Arabic feast under the stars',
              location: 'Desert Camp',
              duration: '2 hours',
              cost: 0,
              status: 'confirmed',
              icon: Utensils
            }
          ]
        },
        {
          day: 3,
          date: 'January 17, 2025',
          title: 'Shopping & Departure',
          activities: [
            {
              time: '10:00',
              type: 'shopping',
              title: 'Gold Souk Private Tour',
              description: 'Guided tour with personal shopping assistant',
              location: 'Deira Gold Souk',
              duration: '3 hours',
              cost: 500,
              status: 'confirmed',
              icon: ShoppingBag
            },
            {
              time: '14:00',
              type: 'dining',
              title: 'Farewell Lunch',
              description: 'Contemporary Middle Eastern cuisine',
              location: 'Atmosphere - Burj Khalifa',
              duration: '2 hours',
              cost: 800,
              status: 'confirmed',
              icon: Utensils
            },
            {
              time: '17:00',
              type: 'accommodation',
              title: 'Hotel Check-out',
              description: 'Late checkout and luggage assistance',
              location: 'Burj Al Arab Jumeirah',
              duration: '30 minutes',
              cost: 0,
              status: 'confirmed',
              icon: Bed
            },
            {
              time: '18:00',
              type: 'transport',
              title: 'Airport Transfer',
              description: 'Private luxury transfer to airport',
              location: 'Dubai International Airport',
              duration: '45 minutes',
              cost: 300,
              status: 'confirmed',
              icon: Plane
            }
          ]
        }
      ]
    }
  };

  const currentItinerary = itineraries.find(it => it.id === activeItinerary);
  const currentDetails = itineraryDetails[activeItinerary as keyof typeof itineraryDetails];

  const getActivityTypeColor = (type: string) => {
    const colors = {
      transport: 'bg-blue-100 text-blue-700 border-blue-200',
      accommodation: 'bg-purple-100 text-purple-700 border-purple-200',
      dining: 'bg-orange-100 text-orange-700 border-orange-200',
      experience: 'bg-green-100 text-green-700 border-green-200',
      shopping: 'bg-pink-100 text-pink-700 border-pink-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'planning': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTotalCost = () => {
    if (!currentDetails) return 0;
    return currentDetails.days.reduce((total, day) =>
      total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.cost, 0), 0
    );
  };

  return (
    <div className="h-full flex bg-gradient-to-br from-[#E3DCD4] via-[#E3DCD4] to-[#E3DCD4]/95">
      {/* Itinerary List Sidebar */}
      <div className="w-80 border-r border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-medium text-[#222635]">My Itineraries</h2>
            <button className="p-2 bg-[#957D65] text-[#E3DCD4] rounded-lg hover:scale-105 transition-all duration-200">
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                onClick={() => setActiveItinerary(itinerary.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:scale-[1.02] ${activeItinerary === itinerary.id
                  ? 'bg-[#957D65]/10 border-[#957D65]/30 shadow-sm'
                  : 'bg-white/40 border-[#957D65]/10 hover:bg-white/60'
                  }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-medium text-[#222635] line-clamp-2">
                    {itinerary.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(itinerary.status)}`}>
                    {itinerary.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-[#222635]/60">
                  <div className="flex items-center space-x-2">
                    <MapPin size={12} />
                    <span>{itinerary.destination}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} />
                    <span>{itinerary.dates}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={12} />
                    <span>{itinerary.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={12} />
                      <span>{itinerary.travelers} travelers</span>
                    </div>
                    <div className="font-medium text-[#957D65]">
                      {itinerary.budget} {itinerary.currency}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Itinerary Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-medium text-[#222635] tracking-wide mb-2">
                {currentItinerary?.title}
              </h1>
              <div className="flex items-center space-x-6 text-[#222635]/60">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{currentItinerary?.destination}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{currentItinerary?.dates}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{currentItinerary?.travelers} travelers</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
                <Edit size={20} />
              </button>
              <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
                <Share2 size={20} />
              </button>
              <button className="p-3 bg-white/50 border border-[#957D65]/20 text-[#222635] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-white/70">
                <Download size={20} />
              </button>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(currentItinerary?.status || '')}`}>
                {currentItinerary?.status}
              </span>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white/40 rounded-xl p-4 text-center">
              <div className="text-2xl font-serif font-medium text-[#222635]">{currentDetails?.days.length || 0}</div>
              <div className="text-sm text-[#222635]/60">Days</div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 text-center">
              <div className="text-2xl font-serif font-medium text-[#222635]">
                {currentDetails?.days.reduce((total, day) => total + day.activities.length, 0) || 0}
              </div>
              <div className="text-sm text-[#222635]/60">Activities</div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 text-center">
              <div className="text-2xl font-serif font-medium text-[#957D65]">
                {getTotalCost()} {currentItinerary?.currency}
              </div>
              <div className="text-sm text-[#222635]/60">Total Cost</div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star size={20} className="text-[#957D65] fill-current" />
                <span className="text-2xl font-serif font-medium text-[#222635]">4.9</span>
              </div>
              <div className="text-sm text-[#222635]/60">Experience Rating</div>
            </div>
          </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {currentDetails?.days.map((day) => (
              <div key={day.day} className="mb-8">
                {/* Day Header */}
                <div
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="flex items-center justify-between p-6 bg-white/60 rounded-2xl border border-[#957D65]/10 cursor-pointer hover:bg-white/80 transition-all duration-200 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#957D65] text-[#E3DCD4] rounded-xl flex items-center justify-center font-serif font-bold text-lg">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-medium text-[#222635]">{day.title}</h3>
                      <p className="text-[#222635]/60">{day.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-medium text-[#957D65]">
                        {day.activities.reduce((total, activity) => total + activity.cost, 0)} {currentItinerary?.currency}
                      </div>
                      <div className="text-sm text-[#222635]/60">{day.activities.length} activities</div>
                    </div>
                    {expandedDay === day.day ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>

                {/* Day Activities */}
                {expandedDay === day.day && (
                  <div className="space-y-4 ml-8">
                    {day.activities.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="relative">
                          {/* Timeline Line */}
                          {index < day.activities.length - 1 && (
                            <div className="absolute left-6 top-16 w-0.5 h-16 bg-[#957D65]/20"></div>
                          )}

                          <div className="flex items-start space-x-4 p-6 bg-white/40 rounded-xl border border-[#957D65]/10 hover:bg-white/60 transition-all duration-200">
                            {/* Time & Icon */}
                            <div className="flex flex-col items-center space-y-2">
                              <div className="text-sm font-medium text-[#957D65] bg-[#957D65]/10 px-3 py-1 rounded-full">
                                {activity.time}
                              </div>
                              <div className="w-12 h-12 bg-white rounded-xl border border-[#957D65]/20 flex items-center justify-center">
                                <Icon size={20} className="text-[#957D65]" />
                              </div>
                            </div>

                            {/* Activity Details */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-lg font-medium text-[#222635]">{activity.title}</h4>
                                <div className="flex items-center space-x-2">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getActivityTypeColor(activity.type)}`}>
                                    {activity.type}
                                  </span>
                                  {activity.cost > 0 && (
                                    <span className="text-[#957D65] font-medium">
                                      {activity.cost} {currentItinerary?.currency}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-[#222635]/70 mb-3 leading-relaxed">{activity.description}</p>

                              <div className="flex items-center justify-between text-sm text-[#222635]/60">
                                <div className="flex items-center space-x-4">
                                  <div className="flex items-center space-x-1">
                                    <MapPin size={14} />
                                    <span>{activity.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Clock size={14} />
                                    <span>{activity.duration}</span>
                                  </div>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${activity.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                  }`}>
                                  {activity.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}