import React from 'react';
import { Grid3X3, MoreHorizontal } from 'lucide-react';
import ToolCard from './ToolCard';
import './ToolsGrid.css';

const ToolsGrid: React.FC = () => {
  const tools = [
    {
      id: 'supergrow',
      name: 'Supergrow',
      logo: '🚀',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'numerous',
      name: 'Numerous.ai',
      logo: '🔢',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'perplexity',
      name: 'perplexity',
      logo: '🔍',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'bolt',
      name: 'bolt',
      logo: '⚡',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'heygen',
      name: 'HeyGen',
      logo: '🎭',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'socialsonic',
      name: 'Socialsonic',
      logo: '📱',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'writesonic',
      name: 'Writesonic',
      logo: '✍️',
      gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
    },
    {
      id: 'vapi',
      name: 'VAPI',
      logo: '🎤',
      gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    },
    {
      id: 'fireflies',
      name: 'fireflies.ai',
      logo: '🔥',
      gradient: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)'
    }
  ];

  return (
    <div className="tools-container">
      <div className="tools-header">
        <div className="tools-title">
          <Grid3X3 size={20} />
          <h1>Tools</h1>
        </div>
        <button className="more-button">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="tools-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;