import Style from '../css/Navbar.module.css';
import { Svg } from './Svg';
import { Link } from '../library/ConditionalRouter';
import Config from '../configs/navbar.json';
import { useEffect, useState } from 'react';

interface NavProps {}

interface INavButton {
    title: string;
    icon: string;
    to: Number;
    onClick: Function;
    clicked: boolean;
}

const NavButton = (props: INavButton) => {
    return (
        <Link onClick={props.onClick} className="" to={props.to}>
            <Svg
                style={{}}
                className={Style.navButton + ' ' + (props.clicked ? Style.navClicked : '')}
                icon={props.icon}
            />
        </Link>
    );
};

/*

<NavButton title="home" icon="HouseBlank" />
<NavButton title="first-website" icon="Ethernet" />
<NavButton title="crypting" icon="Crypting" />
<NavButton title="coding" icon="Coding" />
<NavButton title="market" icon="Market" />
<NavButton title="hardware" icon="Hardware" />
<NavButton title="evolution" icon="Evolution" />

*/

const NavButtons = () => {
    const [active, setActive] = useState(0);

    return (
        <div className={Style.navButtons}>
            {Config.buttons.map((value, index) => {
                return (
                    <NavButton
                        onClick={() => {
                            setActive(index);
                        }}
                        clicked={active === index}
                        title={value.name}
                        to={index}
                        icon={value.icon}
                    />
                );
            })}
        </div>
    );
};

const NavBar = (props: NavProps) => {
    return (
        <div className={Style.navbar}>
            <div className={Style.navContent}>
                <h1 className={Style.title}>IS</h1>
                <NavButtons />
            </div>
        </div>
    );
};

export { NavBar };
