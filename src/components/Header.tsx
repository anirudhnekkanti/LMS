import React from 'react';
import { Search, Bell, Bookmark, User } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-links">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">Content Library</a>
        <a href="#" className="nav-link">Members</a>
        <a href="#" className="nav-link">Leaderboard</a>
      </nav>

      <div className="header-actions">
        <div className="search-container">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
        
        <button className="icon-button">
          <Bell size={18} />
        </button>
        
        <button className="icon-button">
          <Bookmark size={18} />
        </button>
        
        <div className="user-avatar">
          <span>AN</span>
        </div>
      </div>
    </header>
  );
};

export default Header;