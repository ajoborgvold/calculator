import { useEffect, useRef, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import handleConversionCalculation from "../../utils/handleConversionCalculation"
import formatResult from "../../utils/formatResult"

const NewConverter = ({ unitData }) => {
    const [conversionData, setConversionData] = useState({
        fromUnit: '',
        toUnit: '',
        input: ''
    })
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (conversionData.fromUnit && conversionData.toUnit && conversionData.input) {
            isFirstRender.current = false
            setHasResult(true)
        } else {
            setHasResult(false)
        }
    }, [conversionData])

    useEffect(() => {
        if (!isFirstRender.current) {
            const getResult = handleConversionCalculation(unitData, conversionData)
            setResult(formatResult(getResult))
        }
    }, [conversionData, hasResult])

    function handleConversionDataChange(e, key) {
        setConversionData(prevData => ({...prevData, [key]: e.target.value}))
    }

    return (
        <>
            <Select
                data={unitData.units}
                name={`${unitData.name}-fromUnit`}
                id={`${unitData.name}-fromUnit`}
                value={conversionData.fromUnit}
                handleChange={e => handleConversionDataChange(e, "fromUnit")}
                defaultText="Select a unit"
            />
            <Input
                id={`${unitData.name}-input`}
                name={`${unitData.name}-input`}
                value={conversionData.input}
                handleChange={e => handleConversionDataChange(e, "input")}
            />
            <Select
                data={unitData.units}
                id={`${unitData.name}-toUnit`}
                value={conversionData.toUnit}
                handleChange={e => handleConversionDataChange(e, "toUnit")}
                defaultText="Select a unit"
            />
            <p className="result">{result && result}</p>
        </>
    )
}

export default NewConverter