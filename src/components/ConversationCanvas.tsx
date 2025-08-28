import { ChatInterface } from './ChatInterface';
import { RecommendationsContent } from './sections/RecommendationsContent';
import { DiscoverContent } from './sections/DiscoverContent';
import { BookingContent } from './sections/BookingContent';
import { CalendarContent } from './sections/CalendarContent';
import { CommunityContent } from './sections/CommunityContent';
import { WalletContent } from './sections/WalletContent';



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
                return <BookingContent />;
            case 'community':
                return <CommunityContent />;
            case 'wallet':
                return <WalletContent />;
            default:
                return <ChatInterface isActive={true} />;
        }
    };

    return (
        <div className={`flex-1 flex flex-col bg-[#E3DCD4] transition-all duration-300 overflow-hidden conversation-canvas ${memoryOpen ? 'ml-80' : ''
            }`}>

            {/* Section Content */}
            <div className="flex-1 overflow-hidden">
                {renderSectionContent()}
            </div>

        </div>
    );
}