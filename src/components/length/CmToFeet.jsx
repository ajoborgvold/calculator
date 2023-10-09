import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const CmToFeet = () => {
    const [data, setData] = useState({cmToFeetNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 0.032808399

    useEffect(() => {
        const resultUnlimitedDecimals = data.cmToFeetNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="calculator-wrapper--small">
            <Input 
                name="cmToFeetNum"
                id="cmToFeetNum"
                value={data.cmToFeetNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>cm equals</p>
            <div className="result-wrapper">
                <p>{`${result} ft`}</p>
            </div>
        </div>
    )
}

export default CmToFeet