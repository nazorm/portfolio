import React from 'react';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';
import ResumePage from './pages/Resume';
import PortfolioPage from './pages/Portfolio';

function App() {
  return (
    <div className="App">
       <LandingPage/>
       <About/>
       <ResumePage/>
       <PortfolioPage/>
    </div>
  );
}

export default App;
