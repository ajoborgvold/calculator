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
            <Link to="/unit-converters" className="link--border">Unit converters</Link>
            <Link to="/age" className="link--border">Age</Link>
        </div>   
    )
}

export default Home