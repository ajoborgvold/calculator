import { useCallback, useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { FiMenu } from "react-icons/fi"
import { FaHome } from "react-icons/fa"
import { HiOutlineSun } from "react-icons/hi"
import { HiMoon } from "react-icons/hi2"
import useClickOutside from "../hooks/useClickOutside"
import useGetWindowWidth from "../hooks/useGetWindowWidth"

const Header = () => {
    const [theme, setTheme] = useState("light")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef()

  /** Close the vertical menu on smaller screens with keyboard navigation by pressing the escape key **/
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
            setIsMenuOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

  /** Handle the user's app color theme preferences **/
    useEffect(() => {
        const userThemePref = getUserThemePref()
        const mediaQueryPref = getMediaQueryPref()

        if (userThemePref) {
            setTheme(userThemePref)
            updatePWAThemeColor(userThemePref)
        } else {
            setTheme(mediaQueryPref)
            updatePWAThemeColor(mediaQueryPref)
        }

        document.body.dataset.theme = theme
        }, [theme])

    function getMediaQueryPref() {
        const mediaQuery = "(prefers-color-scheme: dark)"
        const mql = window.matchMedia(mediaQuery)
        const hasPreference = typeof mql.matches === "boolean"

        if (hasPreference) {
            return mql.matches ? "dark" : "light"
        }
    }

    function toggleTheme(e) {
        if (!e.key || e.key === "Enter") {
            const newTheme = theme === "dark" ? "light" : "dark"
            setTheme(newTheme)
            storeUserThemePref(newTheme)
            document.body.dataset.theme = theme
        }
    }

    function storeUserThemePref(pref) {
        localStorage.setItem("theme", pref)
    }

    function getUserThemePref() {
        return localStorage.getItem("theme")
    }

    function updatePWAThemeColor(theme) {
        const themeColor = theme === "dark" ? "#27405C" : "#A7BBCE"
        document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", themeColor)
    }

    /** Track the user's window width **/
    const windowWidth = useGetWindowWidth()

    /** Handle hamburger menu state **/
    function toggleMenu(e) {
        if (!e.key || e.key === "Enter") setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu(e) {
        if (!e.key || e.key === "Enter") {
            setIsMenuOpen(false)
        }
    }

    /** Close hamburger menu on click outside the menu **/
    const close = useCallback((e) => closeMenu(e), [])
    useClickOutside(menuRef, close)

    /** Create header element based on the user's window width **/
    const headerEl =
        windowWidth < 768 ? (
            <div className="header--small">
            <FiMenu
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
                className="icon icon--border menu-icon"
                tabIndex="0"
                aria-hidden="false"
                aria-label="Open navigation menu"
            />
            {isMenuOpen && (
                <NavBar
                navClass="nav-bar--vertical"
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
                menuRef={menuRef}
                />
            )}
            </div>
        ) : (
            <div className="header--large">
            <NavBar navClass="nav-bar--horizontal" />
            </div>
        )

    return (
        <header>
            {headerEl}
            {windowWidth < 768 && (
            <Link to="/" className="a--icon">
                <FaHome
                className="icon icon--link"
                aria-hidden="false"
                aria-label="Go to home page"
                />
            </Link>
            )}
            {theme === "light" ? (
            <HiMoon
                onClick={toggleTheme}
                onKeyDown={toggleTheme}
                className="icon theme-icon"
                tabIndex="0"
                aria-hidden="false"
                aria-label="Switch to dark mode"
            />
            ) : (
            <HiOutlineSun
                onClick={toggleTheme}
                onKeyDown={toggleTheme}
                className="icon theme-icon"
                tabIndex="0"
                aria-hidden="false"
                aria-label="Switch to light mode"
            />
            )}
        </header>
    )
}

export default Header
