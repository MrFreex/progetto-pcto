import React from "react";
import styled from 'styled-components';

interface thisProps {
    valueCh : Function
}

const style : any = {
    input : {
        borderRadius : "8px",
        height : "3vh",
        border : "none",
        fontFamily : "Source Code Pro",
        background : "#343A40",
        color : "#fff",
        lineHeight : "80%",
        paddingLeft : "1vh"
    },

    inputblock : {
        display : "grid",
        gridTemplateRows : "auto auto",
        gridTemplateColumns : "auto",
        width : "100%",
        marginBottom : "1vh"
    },

    label : {
        textAlign : "left",
        marginBottom : "0.6vh",
        fontFamily : "Source Code Pro"
    }
}

const Input = styled.input`
    border-radius: 8px;
    height: 3vh;
    border: none;
    font-family: "Source Code Pro";
    background: #343A40;
    color: #fff;
    line-height: 80%;
    padding-left: 1vh;
`;

const InputBlock = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    width: 100%;
    margin-bottom: 1vh;
`;

const Label = styled.span`
    text-align: left;
    margin-bottom: 0.6vh;
    font-family: "Source Code Pro";
`;

class Inputs extends React.Component < thisProps > {

    getInput = (placeHolder : string, upperLabel : string, index: Number) => {
        return <InputBlock>
            <Label>{ upperLabel }</Label>
            <input onChange={(e) => { this.props.valueCh(index, e.target.value) }} style={style.input} type="text" placeholder={placeHolder}></input>
        </InputBlock>
    }

    render(): React.ReactNode {
        return <div>
            { [
                this.getInput("Meet me at elephant lake","String",0),
                this.getInput("", "Public Key",1),
                this.getInput("", "Private Key",2)
            ] }
        </div>
    }
}

export default Inputs;