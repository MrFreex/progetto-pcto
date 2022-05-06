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
    return <div className={Style.navButtons}>
        <NavButton title='home' icon='HouseBlank' />
        <NavButton title='first-website' icon='Ethernet' />
        <NavButton title='crypting' icon='Crypting' />
        <NavButton title='coding' icon='Coding' />
        <NavButton title='market' icon='Market' />
        <NavButton title='hardware' icon='Hardware' />
        <NavButton title='evolution' icon='Evolution' />
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