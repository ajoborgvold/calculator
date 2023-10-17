import { Link, NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { useState } from "react"

const Header = ({isMenuOpen, toggleMenu}) => {
    const headerSmall = (
        <div className="header--small">
            <FiMenu onClick={toggleMenu} className="menu-icon"/>
            {isMenuOpen && <nav className="nav-bar--vertical">
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                    >
                    Home
                </NavLink>
                <NavLink
                    to="percentage"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                    >
                    Percentage
                </NavLink>
                <NavLink
                    to="unit-converters"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                    >
                    Unit
                 converters</NavLink>
                <NavLink
                    to="age"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                >
                    Age
                </NavLink>
            </nav>}
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