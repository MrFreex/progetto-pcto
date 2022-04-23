import styled from 'styled-components'

const InnerSvg = styled.div`
    
`

interface SvgProps {
    children: any,
    style : any
}

const Svg = (props : SvgProps) => {
    let { style, children } = props;
    return (
        <InnerSvg style={style}>
            {children}
        </InnerSvg>
    )
}


export { Svg }