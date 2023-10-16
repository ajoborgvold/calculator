import { NavLink, Outlet } from "react-router-dom"

const UnitConverters = () => {
    return (
        <>
            <nav className="nav-bar--horizontal">
                <NavLink 
                    to="volume"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                >
                    Volume
                </NavLink>
                <NavLink 
                    to="length"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                >
                    Length
                </NavLink>
                <NavLink 
                    to="mass"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                >
                    Mass
                </NavLink>
                <NavLink 
                    to="area"
                    className={({isActive}) => isActive ? 'nav-link--active' : 'nav-link'}
                >
                    Area
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default UnitConverters