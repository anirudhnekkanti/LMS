import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-105"
        onClick={() => {
          // Placeholder - no functionality for now
        }}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingChat;