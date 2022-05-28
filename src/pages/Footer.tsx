/* Queste due istruzioni qui sotto importano dei css detti Scoped, ovvero applicati solo quando referenziati da un elemento */
import GStyle from './css/Root.module.css'; 
import Style from './css/Footer.module.css';
import React from "react";

//Questo è il contenuto del footer

const FooterContent = () => {
    return (
        <>
            <div> 
                <p className={Style.footer}>&copy;  Filippo, Fabio, Alessandro, Enrico</p>
            </div>
        </>)
}

const Footer = () => {
    return (
        <div>
            <FooterContent></FooterContent>
        </div>
    )
}

    
export default Footer;