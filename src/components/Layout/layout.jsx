import Footer from "../Footer/footer"
import Header from "../Header/header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;