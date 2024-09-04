import React, { useState } from 'react';

function Navigation() {
    const [active, setActive] = useState('About Me');

    const handleNavClick = (section) => {
        setActive(section);
        document.getElementById(section.toLowerCase().replace(' ', '')).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
                <button
                    key={section}
                    className={active === section ? 'active' : ''}
                    onClick={() => handleNavClick(section)}
                >
                    {section}
                </button>
            ))}
        </nav>
    );
}

export default Navigation;