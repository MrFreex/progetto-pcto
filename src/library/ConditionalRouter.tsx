import { Children, useState, cloneElement, SetStateAction } from 'react';
import { Animate } from '../components/AnimatedSlider';

import LinkStyle from '../css/Link.module.css';

interface myProps {
    children: any;
}

let setPage: React.Dispatch<React.SetStateAction<number>>;

const Router = (props: myProps) => {
    const [index, setActive] = useState(process.env.NODE_ENV === 'development' ? 0 : 0);

    setPage = setActive;

    const childrenWithExtraProp = Children.map(props.children, (child) => {
        return cloneElement(child, {
            set: setActive,
        });
    });

    return <div style={{ overflow: 'hidden' }}>{childrenWithExtraProp[index]}</div>;
};

interface LinkI {
    to: Number;
    children: any;
    className: any;
}

const Link = (props: LinkI) => {
    return (
        <div
            className={`${LinkStyle.Link} ${props.className}`}
            onClick={async () => {
                await Animate();
                setPage(props.to as SetStateAction<number>);
            }}
        >
            {props.children}
        </div>
    );
};

export { Router, Link };
