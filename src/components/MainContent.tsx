import React from 'react';
import ToolsGrid from './ToolsGrid';
import './MainContent.css';

interface MainContentProps {
  activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'tools':
        return <ToolsGrid />;
      case 'community':
        return (
          <div className="content-placeholder">
            <h2>LMS Community</h2>
            <p>Community features and discussions will be displayed here.</p>
          </div>
        );
      case 'ai-mastermind':
        return (
          <div className="content-placeholder">
            <h2>Generative AI </h2>
            <p>AI content and resources will be displayed here.</p>
          </div>
        );
      default:
        return <ToolsGrid />;
    }
  };

  return (
    <main className="main-content">
      {renderContent()}
    </main>
  );
};

export default MainContent;