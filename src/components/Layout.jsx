import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import { AppContextProvider } from "../context/AppContext";

const Layout = () => {
    return (
        <>
            <Header />
            <AppContextProvider>
                <Outlet />
            </AppContextProvider>
            <Footer />
        </>
    )
}

export default Layout