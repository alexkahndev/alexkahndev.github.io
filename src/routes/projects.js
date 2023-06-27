import quake2 from '../images/Quake2.jpg'
import quake4 from '../images/Quake4.jpg'
import twitter from '../images/Twitter.jpg'
import flixster from '../images/Flixster.jpg'
import { Link } from 'react-router-dom';
import '../App.css';  // Import the CSS file

const Projects = () => {
    return (
      // Add the 'projects' class to the container element
      <div className="projects">  
    
        <div className="project"> 
          <Link to="/projects/quake2" className="profile-link">Quake2 Fishing Mod</Link>
          <img src={quake2} alt="quake2" className="project-image" /> 
        </div>

        <div className="project">
          <Link to="/projects/quake4" className="profile-link">Quake4 PacMan Mod</Link>
          <img src={quake4} alt="quake4" className="project-image" />
        </div>

        <div className="project">
          <Link to="/projects/twitter" className="profile-link">Twitter Android App</Link>
          <img src={twitter} alt="twitter" className="project-image" />
        </div>

        <div className="project">
          <Link to="/projects/flixster" className="profile-link">Flixster Andorid App</Link>
          <img src={flixster} alt="flixster" className="project-image" />
        </div>
        
    </div>
    );
  }
  
  export default Projects;
