import { useState, useEffect } from 'react';
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
  Search,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Thermometer,
  Wind,
  Eye,
  Droplets,
  CloudFog
} from 'lucide-react';


export function CalendarContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState('Getting location...');
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState({
    temperature: '--',
    condition: 'loading',
    humidity: '--',
    windSpeed: '--',
    visibility: '--',
    weatherCode: null
  });


  // Tomorrow.io API key - replace with your free API key
  const TOMORROW_API_KEY = 'f3PixpvpjHM9P1Pdte8hg5nFksw1Rno2';


  // Update time every second for live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  // Simple fetch from ipapi.co (uses your current IP, HTTPS and CORS-friendly)
  async function getLocationFromIP() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        city: data.city,
        country: data.country_name,
        region: data.region
      };
    } catch (error) {
      console.error('IP location failed:', error);
      // Fallback to ipinfo.io
      try {
        const fallbackResponse = await fetch('https://ipinfo.io/json');
        const fallbackData = await fallbackResponse.json();
        const [lat, lon] = fallbackData.loc.split(',');
        return {
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          city: fallbackData.city,
          country: fallbackData.country,
          region: fallbackData.region
        };
      } catch (fallbackError) {
        console.error('Fallback IP location also failed:', fallbackError);
        return null;
      }
    }
  }

  // Get location and weather on component mount (only once)
  useEffect(() => {
    const initializeLocationAndWeather = async () => {
      // Check if we have cached weather data that's still fresh (within 30 minutes)
      const cachedWeather = localStorage.getItem('calendarWeatherData');
      const cachedLocation = localStorage.getItem('calendarLocationData');
      const lastFetch = localStorage.getItem('calendarWeatherLastFetch');

      const now = Date.now();
      const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds

      // If we have fresh cached data, use it
      if (cachedWeather && cachedLocation && lastFetch && (now - parseInt(lastFetch)) < thirtyMinutes) {
        const weatherData = JSON.parse(cachedWeather);
        const locationData = JSON.parse(cachedLocation);

        setWeather(weatherData);
        setUserLocation(locationData.location);
        setCoordinates(locationData.coordinates);
        return;
      }

      // Fetch location using IP-based service
      const locationData = await getLocationFromIP();
      if (locationData) {
        const locationName = `${locationData.city}, ${locationData.country}`;
        const coords = { lat: locationData.latitude, lon: locationData.longitude };

        setUserLocation(locationName);
        setCoordinates(coords);

        // Cache location data
        localStorage.setItem('calendarLocationData', JSON.stringify({
          location: locationName,
          coordinates: coords
        }));

        // Get weather data
        await fetchWeather(locationData.latitude, locationData.longitude);
      } else {
        setUserLocation('Location unavailable');
      }
    };

    initializeLocationAndWeather();
  }, []);


  // Fetch weather from Tomorrow.io with caching
  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,weatherCode,humidity,windSpeed,visibility&timesteps=current&units=metric&apikey=${TOMORROW_API_KEY}`
      );


      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }


      const data = await response.json();
      const current = data.data.timelines[0].intervals[0].values;


      const weatherData = {
        temperature: Math.round(current.temperature),
        condition: getWeatherCondition(current.weatherCode),
        humidity: Math.round(current.humidity),
        windSpeed: Math.round(current.windSpeed * 3.6), // m/s to km/h
        visibility: Math.round(current.visibility / 1000), // m to km
        weatherCode: current.weatherCode
      };


      setWeather(weatherData);


      // Cache weather data with timestamp
      localStorage.setItem('calendarWeatherData', JSON.stringify(weatherData));
      localStorage.setItem('calendarWeatherLastFetch', Date.now().toString());


    } catch (error) {
      console.error('Weather fetch failed:', error);
      const errorWeather = {
        condition: 'error',
        temperature: '--',
        humidity: '--',
        windSpeed: '--',
        visibility: '--',
        weatherCode: null
      };
      setWeather(errorWeather);
    }
  };


  // Update weather every 30 minutes (only if component stays mounted)
  useEffect(() => {
    if (coordinates) {
      const weatherTimer = setInterval(() => {
        const lastFetch = localStorage.getItem('calendarWeatherLastFetch');
        const now = Date.now();
        const thirtyMinutes = 30 * 60 * 1000;


        // Only fetch if it's been more than 30 minutes since last fetch
        if (!lastFetch || (now - parseInt(lastFetch)) >= thirtyMinutes) {
          fetchWeather(coordinates.lat, coordinates.lon);
        }
      }, 30 * 60 * 1000); // Check every 30 minutes


      return () => clearInterval(weatherTimer);
    }
  }, [coordinates]);


  // Tomorrow.io weather code mapping
  const getWeatherCondition = (code) => {
    const conditions = {
      // Clear
      1000: 'clear',
      // Cloudy
      1100: 'mostly_clear',
      1101: 'partly_cloudy',
      1102: 'mostly_cloudy',
      1001: 'cloudy',
      // Drizzle
      4000: 'drizzle',
      4200: 'drizzle',
      // Rain
      4001: 'rain',
      4201: 'rain',
      // Snow
      5000: 'snow',
      5001: 'snow',
      5100: 'snow',
      5101: 'snow',
      // Freezing Rain
      6000: 'freezing_rain',
      6001: 'freezing_rain',
      6200: 'freezing_rain',
      6201: 'freezing_rain',
      // Ice Pellets
      7000: 'ice_pellets',
      7101: 'ice_pellets',
      7102: 'ice_pellets',
      // Thunderstorm
      8000: 'thunderstorm',
      // Fog
      2000: 'fog',
      2100: 'fog'
    };
    return conditions[code] || 'unknown';
  };


  // Get weather icon component
  const getWeatherIcon = (condition) => {
    const iconProps = { size: 20, className: "text-[#957D65]" };


    switch (condition) {
      case 'clear':
        return <Sun {...iconProps} className="text-yellow-500" />;
      case 'mostly_clear':
        return <Sun {...iconProps} className="text-yellow-400" />;
      case 'partly_cloudy':
        return <Cloud {...iconProps} className="text-gray-300" />;
      case 'mostly_cloudy':
        return <Cloud {...iconProps} className="text-gray-400" />;
      case 'cloudy':
        return <Cloud {...iconProps} className="text-gray-500" />;
      case 'drizzle':
        return <CloudDrizzle {...iconProps} className="text-blue-400" />;
      case 'rain':
        return <CloudRain {...iconProps} className="text-blue-500" />;
      case 'snow':
        return <CloudSnow {...iconProps} className="text-blue-200" />;
      case 'freezing_rain':
        return <CloudRain {...iconProps} className="text-cyan-400" />;
      case 'ice_pellets':
        return <CloudSnow {...iconProps} className="text-gray-300" />;
      case 'thunderstorm':
        return <CloudLightning {...iconProps} className="text-purple-500" />;
      case 'fog':
        return <CloudFog {...iconProps} className="text-gray-400" />;
      case 'loading':
        return <Cloud {...iconProps} className="text-gray-400 animate-pulse" />;
      case 'error':
        return <Cloud {...iconProps} className="text-red-400" />;
      default:
        return <Sun {...iconProps} className="text-yellow-500" />;
    }
  };


  // Format time with timezone
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };


  // Get weather condition display text
  const getWeatherDisplayText = (condition) => {
    const displayTexts = {
      'clear': 'Clear',
      'mostly_clear': 'Mostly Clear',
      'partly_cloudy': 'Partly Cloudy',
      'mostly_cloudy': 'Mostly Cloudy',
      'cloudy': 'Cloudy',
      'drizzle': 'Drizzle',
      'rain': 'Rainy',
      'snow': 'Snowy',
      'freezing_rain': 'Freezing Rain',
      'ice_pellets': 'Ice Pellets',
      'thunderstorm': 'Thunderstorm',
      'fog': 'Foggy',
      'loading': 'Loading...',
      'error': 'Unavailable'
    };
    return displayTexts[condition] || 'Unknown';
  };


  // Your existing events array and helper functions remain the same
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


  // Your existing helper functions remain the same
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };


  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };


  const navigateMonth = (direction) => {
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


  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };


  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  const getTypeIcon = (type) => {
    const icons = {
      dining: '🍽️',
      adventure: '🏜️',
      wellness: '🧘',
      business: '💼',
      culture: '🎨',
      shopping: '🛍️'
    };
    return icons[type] || '📅';
  };


  const getPriorityColor = (priority) => {
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
    dayNames.forEach((day, index) => {
      days.push(
        <div key={day} className={`p-3 text-center text-sm font-medium text-[#E3DCD4]/80 border-b border-[#957D65]/20 bg-[#222635] ${index === 0 ? 'lg:pl-11 pl-3' : ''}`}>
          {day}
        </div>
      );
    });


    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={`p-3 border-b border-r border-[#957D65]/20 bg-[#222635] ${i === 0 ? 'lg:pl-11 pl-3' : ''}`}></div>);
    }


    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();


      // Calculate if this day is in the first column (Sunday)
      const dayOfWeek = (firstDay + day - 1) % 7;
      const isFirstColumn = dayOfWeek === 0;


      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`p-3 border-b border-r border-[#957D65]/20 cursor-pointer hover:bg-[#957D65]/10 transition-all duration-200 min-h-[100px] bg-[#222635] ${isSelected ? 'bg-[#957D65]/20 border-[#957D65]/40' : ''
            } ${isToday ? 'bg-[#957D65]/10' : ''} ${isFirstColumn ? 'lg:pl-11 pl-3' : ''}`}
        >
          <div className={`text-sm font-medium mb-2 ${isToday ? 'text-[#957D65] font-bold' : 'text-[#E3DCD4]'
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
    <div className="h-full flex flex-col lg:flex-row bg-[#222635]">
      {/* Calendar View */}
      <div className="flex-1 flex flex-col">
        {/* Your existing header remains the same */}
        <div className="px-4 sm:px-6 lg:pl-16 lg:pr-8 py-4 sm:py-6 border-b border-[#957D65]/20 bg-[#222635]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                Calendar
              </h1>
              <p className="text-sm sm:text-base text-[#E3DCD4]/70 leading-relaxed font-light"
                style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                Your curated schedule of exclusive experiences and premium engagements
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              <button className="p-2 sm:p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20">
                <Filter size={16} className="sm:w-5 sm:h-5" />
              </button>
              <div className="flex bg-[#E3DCD4]/5 rounded-xl p-1 border border-[#957D65]/20">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-2 sm:px-4 py-2 rounded-lg text-sm transition-all duration-400 ${viewMode === 'month' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                    }`}
                  style={{ fontFamily: "'Avenir Next', sans-serif" }}
                >
                  <Grid3X3 size={14} className="sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2 sm:px-4 py-2 rounded-lg text-sm transition-all duration-400 ${viewMode === 'list' ? 'bg-[#957D65] text-[#E3DCD4]' : 'text-[#E3DCD4]/60 hover:text-[#E3DCD4]'
                    }`}
                  style={{ fontFamily: "'Avenir Next', sans-serif" }}
                >
                  <List size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
              <button className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 shadow-2xl shadow-[#957D65]/30 flex-1 sm:flex-none justify-center"
                style={{ fontFamily: "'Avenir Next', sans-serif", fontWeight: 500, letterSpacing: '0.5px' }}>
                <Plus size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm uppercase tracking-wider">Add Event</span>
              </button>
            </div>
          </div>


          {/* Search Bar */}
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
                <ChevronLeft size={20} className="text-[#E3DCD4]" />
              </button>
              <h2 className="text-2xl font-serif font-medium text-[#E3DCD4] min-w-[200px] text-center">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronRight size={20} className="text-[#E3DCD4]" />
              </button>
            </div>


            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 bg-[#E3DCD4]/20 text-[#E3DCD4] rounded-lg hover:bg-[#E3DCD4]/30 transition-all duration-200 text-sm font-medium"
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
          <div className="flex-1 overflow-y-auto pl-16 pr-6 py-6">
            <div className="space-y-4">
              {events.map(event => (
                <div
                  key={event.id}
                  className="bg-[#E3DCD4]/10 hover:bg-[#E3DCD4]/20 rounded-2xl border border-[#957D65]/10 hover:border-[#957D65]/20 transition-all duration-300 hover:scale-[1.01] p-6 shadow-sm hover:shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{getTypeIcon(event.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-serif font-medium text-[#E3DCD4]">{event.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(event.priority)}`}>
                            {event.priority}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-[#E3DCD4]/60">
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
                      <MoreVertical size={16} className="text-[#E3DCD4]/60" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Sidebar - Updated with Live Data */}
      <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[#957D65]/20 bg-[#222635] lg:max-h-none max-h-96 overflow-y-auto">
        <div className="p-4 sm:p-6">
          {/* Selected Date Events */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif font-medium text-[#E3DCD4]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {formatDate(selectedDate)}
            </h3>
          </div>
          {/* Current Time & Location with Live Weather */}
          <div className="mb-6 p-4 glassmorphic glassmorphic-animated rounded-2xl border border-[#957D65]/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-[#957D65]" />
                <span className="text-lg font-medium text-[#E3DCD4]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                  {formatTime(currentTime)}
                </span>
              </div>
              <button className="p-2 hover:bg-[#957D65]/10 rounded-lg transition-all duration-200">
                <Bell size={16} className="text-[#957D65]" />
              </button>
            </div>


            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={14} className="text-[#957D65]" />
              <span className="text-sm text-[#E3DCD4]/80" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                {userLocation}
              </span>
            </div>


            {/* Live Weather Information */}
            <div className="flex items-center justify-between p-3 bg-[#957D65]/10 rounded-xl liquid-float">
              <div className="flex items-center space-x-3">
                {getWeatherIcon(weather.condition)}
                <div>
                  <div className="text-lg font-semibold text-[#E3DCD4]">
                    {weather.temperature}°C
                  </div>
                  <div className="text-xs text-[#E3DCD4]/60">
                    {getWeatherDisplayText(weather.condition)}
                  </div>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center space-x-1 text-xs text-[#E3DCD4]/60">
                  <Droplets size={10} />
                  <span>{weather.humidity}%</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-[#E3DCD4]/60">
                  <Wind size={10} />
                  <span>{weather.windSpeed} km/h</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-[#E3DCD4]/60">
                  <Eye size={10} />
                  <span>{weather.visibility} km</span>
                </div>
              </div>
            </div>
          </div>




          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-[#E3DCD4]/10 rounded-xl border border-[#957D65]/20 p-4 hover:bg-[#E3DCD4]/20 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-lg">{getTypeIcon(event.type)}</div>
                      <h4 className="font-medium text-[#E3DCD4]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>{event.title}</h4>
                    </div>
                    {event.status === 'confirmed' && (
                      <Star size={14} className="text-[#957D65] fill-current" />
                    )}
                  </div>


                  <div className="space-y-2 text-sm text-[#E3DCD4]/70">
                    <div className="flex items-center space-x-2">
                      <Clock size={12} className="text-[#957D65]" />
                      <span>{event.time} - {event.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={12} className="text-[#957D65]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User size={12} className="text-[#957D65]" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>


                  <div className="mt-3 pt-3 border-t border-[#957D65]/20">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${event.status === 'confirmed' ? 'bg-[#957D65]/20 text-[#957D65]' :
                      event.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
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
              <h4 className="text-lg font-medium text-[#E3DCD4]/80 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>No events today</h4>
              <p className="text-sm text-[#E3DCD4]/60 mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>Your schedule is free for this date</p>
              <button className="px-4 py-2 bg-[#957D65] text-[#E3DCD4] rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200"
                style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                Add Event
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
