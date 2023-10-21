import { useEffect, useState } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"

const UnitConverter = ({ name, factor, fromUnit, toUnit }) => {
    const [data, setData] = useState({ name: '' })
    const [result, setResult] = useState(null)
    const [hasResult, setHasResult] = useState(false)

    useEffect(() => {
        setHasResult(data.name ? true : false)
    }, [data])

    useEffect(() => {
        factor ? calculateUnitResult() : !factor && hasResult && calculateTemperatureResult()
    }, [data, hasResult])

    const handleInputChange = e => {
        e.target.value >= 0 ? setData({name: e.target.value}) : setData({name: 0})
    }

    function calculateUnitResult() {
        const newResult = data.name * factor
        setResult(formatResult(newResult))
    }

    function calculateTemperatureResult() {
        let newResult

        if (fromUnit.name === "celsius") {
            newResult = data.name * 9 / 5 + 32
        } else if (fromUnit.name === "fahrenheit") {
            newResult = (data.name - 32) * 5 / 9
        }

        setResult(formatResult(newResult))
    }

    const headingFirstWord = fromUnit.name.charAt(0).toUpperCase() + fromUnit.name.slice(1)
    const divClass = fromUnit.type === "metric" ? "position-a" : "position-b"
    const headingClass = fromUnit.type === "metric" ? "head-a" : "head-b"
    
    return (
        <div key={name} className={`unit-converter-wrapper ${divClass}`}>
            <h2 className={`sub-heading ${headingClass}`}>{headingFirstWord} &harr; {toUnit.name}</h2>
            <div className="inner-wrapper">
                <Input
                    name={name}
                    id={name}
                    handleInputChange={handleInputChange}
                    value={data.name}
                />
                {factor ?
                    <>
                        <p>{fromUnit.abbreviation} =</p>
                        <p className="result">{result} {toUnit.abbreviation}</p>
                    </> :
                    <>
                        {fromUnit.name === "celsius" ? <p>&#8451; =</p> : <p>&#8457; =</p>}
                        {toUnit.name === "celsius" ? <p className="result">{result} &#8451;</p> : <p className="result">{result} &#8457;</p>}
                    </>
                }
            </div>
        </div>
    )
}

export default UnitConverter