import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const FeetToCm = () => {
    const [data, setData] = useState({feetToCmNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 30.48

    useEffect(() => {
        const resultUnlimitedDecimals = data.feetToCmNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="calculator-wrapper flex-row">
            <Input 
                name="feetToCmNum"
                id="feetToCmNum"
                value={data.feetToCmNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>ft equals</p>
            <div className="result-wrapper">
                <p>{`${result ? result : ''} cm`}</p>
            </div>
        </div>
    )
}

export default FeetToCm