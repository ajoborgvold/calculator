import { useState, useEffect } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const InchToCm = () => {
    const [data, setData] = useState({inchToCmNum: ''})
    const [result, setResult] = useState('')

    const conversionFactor = 2.54

    useEffect(() => {
        const resultUnlimitedDecimals = data.inchToCmNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="calculator-wrapper flex-row">
            <div className="calculator__inner-wrapper">
                <Input
                    name="inchToCmNum"
                    id="inchToCmNum"
                    value={data.inchToCmNum}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>in equals</p>
            </div>
            <div className="result-wrapper">
                <p>{`${result} cm`}</p>
            </div>
        </div>
    )
}

export default InchToCm