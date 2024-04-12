import {Outlet} from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

const Layout = () => {
    return (
        <>
            <NavBar />
            <hr/>
            <Outlet />
            <hr/>
            <Footer />
        </>
    )
};

export default Layout;