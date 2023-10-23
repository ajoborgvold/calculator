const Select = ({ data, id, handleChange, defaultText }) => {
    const optionElements = data.map(item => {
        if (item.name) {
            const optionText = item.name.charAt(0).toUpperCase() + item.name.slice(1)
            return (
                <option key={item.name} value={item.name}>{optionText}</option>
            )
        } else {
            const optionText = item.charAt(0).toUpperCase() + item.slice(1)
            return (
                <option key={item} value={item}>{optionText}</option>
            )
        }

    })

    return (
        <>
            <label htmlFor={id} className="label">Select a unit</label>
            <select id={id} onChange={handleChange}>
                <option value="">{defaultText}</option>
                {optionElements}
            </select>
        </>
    )
}

export default Select