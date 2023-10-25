import { useEffect, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import handleConversionCalculation from "../../utils/handleConversionCalculation"
import formatResult from "../../utils/formatResult"

const UnitConverter = ({ data, isNewConversion }) => {
    const [conversionData, setConversionData] = useState({
        fromUnit: '',
        toUnit: '',
        input: ''
    })
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (isNewConversion.current === true) {
            setConversionData({
                fromUnit: '',
                toUnit: '',
                input: ''
            })
            setResult(null)
        }
    }, [isNewConversion.current])

    useEffect(() => {
        if (conversionData.fromUnit && conversionData.toUnit && conversionData.input) {
            const getResult = handleConversionCalculation(data, conversionData)
            setResult(formatResult(getResult))
        }
    }, [conversionData])

    function handleConversionDataChange(e, key) {
        setConversionData(prevData => ({...prevData, [key]: e.target.value}))
    }

    const heading = data.name.charAt(0).toUpperCase() + data.name.slice(1)

    return (
        <div className="unit-converter-wrapper">
            <h2>{heading}</h2>
            <Select
                data={data.units}
                name={`${data.name}-fromUnit`}
                id={`${data.name}-fromUnit`}
                value={conversionData.fromUnit}
                handleChange={e => handleConversionDataChange(e, "fromUnit")}
                defaultText="Select a unit"
            />
            <Input
                id={`${data.name}-input`}
                name={`${data.name}-input`}
                value={conversionData.input}
                handleChange={e => handleConversionDataChange(e, "input")}
            />
            <Select
                data={data.units}
                id={`${data.name}-toUnit`}
                value={conversionData.toUnit}
                handleChange={e => handleConversionDataChange(e, "toUnit")}
                defaultText="Select a unit"
            />
            <p className="result">{result && result}</p>
        </div>
    )
}

export default UnitConverter