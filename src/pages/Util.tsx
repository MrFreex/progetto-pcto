import GStyle from './css/Root.module.css';
import Style from './css/Util.module.css';
import bLanguage from 'detect-browser-language'
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const cookies = new Cookies();



interface ILateral {
    tag: string;
    children: any;
}

const Lateral = (props: ILateral) => {
    return (
        <div>
            <p className={GStyle.gray}> &lt;{props.tag}&gt; </p>
            {props.children}
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

let changeLang : React.Dispatch<React.SetStateAction<any>>[] = [];

const ChooseLanguage = (lang: string) => {
    cookies.set("lang", lang, { path: '/' })
    for (const v of changeLang) {
        v(lang)
    }
}

let activeLang : string;

const GetLanguage = () => {
    return activeLang;
}



const Localize = (lstring : { string: any }) => {
    let def = "en-US"

    if (bLanguage() == "it-IT") {
        def = "it-IT"
    }

    let [lang,setLang] = useState(cookies.get("lang") || def)

    useEffect(() => {
        activeLang = lang;
    })

    changeLang.push(setLang)

    const Comp = lstring.string[lang];
    return <Comp />;
}

export { Lateral, RedLineLeft, RedLineRight, ChooseLanguage, Localize, GetLanguage };
