import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import HamburgerMenu from "../library/HamburgerMenu";

const Layout = (props) => {
    return (
        <>
            <Header {...props}/>
            {/* <HamburgerMenu {...props} /> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout