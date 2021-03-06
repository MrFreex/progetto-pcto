import React from "react";
import ControlButton from "./ControlButton";
import faPlay from '../../../svg/PlaySolid'
import faStop from '../../../svg/StopSolid'
import faArrowRight from '../../../svg/ArrowRight'

const style : any = {
    display: "flex"
}

let Controls = (props : any) => {
    const ret : any = [
        <ControlButton onClick={ () => props.cb("run")} text="Run" color="#4BDB6A" icon={faPlay}></ControlButton>,
        <ControlButton onClick={ () => props.cb("stop")} text="Stop" color="#DB534B" icon={faStop}></ControlButton>,
        <ControlButton onClick={ () => props.cb("step")} text="Step" color="#F0C839" icon={faArrowRight}></ControlButton>
    ]

    return <div style={style}>
        {ret}
    </div>
}

export default Controls