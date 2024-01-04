import React, {useState} from 'react';
import ReactModal from 'react-modal';

import '../../styles/ProjectTile.css';

const ProjectTile = ({ title, description, image }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
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
                <button onClick={closeModal}>Close</button>
            </ReactModal>
        </div>
    );
}

export default ProjectTile;
