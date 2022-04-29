import { useState, useEffect} from 'react';
import styled from 'styled-components'
import style from './css/Style.module.css'
import Button from './components/Button'
import { Router } from './library/ConditionalRouter';
import { NavBar } from './components/NavBar';
import './global.css';
// import axios from 'axios'

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

function App() {
  return (<>
    <NavBar />
  </>);
}

export default App;
