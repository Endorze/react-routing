import { NavLink } from "react-router-dom"
import styles from "./navigation.module.css";

const NavItem = ({name}) => {
    return (
        <NavLink className={({isActive}) => isActive ? styles.active : ""} to={name.toLowerCase() === "home" ? "/" : name.toLowerCase()}>{name}</NavLink>
    )
}

export default NavItem;