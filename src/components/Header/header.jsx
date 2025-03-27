import logo from "../../assets/logo.png"
import Navigation from "../Navigation/navigation";

const Header = () => {
    return (
        <header>
            <img src={logo} height={50}></img>
            <Navigation />
        </header>
    )
}

export default Header;