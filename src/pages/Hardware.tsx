import GStyle from './css/Root.module.css';
import Style from './css/Hardware.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util';
import styled from 'styled-components';
import Components from '../images/computerHardwareComponents.gif';

interface RouterProps {
    set: Function;
    children: any;
}

const ArgumentTitle = styled.p`
    margin-left: 3vh;
    font-family: 'Manrope';
    font-size: 35px;
    margin-bottom: 1vh;
    color: #FF4747;
`;

const Argument = styled.p`
    margin-top: 1%;
    margin-left: 2%;
    display: inline-block;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #fff;
`;

// Ogni tanto il translator non worka mhh
// abbiamo scoperto che il cambio lingua sulla pagina Coding fa crashare il sito, solo su quella però
//praticamente se metti in inglese dentro quella pagina crasha tutto    
const HardwareContent = () => {
    return (
        <>
            <Lateral tag="h1">
                <h1 className={GStyle.title}><L string={Locals.hardware.hardware_title}></L></h1>
            </Lateral>

            <div></div>
            
            <ArgumentTitle><L string={Locals.hardware.hardware_p_1}></L></ArgumentTitle>

            <div></div>

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_2}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_3}></L></ArgumentTitle>

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_4}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_5}></L></ArgumentTitle>

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_6}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_7}></L></ArgumentTitle>

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_8}></L></Argument>
            </RedLineLeft>

            <img src={Components} alt="" />
        </>
    );
};

const Hardware = (props: RouterProps) => {
    return (
        <div>
            <HardwareContent></HardwareContent>
        </div>
    );
};

export default Hardware