const Input = props => {
    const { id, name, value, handleChange, className } = props
    
    return (
        <>
            <label htmlFor={id} className="label">Enter a number</label>
            <input
                type="number"
                name={name}
                id={id}
                inputMode="decimal"
                placeholder="0"
                value={value}
                onChange={handleChange}
                className={`input ${className}`}
            />
        </>
    )
}

export default Input