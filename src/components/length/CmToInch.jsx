import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const CmToInch = () => {
    const [data, setData] = useState({cmToInchNum: ''})
    const [result, setResult] = useState('')

    const conversionFactor = 0.393700787

    useEffect(() => {
        const resultUnlimitedDecimals = data.cmToInchNum * conversionFactor
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        setResult(resultWithTwoDecimals)
    }, [data])

    return (
        <div className="grid-item grid-item-a">
            <Input
                name="cmToInchNum"
                id="cmToInchNum"
                value={data.cmToInchNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>cm =</p>
            <div className="result-wrapper">
                <p>{`${result} in`}</p>
            </div>
        </div>
    )
}

export default CmToInch