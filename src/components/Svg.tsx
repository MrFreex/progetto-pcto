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
        import('../svg/' + icon + '.tsx')
            .then((v) => {
                setIcon(v.default);
            })
            .catch(() => {});
    });

    return (
        <InnerSvg className={props.className} style={style}>
            {Icon}
        </InnerSvg>
    );
};

export { Svg };
