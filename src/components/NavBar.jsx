import { NavLink } from "react-router-dom"

const NavBar = ({ navClass, menuRef }) => {
    return (
        <nav className={navClass} ref={menuRef && menuRef}>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Home
            </NavLink>
            <NavLink
                to="percentage"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Percentage
            </NavLink>
            <NavLink
                to="unit-conversion"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Unit conversion
            </NavLink>
            <NavLink
                to="time"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Time
            </NavLink>
        </nav>
    )
}

export default NavBar