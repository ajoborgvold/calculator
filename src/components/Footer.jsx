const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer>
            <p>&#169; {year} Ajo Borgvold</p>
        </footer>
    )
}

export default Footer