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
        <div className="container">
            <h2>From percentage to total</h2>
            <div className="inner-wrapper">
                {/* <p>The number</p> */}
                <Input
                    name="fromPctToTotalNumOne"
                    id="fromPctToTotalNumOne"
                    value={data.fromPctToTotalNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>equals</p>
                <Input
                    name="fromPctToTotalNumTwo"
                    id="fromPctToTotalNumTwo"
                    value={data.fromPctToTotalNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>percent of:</p>
                <div className="result-wrapper">
                    {hasResult ? 
                        <p className="p--large">{result}</p> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default PercentageOfTotal