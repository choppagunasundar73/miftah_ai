import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // App General
    'app.title': 'MIFTAH AI',
    'app.subtitle': 'LUXURY CONCIERGE',
    'app.concierge_online': 'CONCIERGE ONLINE',
    'app.connected': 'Connected',
    
    // Memory Panel
    'memory.title': 'Memory',
    'memory.navigation': 'NAVIGATION',
    'memory.chats': 'Chats',
    'memory.recommendations': 'Recommendations',
    'memory.discover': 'Discover',
    'memory.booking': 'Booking',
    'memory.calendar': 'Calendar',
    'memory.itinerary': 'Itinerary',
    'memory.recent_activity': 'Recent Activity',
    'memory.help_support': 'Help & Support',
    'memory.get_assistance': 'Get assistance anytime',
    'memory.your_conversations': 'Your conversations',
    'memory.ai_suggestions': 'AI suggestions',
    'memory.explore_experiences': 'Explore experiences',
    'memory.reservations': 'Reservations',
    'memory.your_schedule': 'Your schedule',
    'memory.trip_planning': 'Trip planning',
    
    // Chat Interface
    'chat.how_can_help': 'How can I assist you today?',
    'chat.luxury_concierge_ready': 'Your luxury concierge is ready to help with reservations, experiences, and personalized recommendations across the UAE.',
    'chat.ask_anything': 'Ask me anything about luxury experiences in the UAE...',
    'chat.popular_requests': 'Popular Requests',
    'chat.continue_conversation': 'Continue the conversation...',
    'chat.experiences': 'Experiences',
    'chat.attractions': 'Attractions',
    'chat.best_luxury_hotels': 'Best luxury hotels in Dubai Marina',
    'chat.romantic_dinner': 'Can you suggest a romantic dinner place in Dubai?',
    'chat.weekend_safari': 'Weekend desert safari with private guide',
    'chat.photography_spots': 'Photography spots for Instagram in Dubai',
    'chat.recommended_restaurants': 'Miftah Recommended restaurants in Dubai',
    'chat.book_now': 'Book now',
    'chat.explore': 'Explore',
    
    // Preferences
    'preferences.title': 'Preferences',
    'preferences.save': 'Save Preferences',
    'preferences.bambino_mode': 'Bambino Mode',
    'preferences.child_friendly': 'Child-friendly content only',
    'preferences.bambino_description': 'Ensures all content, images, and recommendations are filtered to be age-appropriate for children.',
    'preferences.halal_mode': 'Halal Mode',
    'preferences.halal_friendly': 'Halal-friendly options only',
    'preferences.halal_description': 'All recommendations will include only Halal-certified options for dining and experiences.',
    'preferences.incognito_mode': 'Incognito Mode',
    'preferences.private_browsing': 'Private browsing experience',
    'preferences.incognito_description': 'Minimal interface with private conversations. No history saved, trending recommendations available.',
    'preferences.language': 'Language / اللغة',
    'preferences.interface_language': 'Interface language',
    'preferences.language_description': 'Switch interface language with full RTL support for Arabic',
    'preferences.enter_pin': 'Enter Parental PIN',
    'preferences.pin_description': 'Please enter your PIN to disable Bambino Mode',
    'preferences.enter_pin_placeholder': 'Enter PIN',
    'preferences.incorrect_pin': 'Incorrect PIN. Please try again.',
    'preferences.cancel': 'Cancel',
    'preferences.confirm': 'Confirm',
    'preferences.halal_active': 'Halal Mode Active',
    'preferences.halal_content': 'All content is now Halal-friendly',
    'preferences.language_changed': 'Language Changed',
    'preferences.interface_arabic': 'Interface is now in Arabic',
    'preferences.interface_english': 'Interface is now in English',
    
    // Chats Content
    'chats.conversations': 'Conversations',
    'chats.personalized_history': 'Your personalized chat history with AI concierge services',
    'chats.search_conversations': 'Search conversations...',
    'chats.all_chats': 'All Chats',
    'chats.active': 'Active',
    'chats.archived': 'Archived',
    'chats.no_conversations': 'No conversations found',
    'chats.adjust_search': 'Try adjusting your search terms',
    'chats.start_new': 'Start a new conversation with your AI concierge',
    'chats.start_new_chat': 'Start New Chat',
    
    // Status Bar
    'status.user_name': 'Sarah Al-Mansouri',
    'status.premium_member': 'Premium Member',
    'status.memory_panel': 'Memory Panel',
    'status.toggle_memory': 'Toggle Memory Panel',
    
    // Time
    'time.hours_ago': 'hours ago',
    'time.min_ago': 'min ago',
    'time.yesterday': 'Yesterday',
    'time.days_ago': 'days ago',
    
    // Activities
    'activity.booked_dinner': 'Booked dinner at Nobu',
    'activity.saved_burj': 'Saved Burj Al Arab',
    'activity.viewed_safari': 'Viewed desert safari',
    
    // Recommendations
    'recommendations.title': 'Miftah Recommendations',
    'recommendations.all_recommendations': 'All Recommendations',
    'recommendations.dining': 'Dining',
    'recommendations.experiences': 'Experiences',
    'recommendations.shopping': 'Shopping',
    'recommendations.culture': 'Culture',
    'recommendations.grid': 'Grid',
    'recommendations.list': 'List',
    'recommendations.trending': 'TRENDING',
    'recommendations.match': 'Match',
    'recommendations.ai_insight': 'AI Insight:',
    'recommendations.learn_more': 'Learn More & Book',
    'recommendations.no_found': 'No recommendations found',
    'recommendations.try_different': 'Try selecting a different category or check back later for new AI-powered suggestions',
    
    // Discover
    'discover.title': 'Discover Dubai',
    'discover.subtitle': 'Explore hidden gems and popular attractions across the Emirates',
    'discover.featured': 'Featured',
    'discover.attractions': 'Attractions',
    'discover.hidden_gems': 'Hidden Gems',
    'discover.popular': 'Popular',
    'discover.new': 'New',
    
    // Booking
    'booking.title': 'My Bookings',
    'booking.subtitle': 'Manage your reservations and upcoming experiences',
    'booking.upcoming': 'Upcoming',
    'booking.past': 'Past',
    'booking.cancelled': 'Cancelled',
    'booking.confirmed': 'Confirmed',
    'booking.pending': 'Pending',
    'booking.view_details': 'View Details',
    'booking.cancel': 'Cancel',
    'booking.modify': 'Modify',
    
    // Calendar
    'calendar.title': 'Calendar',
    'calendar.subtitle': 'Your schedule and upcoming events',
    'calendar.today': 'Today',
    'calendar.week': 'Week',
    'calendar.month': 'Month',
    'calendar.add_event': 'Add Event',
    
    // Itinerary
    'itinerary.title': 'My Itinerary',
    'itinerary.subtitle': 'Plan and organize your perfect trip',
    'itinerary.day': 'Day',
    'itinerary.add_activity': 'Add Activity',
    'itinerary.duration': 'Duration',
    'itinerary.location': 'Location',
    
    // Common UI Elements
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.share': 'Share',
    'common.download': 'Download',
    'common.filter': 'Filter',
    'common.search': 'Search',
    'common.sort': 'Sort',
    'common.more': 'More',
    'common.less': 'Less',
    'common.show_all': 'Show All',
    'common.hide': 'Hide',
    'common.expand': 'Expand',
    'common.collapse': 'Collapse',
    
    // Location & Time
    'location.dubai': 'Dubai',
    'location.abu_dhabi': 'Abu Dhabi',
    'location.sharjah': 'Sharjah',
    'location.uae': 'UAE',
    'time.morning': 'Morning',
    'time.afternoon': 'Afternoon',
    'time.evening': 'Evening',
    'time.night': 'Night',
    'time.duration': 'Duration',
    'time.estimated_time': 'Estimated Time',
  },
  ar: {
    // App General
    'app.title': 'مفتاح الذكي',
    'app.subtitle': 'خدمة الكونسيرج الفاخرة',
    'app.concierge_online': 'الكونسيرج متصل',
    'app.connected': 'متصل',
    
    // Memory Panel
    'memory.title': 'الذاكرة',
    'memory.navigation': 'التنقل',
    'memory.chats': 'المحادثات',
    'memory.recommendations': 'التوصيات',
    'memory.discover': 'اكتشف',
    'memory.booking': 'الحجز',
    'memory.calendar': 'التقويم',
    'memory.itinerary': 'خط السير',
    'memory.recent_activity': 'النشاط الأخير',
    'memory.help_support': 'المساعدة والدعم',
    'memory.get_assistance': 'احصل على المساعدة في أي وقت',
    'memory.your_conversations': 'محادثاتك',
    'memory.ai_suggestions': 'اقتراحات الذكي',
    'memory.explore_experiences': 'استكشف التجارب',
    'memory.reservations': 'الحجوزات',
    'memory.your_schedule': 'جدولك',
    'memory.trip_planning': 'تخطيط الرحلة',
    
    // Chat Interface
    'chat.how_can_help': 'كيف يمكنني مساعدتك اليوم؟',
    'chat.luxury_concierge_ready': 'خدمة الكونسيرج الفاخرة جاهزة لمساعدتك في الحجوزات والتجارب والتوصيات الشخصية في جميع أنحاء الإمارات.',
    'chat.ask_anything': 'اسألني أي شيء عن التجارب الفاخرة في الإمارات...',
    'chat.popular_requests': 'الطلبات الشائعة',
    'chat.continue_conversation': 'تابع المحادثة...',
    'chat.hotels': 'الفنادق',
    'chat.dining': 'المطاعم',
    'chat.experiences': 'التجارب',
    'chat.attractions': 'المعالم',
    'chat.best_luxury_hotels': 'أفضل الفنادق الفاخرة في دبي مارينا',
    'chat.romantic_dinner': 'هل يمكنك اقتراح مكان عشاء رومانسي في دبي؟',
    'chat.weekend_safari': 'رحلة سفاري صحراوية في نهاية الأسبوع مع مرشد خاص',
    'chat.photography_spots': 'أماكن التصوير لإنستغرام في دبي',
    'chat.recommended_restaurants': 'مطاعم موصى بها من مفتاح في دبي',
    'chat.book_now': 'احجز الآن',
    'chat.explore': 'استكشف',
    
    // Preferences
    'preferences.title': 'التفضيلات',
    'preferences.save': 'حفظ التفضيلات',
    'preferences.bambino_mode': 'وضع الأطفال',
    'preferences.child_friendly': 'محتوى مناسب للأطفال فقط',
    'preferences.bambino_description': 'يضمن أن جميع المحتويات والصور والتوصيات مفلترة لتكون مناسبة لعمر الأطفال.',
    'preferences.halal_mode': 'الوضع الحلال',
    'preferences.halal_friendly': 'خيارات حلال فقط',
    'preferences.halal_description': 'جميع التوصيات ستشمل فقط الخيارات المعتمدة حلال للطعام والتجارب.',
    'preferences.incognito_mode': 'الوضع الخفي',
    'preferences.private_browsing': 'تجربة تصفح خاصة',
    'preferences.incognito_description': 'واجهة بسيطة مع محادثات خاصة. لا يتم حفظ التاريخ، التوصيات الشائعة متاحة.',
    'preferences.language': 'Language / اللغة',
    'preferences.interface_language': 'لغة الواجهة',
    'preferences.language_description': 'تغيير لغة الواجهة إلى العربية مع دعم كامل للنص من اليمين إلى اليسار',
    'preferences.enter_pin': 'أدخل رقم PIN الوالدي',
    'preferences.pin_description': 'يرجى إدخال رقم PIN الخاص بك لإلغاء وضع الأطفال',
    'preferences.enter_pin_placeholder': 'أدخل رقم PIN',
    'preferences.incorrect_pin': 'رقم PIN غير صحيح. يرجى المحاولة مرة أخرى.',
    'preferences.cancel': 'إلغاء',
    'preferences.confirm': 'تأكيد',
    'preferences.halal_active': 'الوضع الحلال نشط',
    'preferences.halal_content': 'جميع المحتويات الآن حلال',
    'preferences.language_changed': 'تم تغيير اللغة',
    'preferences.interface_arabic': 'الواجهة الآن باللغة العربية',
    'preferences.interface_english': 'الواجهة الآن باللغة الإنجليزية',
    
    // Chats Content
    'chats.conversations': 'المحادثات',
    'chats.personalized_history': 'تاريخ المحادثات الشخصية مع خدمات الكونسيرج الذكي',
    'chats.search_conversations': 'البحث في المحادثات...',
    'chats.all_chats': 'جميع المحادثات',
    'chats.active': 'نشط',
    'chats.archived': 'مؤرشف',
    'chats.no_conversations': 'لم يتم العثور على محادثات',
    'chats.adjust_search': 'جرب تعديل مصطلحات البحث',
    'chats.start_new': 'ابدأ محادثة جديدة مع الكونسيرج الذكي',
    'chats.start_new_chat': 'ابدأ محادثة جديدة',
    
    // Status Bar
    'status.user_name': 'سارة المنصوري',
    'status.premium_member': 'عضو مميز',
    'status.memory_panel': 'لوحة الذاكرة',
    'status.toggle_memory': 'تبديل لوحة الذاكرة',
    
    // Time
    'time.hours_ago': 'منذ ساعات',
    'time.min_ago': 'منذ دقائق',
    'time.yesterday': 'أمس',
    'time.days_ago': 'منذ أيام',
    
    // Activities
    'activity.booked_dinner': 'تم حجز العشاء في نوبو',
    'activity.saved_burj': 'تم حفظ برج العرب',
    'activity.viewed_safari': 'تم عرض رحلة السفاري الصحراوية',
    
    // Recommendations
    'recommendations.title': 'توصيات الذكي الاصطناعي',
    'recommendations.subtitle': 'اقتراحات شخصية منسقة بواسطة الذكاء الاصطناعي بناءً على تفضيلاتك',
    'recommendations.all_recommendations': 'جميع التوصيات',
    'recommendations.dining': 'المطاعم',
    'recommendations.experiences': 'التجارب',
    'recommendations.shopping': 'التسوق',
    'recommendations.culture': 'الثقافة',
    'recommendations.grid': 'شبكة',
    'recommendations.list': 'قائمة',
    'recommendations.trending': 'رائج',
    'recommendations.match': 'تطابق',
    'recommendations.ai_insight': 'رؤية الذكي الاصطناعي:',
    'recommendations.learn_more': 'تعرف أكثر واحجز',
    'recommendations.no_found': 'لم يتم العثور على توصيات',
    'recommendations.try_different': 'جرب اختيار فئة مختلفة أو تحقق لاحقاً للحصول على اقتراحات جديدة مدعومة بالذكاء الاصطناعي',
    
    // Discover
    'discover.title': 'اكتشف دبي',
    'discover.subtitle': 'استكشف الجواهر المخفية والمعالم الشهيرة في جميع أنحاء الإمارات',
    'discover.featured': 'مميز',
    'discover.attractions': 'المعالم',
    'discover.hidden_gems': 'الجواهر المخفية',
    'discover.popular': 'شائع',
    'discover.new': 'جديد',
    
    // Booking
    'booking.title': 'حجوزاتي',
    'booking.subtitle': 'إدارة حجوزاتك والتجارب القادمة',
    'booking.upcoming': 'قادم',
    'booking.past': 'سابق',
    'booking.cancelled': 'ملغي',
    'booking.confirmed': 'مؤكد',
    'booking.pending': 'في الانتظار',
    'booking.view_details': 'عرض التفاصيل',
    'booking.cancel': 'إلغاء',
    'booking.modify': 'تعديل',
    
    // Calendar
    'calendar.title': 'التقويم',
    'calendar.subtitle': 'جدولك والأحداث القادمة',
    'calendar.today': 'اليوم',
    'calendar.week': 'الأسبوع',
    'calendar.month': 'الشهر',
    'calendar.add_event': 'إضافة حدث',
    
    // Itinerary
    'itinerary.title': 'خط سيري',
    'itinerary.subtitle': 'خطط ونظم رحلتك المثالية',
    'itinerary.day': 'يوم',
    'itinerary.add_activity': 'إضافة نشاط',
    'itinerary.duration': 'المدة',
    'itinerary.location': 'الموقع',
    
    // Common UI Elements
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.delete': 'حذف',
    'common.edit': 'تحرير',
    'common.view': 'عرض',
    'common.share': 'مشاركة',
    'common.download': 'تحميل',
    'common.filter': 'تصفية',
    'common.search': 'بحث',
    'common.sort': 'ترتيب',
    'common.more': 'المزيد',
    'common.less': 'أقل',
    'common.show_all': 'عرض الكل',
    'common.hide': 'إخفاء',
    'common.expand': 'توسيع',
    'common.collapse': 'طي',
    
    // Location & Time
    'location.dubai': 'دبي',
    'location.abu_dhabi': 'أبو ظبي',
    'location.sharjah': 'الشارقة',
    'location.uae': 'الإمارات',
    'time.morning': 'الصباح',
    'time.afternoon': 'بعد الظهر',
    'time.evening': 'المساء',
    'time.night': 'الليل',
    'time.duration': 'المدة',
    'time.estimated_time': 'الوقت المقدر',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translationKey = key as keyof typeof translations[typeof language];
    const translation = translations[language][translationKey];
    return translation ? String(translation) : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div 
        className={`${language === 'ar' ? 'rtl' : 'ltr'} font-sans`} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        style={{ fontFamily: language === 'ar' ? 'system-ui, -apple-system, sans-serif' : 'inherit' }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}