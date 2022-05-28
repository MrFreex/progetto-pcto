/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css';
import Style from './css/Util.module.css';

import HStyle from './css/Home.module.css'
import bLanguage from 'detect-browser-language'
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const cookies = new Cookies();

interface ILateral {
    tag: string;
    children: any;
}

/* Componente usato per i titoli con effetto tag html, l'effetto con il nome dell'elemento è voluto */
const Lateral = (props: ILateral) => {
    return (
        <div className={GStyle.graydiv}>
            <p className={GStyle.gray}> &lt;{props.tag}&gt; </p>
            <div>{props.children}</div>
            <p className={GStyle.gray}> &lt;/{props.tag}&gt; </p>
        </div>
    );
};

/* Componente che crea una linea rossa a sinistra dell'elemento specificato */
const RedLineLeft = (props: { children: any }) => {
    return (
        <div className={Style.RedLineLeft}>
            <div></div>
            {props.children}
        </div>
    );
};

/* Componente che crea una linea rossa a destra dell'elemento specificato */
const RedLineRight = (props: { children: any }) => {
    return (
        <div className={Style.RedLineRight}>
            {props.children}
            <div></div>     
        </div>
    );
};

const changeLang : React.Dispatch<React.SetStateAction<any>>[] = [];

/* Funzione che imposta la lingua del sito a quella specificata (it-IT o en-US) */
const ChooseLanguage = (lang: string) => {
    cookies.set("lang", lang, { path: '/' })
    for (const v of changeLang) {
        v(lang)
    }
}

let activeLang: string;

const GetLanguage = () => {
    return activeLang;
}

/* Funzione che data una stringa simbolica la traduce in base al linguaggio, la specifica delle traduzioni si trova dentro a library/Localization.tsx */
const Localize = (lstring: { string: any }) => {
    let def = "en-US"

    if (bLanguage() === "it-IT") {
        def = "it-IT"
    }

    /*
        In react, lo state, serve per aggiornare la pagina al Set monitorato di una variabile,
        in questo caso lang è la lingua e setLang è la funzione per impostarla ed aggiornare il componente di conseguenza.
    */

    const [lang, setLang] = useState(cookies.get("lang") ?? def) 

    /* 
        L'useEffect viene invece chiamato a ogni aggiornamento del DOM html di React, salvo quando specificato altrimenti
        con un parametro array aggiuntivo che specifica le dependency dell'aggiornamento, se vuoto viene chiamato solo alla prima renderizzazione del componente.
    */
    useEffect(() => {
        activeLang = lang;
    });

    changeLang.push(setLang)

    const Comp = lstring.string[lang];
    return <Comp />;
}

interface ITitle {
    children: any
}

const TitleP = styled.p`
    display: inline-block;
    margin-top: 3%;
    margin-left: 1%;
    font-style: italic;
    font-weight: 300;
    font-size: 48px;
    line-height: 59px;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Title = (props: ITitle) => {
    return <div>
        <p className={HStyle.list}> &gt; </p>
        <TitleP><Localize string={props.children} /></TitleP>
    </div>
}

export { Lateral, RedLineLeft, RedLineRight, ChooseLanguage, Localize, GetLanguage, Title };
