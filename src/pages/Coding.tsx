import GStyle from './css/Root.module.css';
import Style from './css/Coding.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L  } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const CodingContent = () => {
    return (
        <>

            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}> <L string={Locals.coding.coding_title}></L> </h1>
                </Lateral>
            </div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_1}></L>
                </p>
            </RedLineLeft>

            <div></div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_2}></L>
                </p>
            </RedLineLeft>

            <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_3}></L>
            </p>

            <div></div>
            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_4}></L>
                </p>
            </RedLineLeft>

            <div>
                <img src="images/Korotkevich.jpg"></img>
            </div>

            <div>
                <img src="images/Terry-Davis.jpg"></img>
            </div>

            <div></div>

            <p className={GStyle.text}>
                <L string={Locals.coding.coding_p_5}></L>
            </p>

            <RedLineLeft>
                <p className={GStyle.text}>
                    <L string={ Locals.coding.coding_p_6}></L>
                </p>
            </RedLineLeft>
            


        </>
    );
};

const Coding = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <CodingContent></CodingContent>
        </div>
    );
};

export default Coding