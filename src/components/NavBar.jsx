import { NavLink } from "react-router-dom"
import { CgClose } from "react-icons/cg"

const NavBar = ({ navClass, isMenuOpen, closeMenu, menuRef }) => {
    const navLinkClass = navClass === "header__nav-bar--vertical" ? "nav-link--border" : "nav-link--bare"


    return (
        <>
            <nav className={navClass} ref={menuRef && menuRef}>
                {isMenuOpen && <CgClose onClick={closeMenu} className="icon close-icon" /> }
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? `nav-link ${navLinkClass}--active` : `nav-link ${navLinkClass}`}
                    onClick={closeMenu}
                >
                    Home
                </NavLink>
                <NavLink
                    to="percentage"
                    className={({ isActive }) => isActive ? `nav-link ${navLinkClass}--active` : `nav-link ${navLinkClass}`}
                    onClick={closeMenu}
                >
                    Percentage
                </NavLink>
                <NavLink
                    to="unit-conversion"
                    className={({ isActive }) => isActive ? `nav-link ${navLinkClass}--active` : `nav-link ${navLinkClass}`}
                    onClick={closeMenu}
                >
                    Unit conversion
                </NavLink>
                <NavLink
                    to="time"
                    className={({ isActive }) => isActive ? `nav-link ${navLinkClass}--active` : `nav-link ${navLinkClass}`}
                    onClick={closeMenu}
                >
                    Time
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar