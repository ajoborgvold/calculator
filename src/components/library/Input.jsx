import { PropTypes } from "prop-types"

const Input = (props) => {
  const { id, name, value, handleChange, className } = props

  return (
    <>
      <label htmlFor={id} className="label">
        Enter a number
      </label>
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

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
  className: PropTypes.string,
}

export default Input
