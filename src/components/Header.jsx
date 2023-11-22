import { useCallback, useRef, useState, useEffect } from "react"
import NavBar from "./NavBar"
import { FiMenu } from "react-icons/fi"
import { HiOutlineSun } from "react-icons/hi"
import { HiMoon } from "react-icons/hi2"
import { useClickOutside } from "../utils/utilityFunctions"

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [theme, setTheme] = useState('light')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef()

    /** Track the window width of the user's device **/
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    /** Handle the user's app color theme preferences **/
    useEffect(() => {
        const userThemePref = getUserThemePref()
        const mediaQueryPref = getMediaQueryPref()

        if (userThemePref) {
            setTheme(userThemePref)
        } else {
            setTheme(mediaQueryPref)
        }

        document.body.dataset.theme = theme

    }, [theme])

    function getMediaQueryPref() {
        const mediaQuery = "(prefers-color-scheme: dark)"
        const mql = window.matchMedia(mediaQuery)
        const hasPreference = typeof mql.matches === "boolean"

        if (hasPreference) {
            return mql.matches ? "dark" : "light";
        }
    }

    function toggleTheme(e) {
        if (!e.key || e.key === "Enter") {
            const newTheme = theme === 'dark' ? 'light' : 'dark'
            setTheme(newTheme)
            storeUserThemePref(newTheme)
            document.body.dataset.theme = theme
        }
    }

    function storeUserThemePref(pref) {
        localStorage.setItem('theme', pref)
    }

    function getUserThemePref() {
        return localStorage.getItem('theme')
    }

    /** Handle hamburger menu state **/
    function toggleMenu(e) {
        if (!e.key || e.key === "Enter")
            setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu(e) {
        if (!e.key || e.key === "Enter") {
            setIsMenuOpen(false)
        }
    }

    /** Close hamburger menu on click outside the menu **/
    const close = useCallback(e => closeMenu(e), [])
    useClickOutside(menuRef, close)

    /** Create header element based on the user's window width **/
    const headerEl = windowWidth < 768 ?
        <div className="header--small">
            <FiMenu onClick={toggleMenu} onKeyDown={toggleMenu} className="icon icon--border menu-icon" tabIndex="0" />
            {isMenuOpen &&
                <NavBar navClass="header__nav-bar--vertical" isMenuOpen={isMenuOpen} closeMenu={closeMenu} menuRef={menuRef} />
            }
        </div>
        : <div className="header--large">
            <NavBar navClass="header__nav-bar--horizontal"/>
        </div>

    return (
        <header>
            {headerEl}
            {theme === "light"
                ? <HiMoon onClick={toggleTheme} onKeyDown={toggleTheme} className="icon icon--border theme-icon" tabIndex="0" /> 
                : <HiOutlineSun onClick={toggleTheme} onKeyDown={toggleTheme} className="icon icon--border theme-icon" tabIndex="0" />}
        </header>
    )
}

export default Header