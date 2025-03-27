import { Outlet } from "react-router-dom";

const Services = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <Outlet />
            <p>Slay queen, SERVE</p>
        </div>
    )
}

export default Services;