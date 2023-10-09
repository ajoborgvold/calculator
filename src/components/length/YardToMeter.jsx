import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const YardToMeter = () => {
    const [data, setData] = useState({yardToMeterNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 0.9144

    useEffect(() => {
        const resultUnlimitedDecimals = data.yardToMeterNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="calculator-wrapper--small">
            <Input 
                name="yardToMeterNum"
                id="yardToMeterNum"
                value={data.yardToMeterNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>yd equals </p>
            <div className="result-wrapper">
                <p>{`${result} m`}</p>
            </div>
        </div>
    )
}

export default YardToMeter