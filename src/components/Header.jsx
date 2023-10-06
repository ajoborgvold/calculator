import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/" className="link--regular">&larr; Home</Link>
        </header>
    )
}

export default Header