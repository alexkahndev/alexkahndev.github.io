import React, {useState} from 'react';
import ReactModal from 'react-modal';

import '../../styles/ProjectTile.css';

const ProjectTile = ({ title, description, image, videoId, icons }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (event) => {
        event.stopPropagation();
        setModalIsOpen(true);
    }

    const closeModal = (event) => {
        event.stopPropagation();
        console.log("close modal");
        setModalIsOpen(false);
    }

    return (
        <div className="project-tile" onClick={openModal}>
            <img src={image} alt={title} className="project-image" />
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="project-modal"
                overlayClassName="project-modal-overlay"
            >
                <h1>{title}</h1>    
                <p>{description}</p>
                <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${videoId}?mute=1&loop=1`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
                
                <button onClick={closeModal}>Close</button>
            </ReactModal>
        </div>
    );
}

export default ProjectTile;
