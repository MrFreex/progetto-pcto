/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css';
import Style from './css/Web.module.css';

import Locals from '../library/Localization';
import Footer from './Footer';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util';

//Questo è il contenuto della pagina Web

interface RouterProps {
    set: Function;
    children: any;
}

const WebContent = () => {
    return (
        <>
            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}>Web</h1>
                </Lateral>
            </div>

            <div></div>
            <div></div>
            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.web.web_p_1 } />
                </p>
            </RedLineLeft>
            <RedLineRight>
                <p className={GStyle.text}>
                    <L string={ Locals.web.web_p_2 } />
                </p>
            </RedLineRight>
            <div></div>
            <div></div>
            <iframe className={Style.frame1} src="https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html" title={"iframe"}></iframe>
            <div></div>

            <div>
                <div className={Style.normalText}><L string={ Locals.web.web_p_3}></L></div>
                <div className={Style.specialText}>World &nbsp;</div>
                <div className={Style.specialText}>Wide &nbsp;</div>
                <div className={Style.specialText}>Web</div>
                <div></div>
                <div></div>
            </div>

            <RedLineRight>
                <p className={GStyle.text}>
                <L string={ Locals.web.web_p_4}></L>
                </p>
            </RedLineRight>

            <div></div>
            <div>
                <iframe className={Style.frame2} src="https://ourworldindata.org/grapher/number-of-internet-users-by-country" title={"web"}></iframe>
            </div>
            <RedLineLeft>
                <div className={GStyle.text}>
                    <L string={ Locals.web.web_p_5}></L>
                </div>
            </RedLineLeft>
            
        </>
    );
};

const Web = (props: RouterProps) => {
    return (
        <>
            <div className={GStyle.gridLayout}>
                <WebContent></WebContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Web;