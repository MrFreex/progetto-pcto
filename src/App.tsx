import { useState, useEffect} from 'react';
import styled from 'styled-components'
import style from './css/Style.module.css'
import Button from './components/Button'
import './global.css';
import axios from 'axios'

const Container = styled.div`
  background-color: #000;
  padding: 3em;
`

const Body = styled.body`
  background: rgb(29, 29, 29);
  padding: 0;
  margin: 0;
`

const Header = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  background:rgba(94, 94, 94, 0.5);
  padding:10px 0px;
  font-size:52px;
  line-height:auto;
  color:#012D54;
  text-shadow: 2px 2px white;
  border-bottom:1px solid rgba(255, 255, 255, 0.5);
  position: absolute;
  width: 100vw;
  height: 5vh;
`

function App() {
  const [text, setText] = useState("");

  useEffect(() => {

  }); 
  
  return (
    <Header className={style.Header}>
       {/** <Container>
        
       </Container> */}
       <Body></Body>

    </Header>
  );
}

export default App;
