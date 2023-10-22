const Input = props => {
    const { id, name, value, handleChange } = props
    
    return (
        <>
            <label htmlFor={id} className="label">Enter a number</label>
            <input
                type="number"
                name={name}
                id={id}
                placeholder="0"
                value={value}
                onChange={handleChange}
                className="input"
            />
        </>
    )
}

export default Input