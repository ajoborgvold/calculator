const Input = props => {
    const { name, id, value, onchange } = props

    return (
        <input
            type="text"
            name={name}
            id={id}
            className="input"
            placeholder="0"
            value={value}
            onChange={onchange}
        />
    )
}

export default Input