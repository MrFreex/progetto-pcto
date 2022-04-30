import { useEffect, useState } from 'react';
import styled from 'styled-components'

const InnerSvg = styled.div`
    
`

interface SvgProps {
    icon : string,
    style : any,
    className : string
}

const Svg = (props : SvgProps) => {
    let { style, icon } = props;

    

    // To Do
    

    return (
        <InnerSvg className={props.className} style={style}>
            {{ /* ToDo */ }} 
        </InnerSvg>
    )
}


export { Svg }