import { useEffect, useState } from "react"
import Input from "../library/Input"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../../utils/handleInputChange"

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
        <div className="calculator-wrapper">
            <div className="calculator__inner-wrapper">
                <p>How much is</p>
                <Input
                    name="pctToNumberNumOne"
                    id="pctToNumberNumOne"
                    value={data.pctToNumberNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>%</p>
            </div>
            <div className="calculator__inner-wrapper">
                <p>of the number</p>
                <Input
                    name="pctToNumberNumTwo"
                    id="pctToNumberNumTwo"
                    value={data.pctToNumberNumTwo}
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

export default PercentageToNumber