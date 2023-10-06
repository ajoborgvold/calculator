const handleInputChange = (e, setData) => {
    setData(prevData => {
        return {...prevData, [e.target.name]: e.target.value}
    })
}

export default handleInputChange