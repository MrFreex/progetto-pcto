import GStyle from './css/Root.module.css';
import Style from './css/Evolution.module.css';
import { Lateral, RedLineLeft, RedLineRight } from './Util';
import Footer from './Footer';

interface RouterProps {
    set: Function;
    children: any;
}


//https://opentextbc.ca/computerstudies/chapter/classification-of-generations-of-computers/
//https://www.google.com/search?q=evolution+of+computer&rlz=1C1GCEU_itIT976IT976&oq=evolution+of+computer+&aqs=chrome..69i57j0i19l9.19608j0j7&sourceid=chrome&ie=UTF-8


const EvolutionContent = () => {
    return (
        <>
        <div></div>

        </>
    );
};

const Evolution = (props: RouterProps) => {
    return (
        <>
            <div className={GStyle.gridLayout}>
                <EvolutionContent></EvolutionContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Evolution