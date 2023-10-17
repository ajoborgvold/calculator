import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Header {...props}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout