import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ChevronDown, ChevronRight, LogOut, User } from 'lucide-react';
import FloatingChat from './FloatingChat';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { user, learningPlan, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">LMS Portal</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900">
                    Home
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Content Library
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Members
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Leaderboard
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {user?.initials}
                  </div>
                  <ChevronDown size={16} />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 w-full text-left"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Navigation</h2>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-white bg-gray-700 px-3 py-2 rounded-md text-sm">
                <span>My Learning Plan</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm">
                <span>Progress</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm">
                <span>Resources</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm">
                <span>Community</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Your Custom Learning Plan</h1>
              <p className="text-gray-400">
                Based on your experience and goals, here's your personalized learning journey.
              </p>
            </div>

            <div className="space-y-4">
              {learningPlan.map((week, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">{week.title}</h3>
                    {expandedItems.includes(index) ? (
                      <ChevronDown className="text-gray-400" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400" size={20} />
                    )}
                  </button>
                  
                  {expandedItems.includes(index) && (
                    <div className="px-6 pb-4 border-t border-gray-700">
                      <ul className="mt-4 space-y-2">
                        {week.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {learningPlan.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400">
                  <User size={48} className="mx-auto mb-4" />
                  <p>No learning plan available. Please complete onboarding first.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <FloatingChat />
    </div>
  );
};

export default Dashboard;