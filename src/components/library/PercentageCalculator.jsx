import { useState, useEffect } from "react"
import Input from "./Input"
import { capitalizeFirstLetter, formatResult, handleChange } from "../../utils/utilities"

const PercentageCalculator = ({ heading, type, nameA, nameB, text, unit }) => {
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

    const resultToDisplay = result && unit ? `${result} ${unit}` : result ? result : ''

    return (
        <div className="calculator-item-wrapper pct-item-wrapper">
            <h2 className="sub-heading">{capitalizeFirstLetter(heading)}</h2>
            <form className="form pct-form">
                <div className="inner-wrapper">
                    <p>{capitalizeFirstLetter(text.a)}</p>
                    <Input
                        name={nameA}
                        id={nameA}
                        value={data.nameA}
                        handleChange={e => handleChange(e, "nameA", setData)}
                    />
                    {text.b && <p>{text.b}</p>}
                </div>
                <div className="inner-wrapper">
                    {text.c && <p>{text.c}</p>}
                    <Input
                        name={nameB}
                        id={nameB}
                        value={data.nameB}
                        handleChange={e => handleChange(e, "nameB", setData)}
                    />
                    {text.d && <p>{text.d}</p>}
                </div>
                {text.e && 
                    <div className="inner-wrapper">
                        <p>{text.e}</p>
                    </div>
                }
            </form>
            <div className="inner-wrapper space-between result-wrapper">
                <p className="p--large">Result:</p>
                <p className="p--large">{resultToDisplay}</p>
            </div>
        </div>
    )
}

export default PercentageCalculator