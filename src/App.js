import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProjectsPage from './components/pages/ProjectsPage';
import HomePage from './components/pages/HomePage';
import ModelViewerPage from './components/pages/ModelViewerPage';
import BackgroundViewerPage from './components/pages/BackgroundViewerPage';

import './styles/App.css';

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/model-viewer">Model Viewer</Link>
          </li>
          <li>
            <Link to="/background-viewer">Background Viewer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

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
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default App;
