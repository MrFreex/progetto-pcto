import React from "react";
import GStyle from './css/Root.module.css';
import Style from './css/Footer.module.css';

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