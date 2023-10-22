const Select = ({ data, id, handleChange }) => {
    const optionElements = data.map(unit => {
        const optionText = unit.name.charAt(0).toUpperCase() + unit.name.slice(1)
        return (
            <option key={unit.name} value={unit.name}>{optionText}</option>
        )
    })

    return (
        <>
            <label htmlFor={id} className="label">Select a unit</label>
            <select id={id} onChange={handleChange}>
                <option value="">Select a unit</option>
                {optionElements}
            </select>
        </>
    )
}

export default Select