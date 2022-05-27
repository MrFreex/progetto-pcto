import { useEffect, useState } from 'react';
import styled from 'styled-components';

const InnerSvg = styled.div``;

interface SvgProps {
    icon: string;
    style: any;
    className: string;
}

const Svg = (props: SvgProps) => {
    let { style, icon } = props;

    let [Icon, setIcon] = useState(<></>);

    // To Do

    useEffect(() => {
        const importAll = async () => {
            setIcon((await import('../svg/' + icon + '.tsx')).default)
        }

        importAll().catch(console.error);
    });

    return (
        <InnerSvg className={props.className} style={style}>
            {Icon}
        </InnerSvg>
    );
};

export { Svg };
