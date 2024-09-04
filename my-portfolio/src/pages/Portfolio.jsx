import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        { title: 'Project 1', imgSrc: 'link-to-image', deployedLink: 'link-to-deployed', githubLink: 'link-to-github' },
        // Add more projects
    ];

    return (
        <section id="portfolio">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

export default Portfolio;