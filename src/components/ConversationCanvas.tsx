import { ChatInterface } from './ChatInterface';
import { RecommendationsContent } from './sections/RecommendationsContent';
import { DiscoverContent } from './sections/DiscoverContent';
import { BookingContent } from './sections/BookingContent';
import { CalendarContent } from './sections/CalendarContent';
import { ItineraryContent } from './sections/ItineraryContent';



interface ConversationCanvasProps {
    memoryOpen: boolean;
    activeSection: string;
}

export function ConversationCanvas({ memoryOpen, activeSection }: ConversationCanvasProps) {
    const renderSectionContent = () => {
        switch (activeSection) {
            case 'chats':
                return <ChatInterface isActive={true} />;
            case 'recommendations':
                return <RecommendationsContent />;
            case 'discover':
                return <DiscoverContent />;
            case 'booking':
                return <BookingContent />;
            case 'calendar':
                return <CalendarContent />;
            case 'itinerary':
                return <ItineraryContent />;
            default:
                return <ChatInterface isActive={true} />;
        }
    };

    return (
        <div className={`flex-1 flex flex-col bg-[#E3DCD4] transition-all duration-300 ${memoryOpen ? 'ml-80' : ''
            }`}>

            {/* Section Content */}
            {renderSectionContent()}

        </div>
    );
}