import React, { useState } from 'react';
import ReactModal from 'react-modal';

import '../../styles/ProjectTile.css';
import '../../styles/ProjectModal.css';

const ProjectTile = ({ title, description, image, videoId, demoLink, icons }) => {

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
                <div className="modal-content">
                    <h1>{title}</h1>
                    <p>{description} <a href={demoLink}>Demo</a></p>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}?mute=1&loop=1&autoplay=1&playlist=${videoId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <button onClick={closeModal}>Close</button>
                </div>
            </ReactModal>
        </div>
    );
}

export default ProjectTile;
