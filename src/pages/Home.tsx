import GStyle from './css/Root.module.css';
import Style from './css/Home.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineRight, RedLineLeft, Localize as L } from './Util';

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
                <p className={Style.pgCont}><L string={Locals.home.home_content} /></p>
            </div>

            <div></div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                    <L string={Locals.home.home_p_1} />
                </p>
            </RedLineLeft>
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
