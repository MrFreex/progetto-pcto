import GStyle from './css/Root.module.css';
import Style from './css/Home.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util';
import { useState } from 'react';
import Footer from './Footer';

interface RouterProps {
    set: Function;
    children: any;
}

const HomeContent = () => {
    // const [show, setShow] = useState(false);
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
                    <L string={Locals.home.home_p_1} />
                </p>
            </RedLineLeft>

            
                <p className={GStyle.text}>
                    <L string={Locals.home.home_intro} /> {/*obbiettivi e spiegazione*/}
                </p>
            
                <p className={GStyle.text}>
                    <L string={Locals.home.home_intro_c} /> {/*contenuto pagine*/}
                </p>
            
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
