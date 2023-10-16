const Button = (props) => {
    const { text, name } = props

    function toggleConverter() {
        // name === convertersData.name ? setConvertersData(prevData => {
        //     return {...prevData, [prevData.show]: true}
        // })
        console.log(name)
    }

    return (
        <button 
            onClick={toggleConverter}
            className="btn"
        >
            {text}
        </button>
    )
}

export default Button