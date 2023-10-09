import { useEffect, useState } from "react"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"

const MilesToKm = () => {
    const [data, setData] = useState({milesToKmNum: ''})
    const [result, setResult] = useState(null)

    const conversionFactor = 1.609344

    useEffect(() => {
        const resultUnlimitedDecimals = data.milesToKmNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    })

    return (
        <div className="calculator-wrapper--small">
            <Input
                name="milesToKmNum"
                id="milesToKmNum"
                value={data.milesToKmNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>mi equals</p>
            <div className="result-wrapper">
                <p>{`${result} km`}</p>
            </div>
        </div>
    )
}

export default MilesToKm