import { useCallback, useRef, useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"
import NavBar from "./NavBar"
import { useClickOutside } from "../utils/utilities"

const Header = ({isMenuOpen, setIsMenuOpen, toggleMenu}) => {
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

    const closeMenu = useCallback(() => setIsMenuOpen(false), [])
    useClickOutside(menuRef, closeMenu)

    const headerEl = windowWidth < 768 ?
        <div className="header--small">
            <FiMenu onClick={toggleMenu} className="menu-icon" tabIndex="0" />
            {isMenuOpen && <NavBar navClass="header__nav-bar--vertical" menuRef={menuRef} />}
        </div>
        : <NavBar navClass="header__nav-bar--horizontal"/>

    return (
        <header>
            {headerEl}
        </header>
    )
}

export default Header