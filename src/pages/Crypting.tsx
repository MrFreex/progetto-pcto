import GStyle from './css/Root.module.css';
import Style from './css/Crypting.module.css';
import Locals from '../library/Localization';
import { Lateral, RedLineLeft, RedLineRight, Localize as L } from './Util';

interface RouterProps {
    set: Function;
    children: any;
}

const CryptingContent = () => {
    return (
        <>
            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}>Crypting</h1>
                </Lateral>
            </div>
            <div></div>
            <div>
                <h1 className={Style.what}><L string={Locals.crypting.crypting_p_1} /></h1>
            </div>
            <div></div>
            <RedLineRight>
                <p className={Style.normalText}>
                E’ un metodo di codificare i messaggi,
                informazioni, e dati,  da un formato
                leggibile(plaintext) ad un formato
                illeggibile da un umano(ciphertext) .
                Si tratta del modo migliore per tenere i dati al
                sicuro da spie, ladri o divulgazioni accidentali. 
                </p>
            </RedLineRight>
            <div></div>
            <div></div>
            <RedLineLeft>
                <p className={GStyle.text}>
                Quando criptate i vostri dati è come se
                metteste i vostri soldi in cassaforte. Per
                aprirla e riavere il vostro denaro avrete
                bisogno di una chiave. 
                </p>
            </RedLineLeft>
        </>
    );
};

const Crypting = (props: RouterProps) => {
    return (
        <div className={GStyle.gridLayout}>
            <CryptingContent></CryptingContent>
        </div>
    );
};

export default Crypting