import { useEffect, useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"

const PercentageOfTotal = () => {
    const [data, setData] = useState({fromPctToTotalNumOne: '', fromPctToTotalNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.fromPctToTotalNumOne && data.fromPctToTotalNumTwo ? true : false)
    }, [data])

    useEffect(() => {
        const resultUnlimitedDecimals = data.fromPctToTotalNumOne / data.fromPctToTotalNumTwo * 100
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        hasResult && setResult(resultWithTwoDecimals)
    }, [data, hasResult])

    return (
        <div className="calculator-wrapper flex-column">
            <div className="calculator__inner-wrapper">
                <p>What is the total sum when</p>
                <Input
                    name="fromPctToTotalNumTwo"
                    id="fromPctToTotalNumTwo"
                    value={data.fromPctToTotalNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>%</p>
            </div>
            <div className="calculator__inner-wrapper">
                <p>is equal to the number</p>
                <Input
                    name="fromPctToTotalNumOne"
                    id="fromPctToTotalNumOne"
                    value={data.fromPctToTotalNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>?</p>
            </div>
            <div className="result-wrapper">
                <p>{hasResult ? result : null}</p>
            </div>
        </div>
    )
}

export default PercentageOfTotal