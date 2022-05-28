/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css';  
import Style from './css/Home.module.css';
// Il modulo importato qui sotto facilita in modo Object Oriented la localizzazione del testo
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util'; // Importazione libreria di util ( contiene i componenti utilizzati più spesso )
import Footer from './Footer';


//Questo è il contenuto della pagina Home


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


            <div></div>


            <div></div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                    <L string={Locals.home.home_p_1} /> { /* L è il componente che permette di tradurre una stringa in base alla lingua, è definito nel modulo Util come Localize */ }
                </p>
            </RedLineLeft>

            
                <p className={GStyle.text} style={{ marginLeft: "0.5vw" }}>
                    <L string={Locals.home.home_intro} />
                </p>
            
                <div className={GStyle.text}>
                    <L string={Locals.home.home_intro_c} />
                </div>
            
        </>
    );
};

const Home = (props: RouterProps) => {
    return (
        <>
            <div className={GStyle.gridLayout}>
                <HomeContent></HomeContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
