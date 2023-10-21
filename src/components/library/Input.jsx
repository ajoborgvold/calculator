const Input = props => {
    const { name, id, value, handleInputChange } = props
    
    return (
        <>
            <label htmlFor={id} className="label">Enter a number</label>
            <input
                type="number"
                name={name}
                id={id}
                placeholder="0"
                value={value}
                onChange={handleInputChange}
                className="input"
            />
        </>
    )
}

export default Input