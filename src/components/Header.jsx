import { useCallback, useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { FiMenu } from "react-icons/fi"
import { FaHome } from "react-icons/fa"
import { HiOutlineSun } from "react-icons/hi"
import { HiMoon } from "react-icons/hi2"
import useClickOutside from "../hooks/useClickOutside"
import useGetWindowWidth from "../hooks/useGetWindowWidth"
import { useMediaQuery } from "react-responsive"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()

  /** Handle user's app color preferences **/
  const systemPrefersDark = useMediaQuery(
    { query: "(prefers-color-scheme: dark)" },
    undefined,
    (prefersDark) => setIsDark(prefersDark)
  )

  const [isDark, setIsDark] = useState(systemPrefersDark)

  useEffect(() => {
    const newTheme = isDark ? "dark" : "light"
    document.body.dataset.theme = newTheme
    updatePWAThemeColor(newTheme)
  }, [isDark])

  function updatePWAThemeColor(theme) {
    const themeColor = theme === "dark" ? "#27405C" : "#A7BBCE"
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", themeColor)
  }

  function toggleDark() {
    setIsDark(!isDark)
  }

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
      {isDark ? (
        <HiOutlineSun
          onClick={toggleDark}
          onKeyDown={toggleDark}
          className="icon theme-icon"
          tabIndex="0"
          aria-hidden="false"
          aria-label="Switch to light mode"
        />
      ) : (
        <HiMoon
          onClick={toggleDark}
          onKeyDown={toggleDark}
          className="icon theme-icon"
          tabIndex="0"
          aria-hidden="false"
          aria-label="Switch to dark mode"
        />
      )}
    </header>
  )
}

export default Header
