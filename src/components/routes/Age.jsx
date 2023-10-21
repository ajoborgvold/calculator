import { useEffect } from "react"

const Age = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <section className="main-container age-container">
            <h1>Age calculator goes here</h1>
        </section>
    )
}

export default Age