import { useEffect, useState } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"

const UnitConverter = ({ name, factor, unitOne, unitTwo, gridClass }) => {
    const [data, setData] = useState({ name: '' })
    const [result, setResult] = useState(null)

    useEffect(() => {
        // const newResult = data.name * conversionFactor
        const newResult = data.name * factor
        setResult(formatResult(newResult))
    }, [data])

    // const conversionFactor = Number(factor)

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