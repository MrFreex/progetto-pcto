import { Children, useState, useRef, cloneElement, SetStateAction } from 'react';
import { Animate } from '../components/AnimatedSlider';

import LinkStyle from '../css/Link.module.css';

interface myProps {
    children: any;
}

let setPage: React.Dispatch<React.SetStateAction<number>>;

const Router = (props: myProps) => {
    const [index, setActive] = useState(process.env.NODE_ENV === 'development' ? 0 : 0);
    const rRef = useRef()
    setPage = setActive;

    const childrenWithExtraProp = Children.map(props.children, (child) => {
        return cloneElement(child, {
            set: setActive,
        });
    });

    return (
        <div ref={rRef} className={LinkStyle.router} style={{ overflow: 'auto' }}>
            {childrenWithExtraProp[index]}
        </div>
    );
};

interface LinkI {
    to: Number;
    children: any;
    className: any;
    onClick: Function;
}

const Link = (props: LinkI) => {
    return (
        <div
            className={`${LinkStyle.Link} ${props.className}`}
            onClick={() => {
                setTimeout(async () => {
                    props.onClick();
                    await Animate();
                    setPage(props.to as SetStateAction<number>);
                }, 0);
            }}
        >
            {props.children}
        </div>
    );
};

export { Router, Link };
