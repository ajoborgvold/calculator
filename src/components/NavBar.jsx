import { NavLink } from "react-router-dom"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { CgClose } from "react-icons/cg"

const NavBar = ({ navClass, isMenuOpen, closeMenu, menuRef }) => {
    return (
        <>
            <nav className={navClass} ref={menuRef && menuRef}>
                {isMenuOpen && <CgClose onClick={closeMenu} className="icon close-icon" /> }
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
                    onClick={closeMenu}
                >
                    Home
                </NavLink>
                <NavLink
                    to="percentage"
                    className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
                    onClick={closeMenu}
                >
                    Percentage
                </NavLink>
                <NavLink
                    to="unit-conversion"
                    className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
                    onClick={closeMenu}
                >
                    Unit conversion
                </NavLink>
                <NavLink
                    to="time"
                    className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
                    onClick={closeMenu}
                >
                    Time
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar