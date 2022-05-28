import { useEffect, useState } from 'react';
import Style from '../css/Spinner.module.css';
import Locals from '../library/Localization';
import { Localize as L } from '../pages/Util';


//LoaderSpinner è un componente che abbiamo creato e compare come una rotellina che gira e mostra mostra un testo casuale presente all'interno di Localizaiton.tsx nel momento in cui si cambia pagina

export default function LoadingSpinner(props : { back : boolean }) {
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * Locals.spinner.randomSentences.length))

    useEffect(() => {
        if (!props.back) {
            let newRandom
            do {
                newRandom = Math.floor(Math.random() * Locals.spinner.randomSentences.length) //qui prende la frase random da mostrare a schermo
            } while (textIndex === newRandom)

            setTextIndex(newRandom)
        }
    }, [props.back])

    return (
        <div className={Style.SpinnerCont}>
            <div className={Style.Spinner}></div>
            
            <h1><L string={(Locals.spinner.randomSentences)[textIndex]} />...</h1>
        </div>
    );
}
