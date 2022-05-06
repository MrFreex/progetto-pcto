import React from 'react'

interface RouterProps {
    children : any
}



const Router = ( props : RouterProps) => {

    let [active,setActive] = React.useState(<></>);

    let newChild = props.children.map((index : Number, value : any) => {
        return React.cloneElement(value, { set : setActive })
    })

    active = newChild[0];

    return <div>
        { active }
    </div>
}

export { Router }