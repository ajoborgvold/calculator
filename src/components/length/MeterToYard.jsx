import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const MeterToYard = () => {
    const [data, setData] = useState({meterToYardNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 1.0936133

    useEffect(() => {
        const resultUnlimitedDecimals = data.meterToYardNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="calculator-wrapper--small">
            <Input 
                name="meterToYardNum"
                id="meterToYardNum"
                value={data.meterToYardNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>m equals </p>
            <div className="result-wrapper">
                <p>{`${result} yd`}</p>
            </div>
        </div>
    )
}

export default MeterToYard