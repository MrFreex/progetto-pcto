import { useEffect, useState } from 'react';
import Style from '../css/Spinner.module.css';

const randomSentences = [
    "Changing Multiverse", "Initiating Jump Drive", "Getting back to the future", "Checking Flux capacitor", "Convincing Rick to open that portal", "Naming a bug as a feature",
    "Pushing to git", "Hating Comic Sans", "Deleting default HTML font", "Spooling quantum drive"
]



export default function LoadingSpinner(props : { back : boolean }) {
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * randomSentences.length))

    useEffect(() => {
        if (!props.back) {
            let newRandom
            do {
                newRandom = Math.floor(Math.random() * randomSentences.length)
            } while (textIndex == newRandom)

            setTextIndex(newRandom)
        }
    }, [props.back])

    return (
        <div className={Style.SpinnerCont}>
            <div className={Style.Spinner}></div>
            <h1>{ randomSentences[textIndex] }...</h1>
        </div>
    );
}
