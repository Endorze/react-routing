import NavItem from "../NavItem/NavItem";


const Navigation = () => {

    const links = ["Home", "Contact", "Services"];

    return (
        <nav>
            {links.map((link, index) => (
                <NavItem key={index} name={link}/>
            ))}
        </nav>
    )
}

export default Navigation;