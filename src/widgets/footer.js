import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ museumHoveredRef }) => {
 
  return (
    <div className={"app-footer"}>
      <div className="app-footer-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/blog" className="link">Blog</Link>
        <Link to="/projects" className="link">
          Projects
        </Link>
        <Link to="/contact" className="link">Contact</Link>
        <a href="https://github.com/akahn-git" className="app-footer-a" rel="noopener noreferrer" target="_blank">Github</a>
        <a href="https://linkedin.com/in/alexkahn" className="app-footer-a" rel="noopener noreferrer" target="_blank">LinkedIn</a>
      </div>
      <p>© {new Date().getFullYear()} Alex Kahn. All rights reserved.</p>
    </div>
  );
};

export default Footer;
