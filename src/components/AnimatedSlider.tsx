import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Animated from '../css/Animated.module.css';

const AnimDiv = styled.div`
    position: absolute;
    bottom: -3vw;
    background: #212529;
    border-top: #eb5d5d 0.3vh solid;
    left: 3vw;
    z-index: 999999;
    height: 0vw;
    width: 97vw;
`;

let stateAnim: any;

const Animate = () => {
    stateAnim(true);
    return new Promise((solve, r) => {
        setTimeout(() => {
            solve(true);
            stateAnim(false);
        }, 3500 / 2);
    });
};

const AnimatedSlider = () => {
    const [animate, setAnimated] = useState(false);

    useEffect(() => {
        stateAnim = setAnimated;
    }, []);

    return <AnimDiv className={animate ? Animated.Slider : Animated.SliderBack}></AnimDiv>;
};

export { AnimatedSlider, Animate };
