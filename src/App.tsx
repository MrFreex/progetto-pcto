import { useState, useEffect } from 'react';
import styled from 'styled-components';
import style from './css/Style.module.css';
import Button from './components/Button';
import { Router } from './library/ConditionalRouter';
import { NavBar } from './components/NavBar';
import { AnimatedSlider } from './components/AnimatedSlider';
import './global.css';
// import axios from 'axios'

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

interface RouterProps {
    set: Function;
    children: any;
}

const Home = (props: RouterProps) => {
    return <div>{props.children}</div>;
};

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
                        <Home set={() => {}}>
                            <p id="gray"> &lt;h1&gt; </p>
                            <h1 id="title">IStory.net</h1>
                            <p id="gray"> &lt;h1&gt; </p>
                            <p id="list"> &gt; </p>
                            <p id="PgCont">Page content</p>
                            <p id="text">
                                Rete di collegamenti informatici a livello planetario che permette la connessione e la
                                comunicazione tra loro di reti locali di computer e banche dati, rendendone disponibili
                                agli utenti le informazioni nella forma di immagini, filmati, ipertesti, musica; tra i
                                principali servizi offerti da Internet, la posta elettronica.
                            </p>
                        </Home>
                        <div>Prova</div>
                    </Router>
                </>
            )}
        </>
    );
}
