import { NavLink } from "react-router-dom"
import styles from "../Navigation/navigation.module.css";

const NavItem = ({name, path, updateFunction}) => {

    const handleClick = (event = false) => {
        updateFunction(event);
    }

    return (
        <NavLink onClick={() => updateFunction()} className={({isActive}) => isActive ? styles.active : ""} to={path.toLowerCase() === "home" ? "/" : path.toLowerCase()}>{name}</NavLink>
    )
}

export default NavItem;