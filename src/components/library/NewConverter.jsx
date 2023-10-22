import { useState } from "react"
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
    const [result, setResult] = useState(null)

    function handleConversionDataChange(e, key) {
        setConversionData(prevData => ({...prevData, [key]: e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const getResult = handleConversionCalculation(unitData, conversionData)
        setResult(formatResult(getResult))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Select
                    data={unitData.units}
                    name={`${unitData.name}-fromUnit`}
                    id={`${unitData.name}-fromUnit`}
                    value={conversionData.fromUnit}
                    handleChange={e => handleConversionDataChange(e, "fromUnit")}
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
                />
                <button>Calculate</button>
            </form>
            <p className="result">{result && result}</p>
        </>
    )
}

export default NewConverter