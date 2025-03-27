import { useState } from "react";
import NavItem from "../NavItem/NavItem";
import styles from "./navigation.module.css"

const Navigation = () => {
    const links = ["Home", "Contact"];
    const services = ["car-wash", "dog-wash"]
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClick = (event = false) => {
        setToggleMenu(event);
        console.log(toggleMenu)
    }

    return (
        <nav className={styles.menu}>
            {links.map((link, index) => <NavItem updateFunction={handleClick} key={index} path={link} name={link} />)}
            <div className={styles.link} onClick={() => handleClick(!toggleMenu)}>Services</div>

            {toggleMenu &&
            <div className={styles.subMenu}>
                {services.map((item, index) => <NavItem updateFunction={handleClick} key={index} path={`services/${item}`} name={item} />)}
            </div>
            }
        </nav>
    );
};

export default Navigation;
