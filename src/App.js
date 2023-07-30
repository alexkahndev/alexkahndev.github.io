import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProjectsPage from './components/pages/ProjectsPage';
import Header from './components/utils/Header.js';
import HomePage from './components/pages/HomePage';
import Footer from './components/utils/Footer.js';
import './styles/App.css';

const App = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    document.title = pageTitle || 'Alex Kahn';
  }, [pageTitle]);

  return (
    <div className="app-container">
      <HelmetProvider>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage setPageTitle={setPageTitle} />} />
            <Route path="/projects" element={<ProjectsPage setPageTitle={setPageTitle}/>}  />
          </Routes>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default App;
