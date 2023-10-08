const Input = props => {
    const { name, id, value, onchange, inputClass } = props

    return (
        <input
            type="text"
            name={name}
            id={id}
            placeholder="0"
            value={value}
            onChange={onchange}
            className={`input ${inputClass}`}
        />
    )
}

export default Input