import GStyle from './css/Root.module.css';
import Style from './css/Web.module.css';
import { Lateral, RedLine } from './Util';

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
            <RedLine>
                <p className={GStyle.text}>
                Il World Wide Web
                è  uno dei principali servizi di Internet
                che permette di navigare e usufruire di miliardi di contenuti
                </p>
            </RedLine>
            <RedLine>
                <p className={GStyle.text}>
                Come è iniziato il WEB ?
                <br></br>
                Correva l’anno 1991, 
                il CERN pubblicava il primo sito Web della storia,
                realizzato da Tim Berners-Lee.
                </p>
            </RedLine>
            <div></div>
            <div></div>
            <iframe className={Style.frame1} src="https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html"></iframe>
            <div></div>

            <div>
                <div className={Style.normalText}>Nacque così il &nbsp;</div>
                <div className={Style.specialText}>World &nbsp;</div>
                <div className={Style.specialText}>Wide &nbsp;</div>
                <div className={Style.specialText}>Web</div>
                <div></div>
                <div></div>
            </div>

            <RedLine>
                <p className={GStyle.text}>
                Nel World Wide Web (WWW), le risorse disponibili 
                sono organizzate secondo un sistema di librerie,
                 o pagine, a cui si può accedere utilizzando appositi 
                 programmi detti browser con cui è possibile navigare 
                 visualizzando file, testi, ipertesti, suoni, immagini, 
                 animazioni, filmati.
                <br></br>
                <br></br>
                La facilità d'utilizzo connessa con l'HTTP e i browser,
                in coincidenza con una vasta diffusione del Personal Computer,
                hanno aperto l'uso di Internet ad una massa di milioni persone,
                anche al di fuori dell'ambito strettamente informatico, 
                con una crescita in progressione esponenziale.
                </p>
            </RedLine>

            <div></div>
            <div>
                <iframe className={Style.Frame2} src="https://ourworldindata.org/grapher/number-of-internet-users-by-country"></iframe></div>
            <div className={GStyle.text}>
                Questa facilità nel reperire le informazioni è resa possibile
                sia dai protocolli di rete, sia dalla presenza, diffusione,
                facilità d’uso ed efficienza dei motori di ricerca e dei web
                browser.
            </div>
        </>
    );
};

const Web = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <WebContent></WebContent>
        </div>
    );
};

export default Web;
