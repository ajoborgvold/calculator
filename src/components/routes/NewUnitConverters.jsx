import { useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"

const NewUnitConverters = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])
    
    return (
        <div className="main-container unit-converters-container">
            <nav className="nav-bar--horizontal">
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    All converters
                </NavLink>
                <NavLink 
                    to="volume"
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    Volume
                </NavLink>
                <NavLink 
                    to="length"
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    Length
                </NavLink>
                <NavLink 
                    to="mass"
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    Mass
                </NavLink>
                <NavLink 
                    to="area"
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    Area
                </NavLink>
                <NavLink 
                    to="temperature"
                    className={({isActive}) => isActive ? 'nav-link nav-link--large nav-link--active' : 'nav-link nav-link--large'}
                >
                    Temperature
                </NavLink>
            </nav>
            <section className="converters-section">
                <Outlet />
            </section>
        </div>
    )
}

export default NewUnitConverters