import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage';
import Dashboard from './components/Dashboard';

type AppState = 'login' | 'onboarding' | 'dashboard';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppState>('login');
  const { user, onboardingData } = useAuth();

  const handleLoginSuccess = () => {
    setCurrentPage('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  // Auto-navigate based on user state
  React.useEffect(() => {
    if (!user) {
      setCurrentPage('login');
    } else if (user && !onboardingData) {
      setCurrentPage('onboarding');
    } else if (user && onboardingData) {
      setCurrentPage('dashboard');
    }
  }, [user, onboardingData]);

  switch (currentPage) {
    case 'login':
      return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    case 'onboarding':
      return <OnboardingPage onOnboardingComplete={handleOnboardingComplete} />;
    case 'dashboard':
      return <Dashboard onLogout={handleLogout} />;
    default:
      return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;