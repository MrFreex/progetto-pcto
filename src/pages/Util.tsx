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

const Lateral = (props: ILateral) => {
    return (
        <div className={GStyle.graydiv}>
            <p className={GStyle.gray}> &lt;{props.tag}&gt; </p>
            <div>{props.children}</div>
            <p className={GStyle.gray}> &lt;/{props.tag}&gt; </p>
        </div>
    );
};

const RedLineLeft = (props: { children: any }) => {
    return (
        <div className={Style.RedLineLeft}>
            <div></div>
            {props.children}
        </div>
    );
};

const RedLineRight = (props: { children: any }) => {
    return (
        <div className={Style.RedLineRight}>
            {props.children}
            <div></div>     
        </div>
    );
};

const changeLang : React.Dispatch<React.SetStateAction<any>>[] = [];

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

const Localize = (lstring: { string: any }) => {
    let def = "en-US"

    if (bLanguage() === "it-IT") {
        def = "it-IT"
    }

    const [lang, setLang] = useState(cookies.get("lang") ?? def)

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
