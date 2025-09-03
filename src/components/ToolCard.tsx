import React from 'react';
import { Grid3X3 } from 'lucide-react';
import './ToolCard.css';

interface Tool {
  id: string;
  name: string;
  logo: string;
  gradient: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="tool-card" style={{ background: tool.gradient }}>
      <div className="tool-card-content">
        <div className="tool-header">
          <div className="outskill-logo">
            <Grid3X3 size={16} />
            <span>Outskill</span>
          </div>
          <span className="separator">×</span>
          <div className="tool-info">
            <span className="tool-logo">{tool.logo}</span>
            <span className="tool-name">{tool.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;