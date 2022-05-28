import GStyle from './css/Root.module.css'; //Qui stiamo importando i css generali da Root.module.css, rinominandoli in GStyle
import Style from './css/Coding.module.css';
import Locals from '../library/Localization';
import Korotkevich from '../images/Korotkevich.jpg';
import Terry from '../images/Terry-Davis.jpg';
import Female from '../images/Female-developers.png';
import Footer from './Footer';
import { Lateral, RedLineLeft, RedLineRight, Localize as L  } from './Util';

//Questo è il contenuto della pagina Coding

interface RouterProps {
    set: Function;
    children: any;
}

const CodingContent = () => {
    return (
        <>

            <div>
                <Lateral tag="h1">
                    <h1 className={GStyle.title}> <L string={Locals.coding.coding_title}></L> </h1>
                </Lateral>
            </div>
            <div></div>

            <RedLineRight>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_1}></L>
                </p>
            </RedLineRight>

            <div></div>
            <div></div>

            <RedLineLeft>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_2}></L>
                </p>
            </RedLineLeft>

            <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_3}></L>
            </p>

            <div></div>
            <RedLineRight>
                <p className={GStyle.text}>
                <L string={ Locals.coding.coding_p_4}></L>
                </p>
            </RedLineRight>

            <div>
                <img className={Style.images} src={Korotkevich} alt=""></img>
                <img className={Style.images} src={Terry} alt=""></img>
            </div>

            <div style={{ height: "10vh" }}></div>

            <div></div>
                
            <div>
                <img className={Style.images} src={Female} alt=""></img>
            </div>

            <div className={GStyle.textRed}>
            <p className={GStyle.text}>
                <L string={Locals.coding.coding_p_5}></L>
            </p>

            <RedLineLeft>
                <p className={GStyle.text}>
                    <L string={ Locals.coding.coding_p_6}></L>
                </p>
            </RedLineLeft>
            </div>

            <p className={GStyle.text}>
                <L string={Locals.coding.coding_p_7}></L>
            </p>

            <div></div>
            <RedLineLeft>
                <p className={Style.textleft}>
                1. Phyton <br></br>   
                2. Java<br></br>  
                3. JavaScript<br></br>  
                4. Kotlin<br></br>  
                5. R<br></br>  
                6. PHP<br></br>  
                7. Go<br></br>      
                8. C<br></br>  
                9. Swift<br></br>  
                10. C#<br></br>  
                </p>
            </RedLineLeft>

            <div>
                <p className={GStyle.text}>
                    <L string={Locals.coding.coding_p_8}></L>
                </p>
                <RedLineLeft>
                    <p className={GStyle.text}>
                        <L string={ Locals.coding.coding_p_9}></L>
                    </p>
                </RedLineLeft>
            </div>

        </>
    );
};

const Coding = (props: RouterProps) => {
    return (
        <>
            <div className={GStyle.gridLayout}>
                <CodingContent></CodingContent>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Coding