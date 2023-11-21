import { useEffect, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import {
    formatResult,
    capitalizeFirstLetter,
    isVowel,
    handleChange,
    handleConversion
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
            const getResult = handleConversion(data, conversionData)
            const toUnitData = data.units.find(unit => unit.name === conversionData.toUnit)
            setResult(formatResult(getResult))
            setToUnitAbbreviation(toUnitData.abbreviation)
        } else {
            setResult(null)
        }
    }, [conversionData])

    const heading = capitalizeFirstLetter(data.name)
    const label = `Select ${isVowel(data.name[0]) ? "an" : "a"} ${data.name} unit`

    return (
        <div className="calculator-item-wrapper">
            <h2 className="sub-heading">{heading}</h2>
            <form className="form">
                <div className="inner-wrapper space-between">
                    <p>Convert this number:</p>
                    <Input
                        id={`${data.name}-input`}
                        name={`${data.name}-input`}
                        value={conversionData.input}
                        handleChange={e => handleChange(e, "input", setConversionData)}
                    />
                </div>
                <div className="inner-wrapper space-between">
                    <p>From:</p>
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
                    <p>To:</p>
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
            <div className="inner-wrapper space-between result-wrapper">
                <p className="p--large">Result:</p>
                {result && <p className="p--large">{result} {toUnitAbbreviation}</p>}
            </div>
        </div>
    )
}

export default UnitConverter