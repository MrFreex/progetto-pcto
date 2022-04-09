import { useState } from 'react';
import styled from 'styled-components'

interface SectionProps {
  background: string
}

const Section = styled.section<SectionProps>`
  background-color: ${props => props.background};
  padding: 3em;
`

const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  color: darkblue;
  margin: 0px;
`

const Content = styled.h3`
  font-family: 'Courier New', Courier, monospace;
  font-size: 25px;
  color: blueviolet;
  margin: 0px 0px 10px;
`

const Input = styled.input`
  background-color: lightcyan;
  border: solid 4px darkblue;
`

const Button = styled.button`
  color: darkblue;
  border: solid 4px;
  background-color: lightcyan;
`

function App() {
  const [text, setText] = useState("");

  return (
    <Section background="cornflowerblue">
      <Title> This is a title ✨</Title>
      <Content>{text}</Content>
      <Input type={"text"} onChange={(e) => setText(e.target.value)}></Input>
      <Button onClick={() => alert("Lorem ipsum")}>Ok</Button>
    </Section>
  );
}

export default App;
