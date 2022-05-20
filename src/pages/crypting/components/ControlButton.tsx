import React from "react";

import './ControlButton.css'

const style : any = {
    
}

const faStyle : any = {
    display: "inline-block",
    margin : "auto"
}

class ControlButton extends React.Component < { onClick: React.MouseEventHandler<HTMLButtonElement>, text: string, color : string, icon: any }, { hovered:boolean } > {
    constructor(props : any) {
        super(props)

        this.state = {
            hovered : false
        }
    }

    

    render(): React.ReactNode {
        const Icon = this.props.icon
        return <button onClick={this.props.onClick} className="controlButton" style={{...style, ...{ background: this.props.color }}}
            onMouseEnter={() => this.setState({hovered:true})}
            onMouseLeave={() => this.setState({hovered:false})} >

            <div className="btnContent" style={{
                display: "grid",
                gridTemplateColumns: (!this.state.hovered) ?  "100% auto" : "auto auto",
                transition: "0.2s"
            }}>
                <Icon style={{...faStyle, ...{ textAlign: this.state.hovered ? "left" : "center" } }} /> <span> { (this.state.hovered ? this.props.text : "") } </span>
            </div>

            
        </button>
    }
}

export default ControlButton