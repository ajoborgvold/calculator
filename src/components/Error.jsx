import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="main-container home-container">
      <h1>Sorry! Something went wrong.</h1>
      <Link to="/" className="link">Return to home page</Link>
    </div>
  )
}

export default Error