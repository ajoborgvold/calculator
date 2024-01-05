import { PropTypes } from "prop-types"
import { NavLink } from "react-router-dom"
import { CgClose } from "react-icons/cg"

const NavBar = ({ navClass, isMenuOpen, closeMenu, menuRef }) => {
  const navLinkClass =
    navClass === "nav-bar--vertical" ? "nav-link--border" : "nav-link--bare"

  return (
    <>
      <nav className={navClass} ref={menuRef && menuRef}>
        {isMenuOpen && (
          <CgClose
            onClick={closeMenu}
            onKeyDown={closeMenu}
            className="icon close-icon"
            tabIndex="0"
            aria-hidden="false"
            aria-label="Close navigation menu"
          />
        )}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} ${navLinkClass}--active`
              : `${navLinkClass}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="percentage"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} ${navLinkClass}--active`
              : `${navLinkClass}`
          }
          onClick={closeMenu}
        >
          Percentage
        </NavLink>
        <NavLink
          to="unit-conversion"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} ${navLinkClass}--active`
              : `${navLinkClass}`
          }
          onClick={closeMenu}
        >
          Unit conversion
        </NavLink>
        <NavLink
          to="time"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} ${navLinkClass}--active`
              : `${navLinkClass}`
          }
          onClick={closeMenu}
        >
          Time
        </NavLink>
      </nav>
    </>
  )
}

NavBar.propTypes = {
  navClass: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
  menuRef: PropTypes.object
}

export default NavBar
