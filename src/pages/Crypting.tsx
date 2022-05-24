import GStyle from './css/Root.module.css';
import Style from './css/Crypting.module.css';
import Locals from '../library/Localization';
import CryptoCompo from './crypting/CryptoCompo';
import { Lateral, RedLineLeft, RedLineRight, Localize as L, Title } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const CryptingContent = () => {
    return (
        <>
            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}>Crypting</h1>
                </Lateral>
            </div>
            <div></div>
            <div>
                <Title>{Locals.crypting.crypting_p_1}</Title>
            </div>
            <div></div>
            <RedLineRight>
                <p className={Style.normalText}>
                <L string={ Locals.crypting.crypting_p_2}></L> 
                </p>
            </RedLineRight>
            <div></div>
            <div></div>
            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.crypting.crypting_p_3 }></L>
                </p>
            </RedLineLeft>

            <RedLineRight>
            <p className={Style.normalText}>
                <L string={ Locals.crypting.crypting_p_4}></L> 
                </p>
            </RedLineRight>

            <div></div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.crypting.crypting_p_5 }></L>
                </p>
            </RedLineLeft>
            
        </>
    );
};

const Crypting = (props: RouterProps) => {
    return ( <>
        <div className={GStyle.gridLayout}>
            <CryptingContent></CryptingContent>
        </div> 
        <Title>{Locals.crypting.crypting_cryptomath}</Title>
        <CryptoCompo />
    </> );
};

export default Crypting