import React from 'react';

import '../../styles/ProjectTile.css';

const ProjectTile = ({
        title,
        description,
        image,
        link,
        colorScheme
    }) => {
    return (
        <div className="project-tile-container">
            <div className="project-tile">
                <div className="project-tile-image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="project-tile-text-container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={link}>View Project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectTile;