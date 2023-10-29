import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="main-container home-container">
            <Link to="/percentage" className="link">Percentage</Link>
            <Link to="/unit-conversion" className="link">Unit conversion</Link>
            <Link to="/time" className="link">Time</Link>
        </div>   
    )
}

export default Home