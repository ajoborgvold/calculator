import { useEffect } from "react"

const Age = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <main>
            <h1>Age calculator goes here</h1>
        </main>
    )
}

export default Age