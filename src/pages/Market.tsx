import GStyle from './css/Root.module.css';
import Style from './css/Market.module.css';
import { Lateral, RedLineLeft, RedLineRight } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const MarketContent = () => {
    return (
        <>
        </>
    );
};

const Market = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <MarketContent></MarketContent>
        </div>
    );
};

export default Market