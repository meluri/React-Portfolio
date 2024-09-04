import React from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <AboutMe />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </>
    );
}

export default App;