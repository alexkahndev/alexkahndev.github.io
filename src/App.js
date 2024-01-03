import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ProjectsPage from "./components/pages/ProjectsPage";
import HomePage from "./components/pages/HomePage";
import ModelViewerPage from "./components/pages/ModelViewerPage";
import BackgroundViewerPage from "./components/pages/BackgroundViewerPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import DevelopmentPage from "./components/pages/DevelopmentPage";
import BlogPage from "./components/pages/BlogPage"
import { Stats } from "@react-three/drei";
import Footer from "./components/utils/Footer";

import "./styles/App.css";


const App = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [colorScheme, setColorScheme] = useState("blue-scheme");
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [developmentHovered, setDevelopmentHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  useEffect(() => {
    document.title = pageTitle || "Alex Kahn";

    switch(window.location.pathname) {
      case "/":
        setColorScheme("green-scheme");
        break;
      case "/projects":
        setColorScheme("pink-scheme");
        break;
      case "/about":
        setColorScheme("blue-scheme");
        break;
      case "/contact":
        setColorScheme("purple-scheme");
        break;
      case "/development":
        setColorScheme("yellow-scheme");
        break;
      case "/blog":
        setColorScheme("blue-scheme");
        break;
      default:
        setColorScheme("blue-scheme");
        break;
    }
  }, [window.location.pathname]);

  return (
  
    <div className="app-container">
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomePage 
            setPageTitle={setPageTitle} 
            projectsHovered={projectsHovered}
            setProjectsHovered={setProjectsHovered}
            developmentHovered={developmentHovered}
            setDevelopmentHovered={setDevelopmentHovered}
            aboutHovered={aboutHovered}
            setAboutHovered={setAboutHovered}
            contactHovered={contactHovered}
            setContactHovered={setContactHovered}
          />} />

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

          <Route
            path="/about"
            element={<AboutPage setPageTitle={setPageTitle} />}
          />

          <Route
            path="/contact"
            element={<ContactPage setPageTitle={setPageTitle} />}
          />

          <Route
            path="/development"
            element={<DevelopmentPage setPageTitle={setPageTitle} />}
          />

          <Route
            path="/blog"
            element={<BlogPage setPageTitle={setPageTitle} />}
          />
        </Routes>
        <Stats />
        <Footer 
          colorScheme={colorScheme} 
          projectsHovered={projectsHovered}
          setProjectsHovered={setProjectsHovered}
          developmentHovered={developmentHovered}
          setDevelopmentHovered={setDevelopmentHovered}
          aboutHovered={aboutHovered}
          setAboutHovered={setAboutHovered}
          contactHovered={contactHovered}
          setContactHovered={setContactHovered}
        />
      </HelmetProvider>
    </div>
  );
};

export default App;
