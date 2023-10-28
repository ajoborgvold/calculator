import { useState, useEffect } from "react"
import Input from "./Input"
import { formatResult, handleChange } from "../../utils/utilities"

const PercentageCalculator = ({ type, nameA, nameB, text, unit }) => {
    const [data, setData] = useState({ nameA: '', nameB: '' })
    const [result, setResult] = useState(null)
    
    useEffect(() => {
        let newResult = 0

        if (type === "numToPct") {
            newResult = data.nameA / data.nameB * 100
        } else if (type === "changeInPct") {
            const dif = data.nameA - data.nameB
            newResult = dif < 0 ? (Math.abs(dif) / data.nameA) * 100 : ((dif * -1) / data.nameA) * 100
        } else if (type === "pctToNum") {
            newResult = data.nameB * data.nameA / 100
        } else if (type === "pctOfTotal") {
            newResult = data.nameB / data.nameA * 100
        }

        data.nameA && data.nameB ? setResult(formatResult(newResult)) : setResult(null)
    }, [data])

    return (
        <div className="pct-calculator-wrapper">
            <div className="inner-wrapper">
                <p>{text.a}</p>
                <Input
                    name={nameA}
                    id={nameA}
                    value={data.nameA}
                    handleChange={e => handleChange(e, "nameA", setData)}
                />
                {text.b && <p>{text.b}</p>}
            </div>
            <div className="inner-wrapper">
                <p>{text.c}</p>
                <Input
                    name={nameB}
                    id={nameB}
                    value={data.nameB}
                    handleChange={e => handleChange(e, "nameB", setData)}
                />
                <p>{text.d}</p>
            </div>
            <p className="result">{result} {unit && unit}</p>
        </div>
    )
}

export default PercentageCalculator