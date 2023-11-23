import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    useEffect(() => {
        document.title = "Calculator"
    }, [])

    return (
        <div className={`main-container home-container`}>
            <Link to="/percentage" className="link">Percentage calculation</Link>
            <Link to="/unit-conversion" className="link">Unit conversion</Link>
            <Link to="/time" className="link">Time calculation</Link>
        </div>   
    )
}

export default Home