import { useEffect, useState } from "react"
import Input from "../library/Input"

const UnitConvertor = ({ name, factor, text, unit, gridClass }) => {
    const [data, setData] = useState({name: 1})
    const [result, setResult] = useState(null)
    
    useEffect(() => {
        const resultUnlimitedDecimals = data.name * conversionFactor
        const resultWithTwoDecimals = parseFloat(resultUnlimitedDecimals.toFixed(2))
        setResult(resultWithTwoDecimals)
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
                onchange={e => handleInputChange(e)}
            />
            <p>{text}</p>
            <div className="result-wrapper">
                <p>{result} {unit}</p>
            </div>
        </div>
    )

}

export default UnitConvertor