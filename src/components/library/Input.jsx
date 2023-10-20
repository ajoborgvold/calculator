const Input = props => {
    const { name, id, value, onchange, handleInputChange } = props

    return (
        <input
            type="number"
            name={name}
            id={id}
            placeholder="0"
            value={value}
            // onChange={onchange}
            onChange={handleInputChange}
            className="input"
        />
    )
}

export default Input