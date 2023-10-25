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
        }
    }, [conversionData])

    const heading = capitalizeFirstLetter(data.name)
    const label = `Select ${isVowel(data.name[0]) ? "an" : "a"} ${data.name} unit`

    return (
        <div className="unit-converter-wrapper">
            <h2 className="sub-heading">{heading}</h2>
            <div className="converter__inner-wrapper">
                <div className="flex-row">
                    <span className="position-a">Convert this number:</span>
                    <Input
                        id={`${data.name}-input`}
                        name={`${data.name}-input`}
                        value={conversionData.input}
                        handleChange={e => handleChange(e, "input", setConversionData)}
                        className="position-b"
                    />
                </div>
                <div className="flex-row">
                    <span className="position-a">From:</span>
                    <Select
                        data={data.units}
                        name={`${data.name}-fromUnit`}
                        id={`${data.name}-fromUnit`}
                        value={conversionData.fromUnit}
                        handleChange={e => handleChange(e, "fromUnit", setConversionData)}
                        defaultText={label}
                        label={label}
                        className="position-b"
                    />
                </div>
                <div className="flex-row">
                    <span className="position-a">To:</span>
                    <Select
                        data={data.units}
                        id={`${data.name}-toUnit`}
                        value={conversionData.toUnit}
                        handleChange={e => handleChange(e, "toUnit", setConversionData)}
                        defaultText={label}
                        label={label}
                        className="position-b"
                    />
                </div>
                <div className="flex-row">
                    <span className="position-a bold-text">Result:</span>
                    <p className="unit-result bold-text">{result ? result : ''} {toUnitAbbreviation}</p>
                </div>
            </div>
        </div>
    )
}

export default UnitConverter