/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css'; 
import Style from './css/Hardware.module.css';

import Locals from '../library/Localization';
import { Lateral, RedLineLeft, Localize as L } from './Util';
import Components from '../images/computerHardwareComponents.gif';
import HardDrive from '../images/hardDrive.gif';
import Motherboard  from '../images/motherboard.gif';
import CPU from '../images/CPU.gif';
import RAM from '../images/RAM.gif';
import GraphicsCard from '../images/graphicsCard.gif';
import NetworkCard from '../images/networkCard.gif';
import SoundCard from '../images/soundCard.gif';
import Footer from './Footer';

//Questo è il contenuto della pagina Hardware

interface RouterProps {
    set: Function;
    children: any;
}

  
const HardwareContent = () => {
    return (
        <>
            <Lateral tag="h1">
                <h1 className={GStyle.title}><L string={Locals.hardware.hardware_title}></L></h1>
            </Lateral>

            <div></div>
            
            <p className={Style.title}><L string={Locals.hardware.hardware_p_1}></L></p>

            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_2}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_3}></L></p>

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_4}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_5}></L></p>

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_6}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_7}></L></p>

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_8}></L></p>
            </RedLineLeft>

            <img src={Components} alt="" />

            <p id="Ciao" className={Style.title}><L string={Locals.hardware.hardware_p_9}></L></p>

            <img src={HardDrive} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_10}></L></p>
            </RedLineLeft>

            <p className={GStyle.text}><L string={Locals.hardware.hardware_p_11}></L></p>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_12}></L></p>
            
            <img src={Motherboard} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_13}></L></p>
            </RedLineLeft>

            <p className={GStyle.text}><L string={Locals.hardware.hardware_p_14}></L></p>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_15}></L></p>

            <img src={CPU} className={Style.img} alt="" />
            
            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_16}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_17}></L></p>

            <img src={RAM} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_18}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_19}></L></p>

            <img src={GraphicsCard} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_20}></L></p>
            </RedLineLeft>

            <p className={GStyle.text}><L string={Locals.hardware.hardware_p_21}></L></p>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_22}></L></p>

            <img src={NetworkCard} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_23}></L></p>
            </RedLineLeft>

            <p className={Style.title}><L string={Locals.hardware.hardware_p_24}></L></p>

            <img src={SoundCard} className={Style.img} alt="" />

            <RedLineLeft>
                <p className={GStyle.text}><L string={Locals.hardware.hardware_p_25}></L></p>
            </RedLineLeft>

        </>
    );
};

const Hardware = (props: RouterProps) => {
    return (
        <>
            <div>
                <HardwareContent></HardwareContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Hardware