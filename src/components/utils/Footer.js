import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
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

export default Footer;