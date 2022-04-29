import { useEffect, useState } from 'react'
import styled from 'styled-components'

const InnerSvg = styled.div`
    
`

interface SvgProps {
    icon : string,
    style : any
}

const Svg = (props : SvgProps) => {
    let { style, icon } = props;
    let [i, setI] = useState("");
    
    // Carica le icone in base alla richiesta
    useEffect(() => {
        (async () => {
            setI((await import("../svg/" + icon)).default);
        })();
    })

    return (
        <InnerSvg style={style}>
            <img src={i} />
        </InnerSvg>
    )
}


export { Svg }