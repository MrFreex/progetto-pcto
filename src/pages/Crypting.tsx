import GStyle from './css/Root.module.css';
import Style from './css/Web.module.css';
import { Lateral, RedLine } from './Util';

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
                <h1 className={GStyle.what}>Cosa è?</h1>
            </div>
            <div></div>
            <RedLine>
                <p className={GStyle.normalText}>
                E’ un metodo di codificare i messaggi,
                informazioni, e dati,  da un formato
                leggibile(plaintext) ad un formato
                illeggibile da un umano(ciphertext) .
                Si tratta del modo migliore per tenere i dati al
                sicuro da spie, ladri o divulgazioni accidentali. 
                </p>
            </RedLine>
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