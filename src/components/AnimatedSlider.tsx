import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Animated from '../css/Animated.module.css';
import LoadingSpinner from './LoaderSpinner';

const AnimDiv = styled.div`
    position: absolute;
    bottom: -3vw;
    background: #212529;
    border-top: #eb5d5d 0.3vh solid;
    left: 3vw;
    z-index: 999999;
    height: 0;
    width: 97vw;
    @media (max-width: 950px) {
        left: 0;
        width: 100vw;
    }
`;

let stateAnim: any;

const Animate = () => {
    stateAnim(true);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
            stateAnim(false);
        }, 1750);
    });
};
// QUANDO SI CAMBIA PAGINA TRAMITE LA NAVBAR SI RESTA SEMPRE IN BASSO, LA VISUALIZZAZIONE NON VIENE PORTATA IN ALTO 
const AnimatedSlider = () => {
    const [animate, setAnimated] = useState(false);

    useEffect(() => {
        stateAnim = setAnimated;
    }, []);

    return <AnimDiv className={animate ? Animated.Slider : Animated.SliderBack}>
        <LoadingSpinner back={!animate}></LoadingSpinner>
    </AnimDiv>;
};

export { AnimatedSlider, Animate };
