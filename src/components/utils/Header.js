import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const hideHeaderOnPaths = ["/"]; // Add paths where you want to hide the header

  // Function to check if the header should be hidden on the current path
  const shouldHideHeader = hideHeaderOnPaths.includes(location.pathname);

  // Return null to hide the header if shouldHideHeader is true
  if (shouldHideHeader) {
    return null;
  }

  // Your existing header content and navigation links
  return (
    <div className="app-header">
      <div className="app-header-lhs">
        <div className="app-header-name">Alex Kahn</div>
        <div className="app-header-title">Computer Programmer</div>
      </div>
      <div className="app-header-rhs">
        <Link to="/" className="link">
          About Alex
        </Link>
        <Link to="/blog" className="link">
          Blog
        </Link>
        <Link to="/projects" className="link">
          Projects
        </Link>
        <a
          href="https://github.com/akahn-git"
          className="app-header-a"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
