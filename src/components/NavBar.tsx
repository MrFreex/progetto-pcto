import Style from '../css/Navbar.module.css'
import { Svg } from './Svg' 



interface NavProps {

}

interface INavButton {
    title: string,
    icon : string
}

const NavButton = (props : INavButton) => {
    return <Svg style={{}} className={Style.navButton} icon={props.icon} />
}

const NavButtons = () => {
    return <div>
        <NavButton title='home' icon='nav/home.svg' />
        <NavButton title='first-website' icon='nav/first-website.svg' />
        <NavButton title='crypting' icon='nav/crypting.svg' />
        <NavButton title='coding' icon='nav/coding.svg' />
        <NavButton title='market' icon='nav/market.svg' />
        <NavButton title='hardware' icon='nav/hardware.svg' />
        <NavButton title='evolution' icon='nav/evolution.svg' />
    </div>
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