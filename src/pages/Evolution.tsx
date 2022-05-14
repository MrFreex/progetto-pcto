import GStyle from './css/Root.module.css';
import Style from './css/Evolution.module.css';
import { Lateral, RedLineLeft, RedLineRight } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const EvolutionContent = () => {
    return (
        <>
        <div></div>
        </>
    );
};

const Evolution = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <EvolutionContent></EvolutionContent>
        </div>
    );
};

export default Evolution