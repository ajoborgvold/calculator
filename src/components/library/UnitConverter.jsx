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

    useEffect(() => {
        if (conversionData.fromUnit && conversionData.toUnit && conversionData.input) {
            const getResult = handleConversionCalculation(data, conversionData)
            setResult(formatResult(getResult))
        }
    }, [conversionData])

    const heading = capitalizeFirstLetter(data.name)
    const label = `Select ${isVowel(data.name[0]) ? "an" : "a"} ${data.name} unit`

    return (
        <div className="unit-converter-wrapper">
            <h2>{heading}</h2>
            <Select
                data={data.units}
                name={`${data.name}-fromUnit`}
                id={`${data.name}-fromUnit`}
                value={conversionData.fromUnit}
                handleChange={e => handleChange(e, "fromUnit", setConversionData)}
                defaultText={label}
                label={label}
            />
            <Input
                id={`${data.name}-input`}
                name={`${data.name}-input`}
                value={conversionData.input}
                handleChange={e => handleChange(e, "input", setConversionData)}
            />
            <Select
                data={data.units}
                id={`${data.name}-toUnit`}
                value={conversionData.toUnit}
                handleChange={e => handleChange(e, "toUnit", setConversionData)}
                defaultText={label}
                label={label}
            />
            <p className="result">{result && result}</p>
        </div>
    )
}

export default UnitConverter