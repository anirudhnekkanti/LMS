import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isDarkPage, setIsDarkPage] = useState(false);

  useEffect(() => {
    // Check if we're on a dark-themed page by looking at the body background
    const checkTheme = () => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const bgColor = computedStyle.backgroundColor;
      // Check if background is dark (gray-900 or similar)
      setIsDarkPage(bgColor === 'rgb(17, 24, 39)' || body.className.includes('bg-gray-900'));
    };

    checkTheme();
    // Re-check when the component mounts or updates
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-105 ${
          isDarkPage ? 'shadow-purple-500/25' : 'shadow-lg'
        }`}
        onClick={() => {
          // Placeholder - no functionality for now
        }}
      >
        <MessageCircle size={20} className="lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default FloatingChat;