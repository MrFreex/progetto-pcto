import { useEffect, useState } from 'react';
import Style from '../css/Spinner.module.css';
import Locals from '../library/Localization';
import { Localize as L } from '../pages/Util';




export default function LoadingSpinner(props : { back : boolean }) {
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * Locals.spinner.randomSentences.length))

    useEffect(() => {
        if (!props.back) {
            let newRandom
            do {
                newRandom = Math.floor(Math.random() * Locals.spinner.randomSentences.length)
            } while (textIndex == newRandom)

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
