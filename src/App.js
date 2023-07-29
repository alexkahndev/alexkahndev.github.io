import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Projects from './routes/Projects';
import Header from './widgets/header';
import Quake2 from './routes/projects/quake2';
import Quake4 from './routes/projects/quake4';
import Twitter from './routes/projects/twitter';
import Flixster from './routes/projects/flixster';
import HomeSceneFiber from './routes/HomeSceneFiber';
import Blog from './routes/Blog';
import Footer from './widgets/footer';
import './Styles.css';

const App = () => {
  const pageTitleRef = useRef('');
  const museumHoveredRef = useRef(false); 
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    document.title = pageTitle || 'Alex Kahn';
  }, [pageTitle]);

  return (
    <div className="app-container">
      {/* Wrap everything with HelmetProvider */}
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<HomeSceneFiber setPageTitle={setPageTitle} museumHoveredRef={museumHoveredRef}/>}
              />
              <Route
                path="/projects"
                element={<Projects setPageTitle={setPageTitle} />}
              />
              <Route path="/blog" element={<Blog setPageTitle={setPageTitle} />} />
              <Route
                path="/projects/quake2"
                element={<Quake2 setPageTitle={setPageTitle} />}
              />
              <Route
                path="/projects/quake4"
                element={<Quake4 setPageTitle={setPageTitle} />}
              />
              <Route
                path="/projects/twitter"
                element={<Twitter setPageTitle={setPageTitle} />}
              />
              <Route
                path="/projects/flixster"
                element={<Flixster setPageTitle={setPageTitle} />}
              />
            </Routes>
          </div>
          <Footer museumHoveredRef={museumHoveredRef}/>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
