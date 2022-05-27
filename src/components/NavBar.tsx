import Style from '../css/Navbar.module.css';
import MobileNavC from '../css/MobileNav.module.css';
import { Svg } from './Svg';
import BarsSolid from '../svg/BarsSolid';
import { Link } from '../library/ConditionalRouter';
import Config from '../configs/navbar.json';
import { useEffect, useState } from 'react';
import { ChooseLanguage, GetLanguage } from '../pages/Util'
import HouseBlank from '../svg/HouseBlank';


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
        <Link onClick={props.onClick} className={Style.NavLink} to={props.to}>
            <Svg
                style={{}}
                className={Style.NavButton + ' ' + (props.clicked ? Style.navClicked : '')}
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
                        key={index}
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

const LangSelector = (props: { m? : boolean }) => {

    const [clicked,setClicked] = useState(GetLanguage());
    const handleClick = (index : string) => {
        setClicked(index)
        ChooseLanguage(index)
    }

    useEffect(() => {
        setClicked(GetLanguage())
    }, [])

    return <div className={props.m ? MobileNavC.langSelector : Style.langSelector}>
        <h2 className={ (clicked === "it-IT") ? Style.clicked : "" } onClick={() => handleClick("it-IT")}>IT</h2>
        <h2 className={ (clicked === "en-US") ? Style.clicked : "" } onClick={() => handleClick("en-US")}>EN</h2>
    </div>
}

const NavRow = (props: INavButton) => {
    return (
        <div className={MobileNavC.navRow}>
            <Link onClick={props.onClick} className={Style.NavLink} to={props.to}>
                <Svg
                    style={{}}
                    className={MobileNavC.navRow + ' ' + (props.clicked ? Style.navClicked : '')}
                    icon={props.icon}
                />
            </Link>
            <div><div>{props.title}</div></div>
        </div>
    );
}

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    console.log("Update")
    return <>
        { open && (
            
            <div className={MobileNavC.nav}>
                <div className={MobileNavC.navRows}>
                {Config.buttons.map((value, index) => {
                    return (
                        <NavRow
                            key={index}
                            onClick={() => {
                                setTimeout(() => {
                                    setOpen(false)
                                }, 10)
                            }}
                            clicked={false}
                            title={value.name}
                            to={index}
                            icon={value.icon}
                        />
                    );
                })}
                </div>
            </div>

            )
        }
        <div className={MobileNavC.root}>
        <div className={MobileNavC.navContent}>
            <h1 className={MobileNavC.title}>IS</h1>
            <LangSelector m={true} />
            <div className={MobileNavC.navIcon} onClick={() => setTimeout(() => setOpen(!open), 10) }><BarsSolid /></div>
        </div>
        
        
    </div></>
}

const NavBar = () => {

    const [isMobile, setMobile] = useState(window.innerWidth <= 950);
    useEffect(() => {
        const handler = (e : any) => {
            setTimeout(() => {
                console.log("Exec")
                if (isMobile && window.innerWidth > 950) {
                    return setMobile(false); 
                } else if (!isMobile && window.innerWidth < 950) {
                    return setMobile(true);
                } 
            }, 10)
        }
        
        window.addEventListener('resize', handler)

        return () =>  window.removeEventListener('resize', handler)
    }, [isMobile])

    return ( <>
        { isMobile ? <MobileNav /> : 
            <div className={Style.navbar}>
                <div className={Style.navContent}>
                    <h1 className={Style.title}>IS</h1>
                    <NavButtons />
                    <LangSelector />
                </div>
            </div>
        }
        </>
    );
};

export { NavBar };
