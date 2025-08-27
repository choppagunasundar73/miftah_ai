import { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  MapPin, 
  User,
  Filter,
  List,
  Grid3X3,
  Bell,
  Star,
  MoreVertical,
  Search
} from 'lucide-react';


export function CalendarContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: 'Nobu Dubai Dinner',
      type: 'dining',
      date: '2025-01-15',
      time: '20:00',
      duration: '3 hours',
      location: 'Atlantis The Palm',
      attendees: 2,
      status: 'confirmed',
      priority: 'high',
      color: '#957D65'
    },
    {
      id: 2,
      title: 'Desert Safari Adventure',
      type: 'adventure',
      date: '2025-01-18',
      time: '15:00',
      duration: '6 hours',
      location: 'Dubai Desert',
      attendees: 4,
      status: 'confirmed',
      priority: 'medium',
      color: '#222635'
    },
    {
      id: 3,
      title: 'Spa Appointment',
      type: 'wellness',
      date: '2025-01-20',
      time: '10:00',
      duration: '4 hours',
      location: 'Burj Al Arab Spa',
      attendees: 1,
      status: 'pending',
      priority: 'low',
      color: '#957D65'
    },
    {
      id: 4,
      title: 'Business Meeting',
      type: 'business',
      date: '2025-01-22',
      time: '14:00',
      duration: '2 hours',
      location: 'DIFC Office',
      attendees: 5,
      status: 'confirmed',
      priority: 'high',
      color: '#222635'
    },
    {
      id: 5,
      title: 'Art Gallery Opening',
      type: 'culture',
      date: '2025-01-25',
      time: '18:00',
      duration: '3 hours',
      location: 'Alserkal Avenue',
      attendees: 2,
      status: 'tentative',
      priority: 'medium',
      color: '#957D65'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      dining: '🍽️',
      adventure: '🏜️',
      wellness: '🧘',
      business: '💼',
      culture: '🎨',
      shopping: '🛍️'
    };
    return icons[type as keyof typeof icons] || '📅';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Day headers
    dayNames.forEach(day => {
      days.push(
        <div key={day} className="p-3 text-center text-sm font-medium text-[#E3DCD4]/80 border-b border-[#957D65]/20 bg-[#222635]">
          {day}
        </div>
      );
    });

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-3 border-b border-r border-[#957D65]/20 bg-[#222635]"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`p-3 border-b border-r border-[#957D65]/20 cursor-pointer hover:bg-[#957D65]/10 transition-all duration-200 min-h-[100px] bg-[#222635] ${
            isSelected ? 'bg-[#957D65]/20 border-[#957D65]/40' : ''
          } ${isToday ? 'bg-[#957D65]/10' : ''}`}
        >
          <div className={`text-sm font-medium mb-2 ${
            isToday ? 'text-[#957D65] font-bold' : 'text-[#E3DCD4]'
          }`}>
            {day}
            {isToday && <div className="w-2 h-2 bg-[#957D65] rounded-full mx-auto mt-1"></div>}
          </div>
          
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div
                key={event.id}
                className="text-xs p-1 rounded bg-[#E3DCD4]/90 border border-[#957D65]/20 truncate hover:bg-[#E3DCD4] transition-colors text-[#222635]"
                style={{ borderLeftColor: event.color, borderLeftWidth: '3px' }}
              >
                <div className="font-medium">{event.time}</div>
                <div className="truncate">{event.title}</div>
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-[#957D65] font-medium">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <div className="h-full flex bg-[#222635]">
      {/* Calendar View */}
      <div className="flex-1 flex flex-col">
        {/* Luxury Header */}
        <div className="px-8 py-6 border-b border-[#957D65]/20 bg-[#222635]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-2" 
                  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                Executive Calendar
              </h1>
              <p className="text-base text-[#E3DCD4]/70 leading-relaxed font-light" 
                 style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                Your curated schedule of exclusive experiences and premium engagements
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20">
                <Filter size={20} />
              </button>
              <div className="flex bg-[#E3DCD4]/5 rounded-xl p-1 border border-[#957D65]/20">
                <button 
                  onClick={() => setViewMode('month')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-400 ${
                    viewMode === 'month' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                  }`}
                  style={{ fontFamily: "'Avenir Next', sans-serif" }}
                >
                  <Grid3X3 size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-400 ${
                    viewMode === 'list' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                  }`}
                  style={{ fontFamily: "'Avenir Next', sans-serif" }}
                >
                  <List size={16} />
                </button>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 shadow-2xl shadow-[#957D65]/30"
                      style={{ fontFamily: "'Avenir Next', sans-serif", fontWeight: 500, letterSpacing: '0.5px' }}>
                <Plus size={20} />
                <span className="text-sm uppercase tracking-wider">Add Event</span>
              </button>
            </div>
          </div>

          {/* Luxury Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#957D65] z-10" size={18} style={{ opacity: 1 }} />
            <input
              type="text"
              placeholder="Search exclusive events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 rounded-2xl text-[#E3DCD4] placeholder-[#E3DCD4]/50 focus:outline-none focus:ring-2 focus:ring-[#957D65]/40 focus:border-[#957D65]/50 transition-all duration-400 backdrop-blur-sm text-sm"
              style={{ fontFamily: "'Avenir Next', sans-serif" }}
            />
          </div>

          {/* Calendar Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft size={20} className="text-[#222635]" />
              </button>
              <h2 className="text-2xl font-serif font-medium text-[#222635] min-w-[200px] text-center">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronRight size={20} className="text-[#222635]" />
              </button>
            </div>
            
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 bg-white/40 text-[#222635] rounded-lg hover:bg-white/60 transition-all duration-200 text-sm font-medium"
            >
              Today
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        {viewMode === 'month' ? (
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-7 h-full">
              {renderCalendarGrid()}
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {events.map(event => (
                <div
                  key={event.id}
                  className="bg-white/60 hover:bg-white/80 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.01] p-6 shadow-sm hover:shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{getTypeIcon(event.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-serif font-medium text-[#222635]">{event.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(event.priority)}`}>
                            {event.priority}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-[#222635]/60">
                          <div className="flex items-center space-x-2">
                            <Calendar size={14} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock size={14} />
                            <span>{event.time} ({event.duration})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User size={14} />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200">
                      <MoreVertical size={16} className="text-[#222635]/60" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar - Selected Date Details */}
      <div className="w-80 border-l border-[#957D65]/10 bg-white/20 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif font-medium text-[#222635]">
              {formatDate(selectedDate)}
            </h3>
            <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200">
              <Bell size={16} className="text-[#957D65]" />
            </button>
          </div>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-white/60 rounded-xl border border-[#957D65]/10 p-4 hover:bg-white/80 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-lg">{getTypeIcon(event.type)}</div>
                      <h4 className="font-medium text-[#222635]">{event.title}</h4>
                    </div>
                    {event.status === 'confirmed' && (
                      <Star size={14} className="text-[#957D65] fill-current" />
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm text-[#222635]/60">
                    <div className="flex items-center space-x-2">
                      <Clock size={12} />
                      <span>{event.time} - {event.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={12} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User size={12} />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-[#957D65]/10">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      event.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      event.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#957D65]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-[#957D65]" />
              </div>
              <h4 className="text-lg font-medium text-[#222635]/60 mb-2">No events today</h4>
              <p className="text-sm text-[#222635]/40 mb-4">Your schedule is free for this date</p>
              <button className="px-4 py-2 bg-[#957D65] text-[#E3DCD4] rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200">
                Add Event
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}