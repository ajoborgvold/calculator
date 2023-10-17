import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { useCallback, useRef, useState } from "react"
import useClickOutside from "../utils/useClickOutside"

const Header = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {
    const menuRef = useRef()

    const closeMenu = useCallback(() => setIsMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const headerSmall = (
        <div className="header--small">
            <FiMenu onClick={toggleMenu} className="menu-icon" tabIndex="0"/>
            {isMenuOpen && 
                <nav className="nav-bar--vertical" ref={menuRef}>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? 'nav-link nav-link--small nav-link--active' : 'nav-link nav-link--small'}
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="percentage"
                        className={({isActive}) => isActive ? 'nav-link nav-link--small nav-link--active' : 'nav-link nav-link--small'}
                        >
                        Percentage
                    </NavLink>
                    <NavLink
                        to="unit-converters"
                        className={({isActive}) => isActive ? 'nav-link nav-link--small nav-link--active' : 'nav-link nav-link--small'}
                        >
                        Unit
                    converters</NavLink>
                    <NavLink
                        to="age"
                        className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                    >
                        Age
                    </NavLink>
                </nav>
            }
        </div>
        )


    return (
        <header>
            {headerSmall}
            {/* <Link to="/" className="link--regular">Home</Link>
            <Link to="percentage" className="link--regular">Percentage</Link>
            <Link to="unit-converters" className="link--regular">Unit converters</Link>
            <Link to="age" className="link--regular">Age</Link> */}
        </header>
    )
}

export default Header