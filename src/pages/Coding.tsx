import GStyle from './css/Root.module.css';
import Style from './css/Coding.module.css';
import { Lateral, RedLineLeft, RedLineRight } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const CodingContent = () => {
    return (
        <>
        </>
    );
};

const Coding = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <CodingContent></CodingContent>
        </div>
    );
};

export default Coding