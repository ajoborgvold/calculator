import { capitalizeFirstLetter } from "../../utils/utilities"

const Select = ({ data, id, handleChange, defaultText, value, label }) => {
    const optionElements = data.map(item => {
        if (item.name) {
            const optionText = capitalizeFirstLetter(item.name)
            return (
                <option key={item.name} value={item.name}>{optionText}</option>
            )
        } else {
            const optionText = capitalizeFirstLetter(item)
            return (
                <option key={item} value={item}>{optionText}</option>
            )
        }
    })

    return (
        <>
            <label htmlFor={id} className="label">{label}</label>
            <select id={id} value={value ? value : ""} onChange={handleChange}>
                <option value="">{defaultText}</option>
                {optionElements}
            </select>
        </>
    )
}

export default Select