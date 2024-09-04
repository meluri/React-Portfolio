import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <a href="/path-to-resume.pdf" download>Download Resume</a>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                {/* Add more proficiencies */}
            </ul>
        </section>
    );
}

export default Resume;