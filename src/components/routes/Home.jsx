import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <div className="main-container home-container">
            <Link to="/percentage" className="link--border">Percentage</Link>
            <Link to="/new-unit-converters" className="link--border">New unit converters</Link>
            <Link to="/time" className="link--border">Time</Link>
        </div>   
    )
}

export default Home