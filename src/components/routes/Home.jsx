import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <div className="main-container home-container">
            {/* <h1 className="main-heading">All calculators and unit converters</h1> */}
            <Link to="/percentage" className="link--border">Percentage</Link>
            {/* <Link to="/unit-converters" className="link--border">Unit converters</Link> */}
            <Link to="/new-unit-converters" className="link--border">New unit converters</Link>
            <Link to="/time" className="link--border">Time</Link>
        </div>   
    )
}

export default Home