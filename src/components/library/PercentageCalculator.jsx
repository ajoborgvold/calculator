import { useState, useEffect } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"

const PercentageCalculator = ({ type, nameA, nameB, text, unit }) => {
    const [data, setData] = useState({ nameA: '', nameB: '' })
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        setHasResult(data.nameA && data.nameB ? true : false)
    }, [data])
    
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

        getResultValue(newResult)
    }, [data, hasResult])

    const handleInputChange = (e, key) => {
        setData(prevData => ({...prevData, [key]: e.target.value}))
    }

    const getResultValue = newResult => {
        hasResult ? setResult(formatResult(newResult)) : setResult(0)
    }

    return (
        <div className="pct-calculator-wrapper">
            <div className="inner-wrapper">
                <p>{text.a}</p>
                <Input
                    name={nameA}
                    id={nameA}
                    value={data.nameA}
                    handleInputChange={e => handleInputChange(e, 'nameA')}
                />
                {text.b && <p>{text.b}</p>}
            </div>
            <div className="inner-wrapper">
                <p>{text.c}</p>
                <Input
                    name={nameB}
                    id={nameB}
                    value={data.nameB}
                    handleInputChange={e => handleInputChange(e, 'nameB')}
                />
                <p>{text.d}</p>
            </div>
            <p className="result">{result} {unit && unit}</p>
        </div>
    )
}

export default PercentageCalculator