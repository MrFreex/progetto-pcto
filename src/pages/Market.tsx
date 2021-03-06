/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css';
import Style from './css/Market.module.css';
/*Queste istruzioni importano Locals, ovvero le traduzioni; il footer e le varie decoorazioni del testo.*/
import Locals from '../library/Localization';
import Footer from './Footer';
import { Lateral, RedLineLeft, Localize as L } from './Util';

//Questo è il contenuto della pagina Market

interface RouterProps {
    set: Function;
    children: any;
}

const MarketContent = () => {
    return (
        <>
            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}> <L string={Locals.market.market_title}></L> </h1>
                </Lateral>
            </div>

            <div></div>
            
            
            <div>
                <RedLineLeft>
                    <p className={GStyle.text}>
                    <L string={ Locals.market.market_p_1}></L>
                    </p>
                </RedLineLeft>
            </div>

            <div></div>
            
            <p className={GStyle.text}>
                <L string={ Locals.market.market_p_2}></L>
            </p>

            <div></div>
            
            <div>
                <RedLineLeft>
                    <p className={GStyle.text}>
                    <L string={ Locals.market.market_p_3}></L>
                    </p>
                </RedLineLeft>
            </div>     

            <iframe className={Style.frame} src="https://ourworldindata.org/grapher/broadband-penetration-by-country?country=PAK~KOR~OWID_WRL~USA~ITA" title={"market"}></iframe>

            
            <div>
                <RedLineLeft>
                <p className={GStyle.text}>
                    <L string={ Locals.market.market_p_4}></L>
                    </p>
                </RedLineLeft>
            </div>

            
        </>
    );
};

const Market = (props: RouterProps) => {
    return (
        <>
            <div className={Style.gridLayout}>
                <MarketContent></MarketContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Market