import { useState, useEffect } from 'react';
import { Router } from './library/ConditionalRouter';
import { NavBar } from './components/NavBar';
import { AnimatedSlider } from './components/AnimatedSlider';
import Crypting from './pages/Crypting';
import Home from './pages/Home';
import Web from './pages/Web';
import './global.css';
// import axios from 'axios'

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [loading]);

    return (
        <>
            {loading ? (
                /* spinner */ ''
            ) : (
                <>
                    <NavBar />
                    <AnimatedSlider />
                    <Router>
                        <Home set={() => {}}><></></Home>
                        <Web set={() => {}}><></></Web>
                        <Crypting set={() => {}}><></></Crypting>
                    </Router>
                </>
            )}
        </>
    );
}
