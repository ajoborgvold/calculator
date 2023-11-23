import { useState } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { getWindowWidth } from "../utils/utilityFunctions"

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    /** Track the user's window width **/
    getWindowWidth(setWindowWidth)

    const footerClass = windowWidth < 768 ? "footer--small-screen" : "footer--large-screen"

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={footerClass}>
            <a
                href="https://www.linkedin.com/in/ajo-borgvold/"
                target="_blank"
                className="a--icon"
                aria-hidden="false"
                aria-label="Check out my LinkedIn profile"
            >
                <FaLinkedinIn className="icon icon--link"/>
            </a>
            <p>&#169; {year} Ajo Borgvold</p>
            <a
                href="https://github.com/ajoborgvold/calculator"
                target="_blank"
                className="a--icon"
                aria-hidden="false"
                aria-label="Check out the GitHub repo for this app"
            >
                <FaGithub className="icon icon--link"/>
            </a>
        </footer>
    )
}

export default Footer