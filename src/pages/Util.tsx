import GStyle from './css/Root.module.css';
import Style from './css/Util.module.css';

interface ILateral {
    tag: string;
    children: any;
}

const Lateral = (props: ILateral) => {
    return (
        <div>
            <p className={GStyle.gray}> &lt;{props.tag}&gt; </p>
            {props.children}
            <p className={GStyle.gray}> &lt;/{props.tag}&gt; </p>
        </div>
    );
};

const RedLine = (props: { children: any }) => {
    return (
        <div className={Style.RedLine}>
            <div></div>
            {props.children}
        </div>
    );
};

export { Lateral, RedLine };
