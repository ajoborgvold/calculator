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
                <nav className="header__nav-bar--vertical" ref={menuRef}>
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
                        className={({isActive}) => isActive ? 'nav-link nav-link--small nav-link--active' : 'nav-link nav-link--small'}
                    >
                        Age
                    </NavLink>
                </nav>
            }
        </div>
    )

    const headerLarge = (
        <nav className="header__nav-bar--horizontal">
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
                to="unit-converters"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Unit converters
            </NavLink>
            <NavLink
                to="age"
                className={({ isActive }) => isActive ? 'nav-link nav-link--regular nav-link--active' : 'nav-link nav-link--regular'}
            >
                Age
            </NavLink>
        </nav>
    )


    return (
        <header>
            {headerSmall}
            {headerLarge}
        </header>
    )
}

export default Header