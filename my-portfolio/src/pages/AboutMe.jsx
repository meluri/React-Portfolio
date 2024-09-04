import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

function AboutMe() {
    return (
        <section id="aboutme">
            <img src={profilePic} alt="Developer Name" />
            <p>Short bio about the developer...</p>
        </section>
    );
}

export default AboutMe;