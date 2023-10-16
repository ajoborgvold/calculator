import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="main-heading">All calculators and unit converters</h1>
            <Link to="/percentage" className="link--border">Percentage</Link>
            <Link to="/unit-converters" className="link--border">Unit converters</Link>
            {/* <Link to ="/volume" className="link--border">Volume</Link>
            <Link to ="/length" className="link--border">Length</Link>
            <Link to ="/mass" className="link--border">Mass</Link>
            <Link to ="/area" className="link--border">Area</Link> */}
            <Link to="/age" className="link--border">Age</Link>
        </div>   
    )
}

export default Home