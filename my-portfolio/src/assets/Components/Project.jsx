import React from 'react';

function Project({ title, imgSrc, deployedLink, githubLink }) {
    return (
        <div className="project">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>
                <a href={deployedLink} target="_blank">Live App</a> | <a href={githubLink} target="_blank">GitHub</a>
            </p>
        </div>
    );
}

export default Project;