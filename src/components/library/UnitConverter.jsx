import { useEffect, useState } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"

const UnitConverter = ({ name, factor, text, unitOne, unitTwo, gridClass }) => {
    const [data, setData] = useState({ name: null })
    const [result, setResult] = useState(null)

    useEffect(() => {
        const newResult = data.name * conversionFactor
        setResult(formatResult(newResult))
    }, [data])

    const conversionFactor = Number(factor)

    const handleInputChange = e => {
        e.target.value >= 0 ? setData({name: e.target.value}) : setData({name: 0})
    }

    return (
        <div className={`grid-item ${gridClass}`}>
            <Input
                name={name}
                id={name}
                value={data.name}
                onchange={handleInputChange}
            />
            <p>{unitOne} =</p>
            <p className="result">{result} {unitTwo}</p>
        </div>
    )
}

export default UnitConverter