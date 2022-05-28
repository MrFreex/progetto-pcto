import { useState, useEffect } from 'react';
import { Router } from './library/ConditionalRouter';
import { NavBar } from './components/NavBar';
import { AnimatedSlider } from './components/AnimatedSlider';

/* Qui sotto vengono importate le varie pagine, trova il loro codice nel corrispondente file (nomefile.tsx) */

import Home from './pages/Home';
import Web from './pages/Web';
import Crypting from './pages/Crypting';
import Coding from './pages/Coding';
import Market from './pages/Market';
import Hardware from './pages/Hardware';

/* Importo il css globale (valido per tutte le pagine e non-scoped) */

import './global.css';


export default function App() { // Renderizza l'app
    const [loading, setLoading] = useState(true); // useState dichiara una variabile che, quando aggiornata, richiede un aggiornamento del Component secondo il suo nuovo valore

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
                        <Coding set={() => {}}><></></Coding>
                        <Market set={() => {}}><></></Market>
                        <Hardware set={() => {}}><></></Hardware>
                    </Router>
                </>
            )}
        </>
    );
}