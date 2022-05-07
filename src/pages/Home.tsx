import GStyle from './css/Root.module.css';
import Style from './css/Home.module.css';
import { Lateral, RedLine } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const HomeContent = () => {
    return (
        <>
            <div>
                <Lateral tag="h1">
                    <h1 className={Style.title0}>I</h1>
                    <h1 className={Style.title}>Story.net</h1>
                </Lateral>
            </div>

            <div></div>

            <div>
                <p className={Style.list}> &gt; </p>
                <p className={Style.pgCont}>Page content</p>
            </div>

            <div></div>
            <div></div>

            <RedLine>
                <p className={GStyle.text}>
                    Rete di collegamenti informatici a livello planetario che permette la connessione e la comunicazione
                    tra loro di reti locali di computer e banche dati, rendendone disponibili agli utenti le
                    informazioni nella forma di immagini, filmati, ipertesti, musica; tra i principali servizi offerti
                    da Internet, la posta elettronica.
                </p>
            </RedLine>
        </>
    );
};

const Home = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Home;
