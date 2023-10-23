import { FiMenu } from "react-icons/fi"
import { useCallback, useRef, useState } from "react"
import NavBar from "./NavBar"
import useClickOutside from "../utils/useClickOutside"

const Header = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {
    const menuRef = useRef()

    const closeMenu = useCallback(() => setIsMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const headerSmall = (
        <div className="header--small">
            <FiMenu onClick={toggleMenu} className="menu-icon" tabIndex="0"/>
            {isMenuOpen && <NavBar navClass="header__nav-bar--vertical" menuRef={menuRef}/>}
        </div>
    )

    const headerLarge = <NavBar navClass="header__nav-bar--horizontal"/>

    return (
        <header>
            {headerSmall}
            {headerLarge}
        </header>
    )
}

export default Header