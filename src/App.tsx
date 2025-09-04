import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('community');

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="main-layout">
        <Header />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;