import GStyle from './css/Root.module.css';
import Style from './css/Hardware.module.css';
import { Lateral, RedLineLeft, RedLineRight } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const HardwareContent = () => {
    return (
        <>
        </>
    );
};

const Hardware = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <HardwareContent></HardwareContent>
        </div>
    );
};

export default Hardware