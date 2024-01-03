import React from 'react';

import '../../styles/Footer.css';

const Footer = ({ 
        colorScheme,
        projectsHovered,
        setProjectsHovered,
        developmentHovered,
        setDevelopmentHovered,
        aboutHovered,
        setAboutHovered,
        contactHovered,
        setContactHovered
    }) => {
    return (
        <footer className={colorScheme}>
            <a href="/">Home</a>
            <a 
                href="/projects" 
                className={projectsHovered ? 'hover' : ''}
                onMouseEnter={() => setProjectsHovered(true)}
                onMouseLeave={() => setProjectsHovered(false)}
            >Projects</a>
            <a 
                href="/development" 
                className={developmentHovered ? 'hover' : ''}
                onMouseEnter={() => setDevelopmentHovered(true)}
                onMouseLeave={() => setDevelopmentHovered(false)}
            >Development</a>
            <a 
                href="/about" 
                className={aboutHovered ? 'hover' : ''}
                onMouseEnter={() => setAboutHovered(true)}
                onMouseLeave={() => setAboutHovered(false)}
            >About</a>
            <a 
                href="/contact" 
                className={contactHovered ? 'hover' : ''}
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
            >Contact</a>
            <p>&copy; 2024 Alex Kahn. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
