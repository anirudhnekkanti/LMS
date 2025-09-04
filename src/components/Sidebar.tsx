import React from 'react';
import {
  Grid3X3,
  Plus,
  BookOpen,
  Users,
  MessageCircle,
  Video,
  FileText,
  HelpCircle,
  Star,
  Heart,
  Headphones,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'community', label: 'Home', icon: Grid3X3, hasSubmenu: true, active: true },
    { id: 'ai-mastermind', label: 'Generative AI', icon: BookOpen, hasSubmenu: false },
    // { id: 'ai-mastermind-2', label: 'Generative AI', icon: BookOpen, hasSubmenu: false },
    // { id: 'tools', label: 'Tools', icon: Grid3X3, hasSubmenu: false, active: true },
  ];

  // const masterminds = [
  //   { id: 'july', label: 'July Mastermind', hasSubmenu: true },
  //   { id: 'cs7-chat', label: 'CS7 | Group Chat', badge: '99+', icon: MessageCircle },
  // ];

  // const accelerator = [
  //   { id: 'c4-accelerator', label: 'C4 | AI Accelerator', hasSubmenu: true },
  //   { id: 'welcome-steps', label: 'Welcome & Next Steps', icon: ChevronRight },
  // ];

  const sprint = [
    { id: 'c3-sprint', label: '14 - Day Sprint', hasSubmenu: true },
    { id: 'welcome-steps-2', label: 'Welcome & Next Steps', icon: ChevronRight },
    { id: 'live-sessions', label: 'Sessions', icon: Video },
    { id: 'resources', label: 'Resources & Recordings', icon: FileText },
    { id: 'introductions', label: 'Introductions', badge: '51', icon: Users },

    { id: 'tech-support', label: 'Tech-Support', badge: '99+', icon: Headphones },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Grid3X3 size={24} />
          <span>LMS</span>
        </div>
        <Plus className="add-icon" size={20} />
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* <div className="sidebar-section">
          <div className="section-header">July Mastermind</div>
          {masterminds.map((item) => (
            <div key={item.id} className="nav-item">
              {item.icon && <item.icon size={16} />}
              <span>{item.label}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <div className="section-header">C4 | AI Accelerator</div>
          {accelerator.map((item) => (
            <div key={item.id} className="nav-item">
              {item.icon && <item.icon size={16} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div> */}

        <div className="sidebar-section">
          <div className="section-header">14 - Day Sprint</div>
          {sprint.map((item) => (
            <div key={item.id} className="nav-item">
              {item.icon && <item.icon size={16} />}
              <span>{item.label}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;