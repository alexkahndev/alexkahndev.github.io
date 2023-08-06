import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProjectsPage from './components/pages/ProjectsPage';
import HomePage from './components/pages/HomePage';
import ModelViewerPage from './components/pages/ModelViewerPage';
import BackgroundViewerPage from './components/pages/BackgroundViewerPage';
import Footer from './components/utils/Footer';
import './styles/App.css';

const App = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    document.title = pageTitle || 'Alex Kahn';
  }, [pageTitle]);

  return (
    <div>
      <HelmetProvider>
        <Routes>
          <Route
            path="/"
            element={<HomePage setPageTitle={setPageTitle} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage setPageTitle={setPageTitle} />}
          />

          <Route
            path="/model-viewer"
            element={<ModelViewerPage setPageTitle={setPageTitle} />}
          />

          <Route
            path="/background-viewer"
            element={<BackgroundViewerPage setPageTitle={setPageTitle} />}
          />
          
        </Routes>
       
      </HelmetProvider>
    </div>
  );
};

export default App;
