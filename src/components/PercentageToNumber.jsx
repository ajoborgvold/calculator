import { useEffect, useState } from "react"
import Input from "./Input"
import limitToTwoDecimalPlaces from "../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../utils/handleInputChange"

const PercentageToNumber = () => {
    const [data, setData] = useState({pctToNumberNumOne: '', pctToNumberNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.pctToNumberNumOne && data.pctToNumberNumTwo ? true : false)
    }, [data])
    
    useEffect(() => {
        const resultUnlimitedDecimals = data.pctToNumberNumTwo * data.pctToNumberNumOne / 100
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        hasResult && setResult(resultWithTwoDecimals)
    }, [data, hasResult])

    return (
        <div className="container">
            <h2>Convert a percentage to a number</h2>
            <div className="inner-wrapper">
                <p>What is</p>
                <Input
                    name="pctToNumberNumOne"
                    id="pctToNumberNumOne"
                    value={data.pctToNumberNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>percent of</p>
                <Input
                    name="pctToNumberNumTwo"
                    id="pctToNumberNumTwo"
                    value={data.pctToNumberNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>?</p>
                <div className="result-wrapper">
                    <p className="p--large">{hasResult ? result : null}</p>
                </div>
            </div>
        </div>
    )
}

export default PercentageToNumber