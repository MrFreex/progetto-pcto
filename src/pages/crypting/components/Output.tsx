import React from "react";
import './Output.css';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 80%;
    height: 95%;
    border-radius: 15px;
    background-color: #343A40;
    font-family: "Source Code Pro";
    overflow: hidden;
`;

const ScrollableContent = styled.div`
    text-align: left;
    display: block;
    width: 94%;
    height: 85%;
    margin-left: 2vh;
    margin-top: 2vh;
    margin-right: 1vh;
    margin-bottom: 5%;
    position: relative;
    overflow: scroll;
`;

const SubContent = styled.div`
    padding-top: 1.5vh;
    padding-left: 1.5vh;
    text-align: left;
    width: 100%;
    height: 10%;
    position: relative;
    background-color: #212529;
`;


class Output extends React.Component <{ lines: string[], result : string }> {
    getLines = (lines : string[]) => {
        return lines.map((val) => {
            return <div>{val}</div>
        });
    }

    render(): React.ReactNode {
        return <Container>
            <ScrollableContent>
                { this.getLines(this.props.lines) }
            </ScrollableContent>
            <SubContent>
                Result: { this.props.result }
            </SubContent>
        </Container>
    }
}

export default Output