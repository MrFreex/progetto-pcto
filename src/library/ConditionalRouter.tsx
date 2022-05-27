import { Children, useState, useRef, useEffect, cloneElement, SetStateAction } from 'react';
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
    
    useEffect(() => {
        (rRef.current as any).scrollTo(0, 0);
    }, [index])

    const childrenWithExtraProp = Children.map(props.children, (child) => {
        return cloneElement(child, {
            set: setActive,
        });
    });

    return (
        <div ref={rRef as any} className={LinkStyle.router} style={{ overflow: 'auto' }}>
            {childrenWithExtraProp[index]}
        </div>
    );
};

interface LinkI {
    to: Number;
    children: any;
    className: any;
    onClick: Function;
    title : string;
}

const Link = (props: LinkI) => {
    return (
        <div title={props.title}
            className={`${LinkStyle.Link} ${props.className}`}
            onClick={() => {
                SetPage({ onClick : props.onClick, to: props.to })
            }}
        >
            {props.children}
        </div>
    );
};

const SetPage = (props: { onClick : Function, to : Number }) => {
    setTimeout(async () => {
        props.onClick();
        await Animate();
        setPage(props.to as SetStateAction<number>);
    }, 0);
}

export { Router, Link, SetPage };
