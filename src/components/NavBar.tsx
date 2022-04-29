import Style from '../css/Navbar.module.css'
import { Svg } from './Svg' 



interface NavProps {

}

interface INavButton {
    title: string,
    icon : string
}

const NavButton = (props : INavButton) => {
    return <Svg style={{}} icon='btc.svg' />
}

const NavButtons = () => {
    return <div><NavButton title='Dio porco' icon='a' /></div>
}

const NavBar = (props: NavProps) => {
    return <div className={Style.navbar}>
        <div className={Style.navContent}>
            <h1 className={Style.title}>IS</h1>
            <NavButtons />
        </div>
    </div>
}


export { NavBar }