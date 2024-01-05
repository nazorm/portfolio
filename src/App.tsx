import React, {useState, useEffect} from 'react';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';
import ResumePage from './pages/Resume';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import { NavBar } from './Layout/Navbar';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div className='logo-area'>
          <div className='circle circlelogo'></div>
          <h1 className='logo-title'>Nazorm</h1>
        </div>
        <NavBar />
      </header>
      <div className='content'>
        <LandingPage />
        <About />
        <ResumePage />
        <PortfolioPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
