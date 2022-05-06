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
    {  <NavBar /> }
    <h1 id="title">Prova</h1>
    <p id="gray">ciao</p>
      <p id="text">Il World Wide Web
        è  uno dei principali servizi di Internet
        che permette di navigare e usufruire di miliardi 
        di contenuti</p>
  </>);
}

export default App;
