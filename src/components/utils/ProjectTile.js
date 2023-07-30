import React, { useState } from 'react';
import '../styles/ProjectTile.css';

const ProjectTile = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-tile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={title} />
      {!isHovered && <div className="title-overlay">{title}</div>}
      {isHovered && (
        <div className="description-overlay">
          <div className="description-box">
            <div className="description">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
