import GStyle from './css/Root.module.css';
import Style from './css/Hardware.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util';
import styled from 'styled-components';
import Components from '../images/computerHardwareComponents.gif';
import HardDrive from '../images/hardDrive.gif';
import Motherboard  from '../images/motherboard.gif';
import CPU from '../images/CPU.gif';
import RAM from '../images/RAM.gif';
import GraphicsCard from '../images/graphicsCard.gif';
import NetworkCard from '../images/networkCard.gif';
import SoundCard from '../images/soundCard.gif';



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

            <img src={Components} className={Style.img} alt="" />

            <ArgumentTitle><L string={Locals.hardware.hardware_p_9}></L></ArgumentTitle>

            <img src={HardDrive} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_10}></L></Argument>
            </RedLineLeft>

            <Argument><L string={Locals.hardware.hardware_p_11}></L></Argument>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_12}></L></ArgumentTitle>
            
            <img src={Motherboard} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_13}></L></Argument>
            </RedLineLeft>

            <Argument><L string={Locals.hardware.hardware_p_14}></L></Argument>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_15}></L></ArgumentTitle>

            <img src={CPU} className={Style.img} alt="" />
            
            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_16}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_17}></L></ArgumentTitle>

            <img src={RAM} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_18}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_19}></L></ArgumentTitle>

            <img src={GraphicsCard} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_20}></L></Argument>
            </RedLineLeft>

            <Argument><L string={Locals.hardware.hardware_p_21}></L></Argument>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_22}></L></ArgumentTitle>

            <img src={NetworkCard} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_23}></L></Argument>
            </RedLineLeft>

            <ArgumentTitle><L string={Locals.hardware.hardware_p_24}></L></ArgumentTitle>

            <img src={SoundCard} className={Style.img} alt="" />

            <RedLineLeft>
                <Argument><L string={Locals.hardware.hardware_p_25}></L></Argument>
            </RedLineLeft>
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