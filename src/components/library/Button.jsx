import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const Button = (props) => {
    const { text, id } = props
    const { toggle } = useContext(AppContext)

    return (
        <button 
            onClick={toggle}
            className="btn"
            id={id}
        >
            {text}
        </button>
    )
}

export default Button