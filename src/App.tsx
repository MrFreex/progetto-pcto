import { useState, useEffect} from 'react';
import styled from 'styled-components'
import style from './css/Style.module.css'
import Button from './components/Button'
import { Router } from './library/ConditionalRouter';
import './global.css';
// import axios from 'axios'

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

const Container = styled.div`
  background-color: #000;
  padding: 3em;
`


const Titolo = styled.h1`
  color: bisque;
  font-size: 50px;
`

const Header = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  background:rgba(94, 94, 94, 0.5);
  padding:1vh 0px;
  line-height:auto;
  color:#ffffff;
  color: #333;
  display: grid;
  grid-template-columns: 10% 70% 20% 10%; 
  border-bottom:1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  width: 100%;
  height: 100%;
`

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    // TODO
  }); 
  
  return (<>
    <div className={style.fakeWhite}>
      <Header className={style.Header}>
        <h1>IStory.net</h1>
        <h2>Awesome</h2> 
      </Header>
    </div>
    
    <div className={ style.flexTest }>
      
    </div>
  </>);
}

export default App;
