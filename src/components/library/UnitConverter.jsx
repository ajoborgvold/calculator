import { useEffect, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import {
    formatResult,
    capitalizeFirstLetter,
    isVowel,
    handleChange,
    handleConversionCalculation
} from "../../utils/utilities"

const UnitConverter = ({ data }) => {
    const [conversionData, setConversionData] = useState({
        fromUnit: '',
        toUnit: '',
        input: ''
    })
    const [result, setResult] = useState(null)
    const [toUnitAbbreviation, setToUnitAbbreviation] = useState(null)


    useEffect(() => {
        if (conversionData.fromUnit && conversionData.toUnit && conversionData.input) {
            const getResult = handleConversionCalculation(data, conversionData)
            const toUnitData = data.units.find(unit => unit.name === conversionData.toUnit)
            setResult(formatResult(getResult))
            setToUnitAbbreviation(toUnitData.abbreviation)
        } else {
            setResult(null)
        }
    }, [conversionData])

    const heading = capitalizeFirstLetter(data.name)
    const label = `Select ${isVowel(data.name[0]) ? "an" : "a"} ${data.name} unit`
    const resultToDisplay = result ? `${result} ${toUnitAbbreviation}` : ''
    // const resultToDisplay = result ? `${<CountingAnimation result={result}/>} ${toUnitAbbreviation}` : ''

    return (
        <div className="calculator-item-wrapper">
            <h2 className="sub-heading">{heading}</h2>
            <form className="form">
                <div className="inner-wrapper space-between">
                    <span>Convert this number:</span>
                    <Input
                        id={`${data.name}-input`}
                        name={`${data.name}-input`}
                        value={conversionData.input}
                        handleChange={e => handleChange(e, "input", setConversionData)}
                    />
                </div>
                <div className="inner-wrapper space-between">
                    <span>From:</span>
                    <Select
                        data={data.units}
                        name={`${data.name}-fromUnit`}
                        id={`${data.name}-fromUnit`}
                        value={conversionData.fromUnit}
                        handleChange={e => handleChange(e, "fromUnit", setConversionData)}
                        defaultText={label}
                        label={label}
                    />
                </div>
                <div className="inner-wrapper space-between">
                    <span>To:</span>
                    <Select
                        data={data.units}
                        id={`${data.name}-toUnit`}
                        value={conversionData.toUnit}
                        handleChange={e => handleChange(e, "toUnit", setConversionData)}
                        defaultText={label}
                        label={label}
                    />
                </div>
            </form>
            <div className="inner-wrapper space-between">
                <p className="bold-text">Result:</p>
                <p className="result bold-text">{resultToDisplay}</p>
            </div>
        </div>
    )
}

export default UnitConverter