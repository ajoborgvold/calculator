import { useEffect, useState } from "react"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"

const KmToMiles = () => {
    const [data, setData] = useState({kmToMilesNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 0.621371192

    useEffect(() => {
        const resultUnlimitedDecimals = data.kmToMilesNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    })

    return (
        <div className="calculator-wrapper flex-row">
            <Input
                name="kmToMilesNum"
                id="kmToMilesNum"
                value={data.kmToMilesNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>km equals</p>
            <div className="result-wrapper">
                <p>{`${result && result} mi`}</p>
            </div>
        </div>
    )
}

export default KmToMiles