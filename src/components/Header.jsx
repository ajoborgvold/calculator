import { useCallback, useRef, useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"
import NavBar from "./NavBar"
import { useClickOutside } from "../utils/utilities"

const Header = ({ isMenuOpen, toggleMenu, closeMenu }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const menuRef = useRef()

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const close = useCallback(() => closeMenu(), [])
    useClickOutside(menuRef, close)

    const headerEl = windowWidth < 768 ?
        <div className="header--small">
            <FiMenu onClick={toggleMenu} className="icon menu-icon" tabIndex="0" />
            {isMenuOpen && <NavBar navClass="header__nav-bar--vertical" isMenuOpen={isMenuOpen} closeMenu={closeMenu} menuRef={menuRef} />}
        </div>
        : <div className="header--large">
            <NavBar navClass="header__nav-bar--horizontal"/>
        </div>

    return (
        <header>
            {headerEl}
        </header>
    )
}

export default Header