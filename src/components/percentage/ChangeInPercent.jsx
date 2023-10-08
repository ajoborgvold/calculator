import { useEffect, useState } from "react"
import Input from "../library/Input"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../../utils/handleInputChange"

const ChangeInPercent = () => {
    const [data, setData] = useState({changeInPctNumOne: '', changeInPctNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.changeInPctNumOne && data.changeInPctNumTwo ? true : false)
    }, [data])

    useEffect(() => {
        const dif = data.changeInPctNumOne - data.changeInPctNumTwo
        const positiveDif = dif < 0 ? Math.abs(dif) : dif
        const pct = (positiveDif / data.changeInPctNumOne) * 100
        const pctWithTwoDecimals = limitToTwoDecimalPlaces(pct)
        if (hasResult) {
            setResult(dif < 0 ? pctWithTwoDecimals : -pctWithTwoDecimals)
        }
    }, [data, hasResult])

    return (
        <div className="calculator-wrapper">
            <div className="calculator--top">
                <p className="calculator__p--top">How much is a change from the number</p>
                <Input
                    name="changeInPctNumOne"
                    id="changeInPctNumOne"
                    value={data.changeInPctNumOne}
                    onchange={e => handleInputChange(e, setData)}
                    inputClass="input--top"
                />
            </div>
            <div className="calculator--bottom">
                <p className="calculator__p--center">to the number</p>
                <Input
                    name="changeInPctNumTwo"
                    id="changeInPctNumTwo"
                    value={data.changeInPctNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                    inputClass="input--bottom"
                />
                <p className="calculator__p--bottom">in percent?</p>
            </div>
            <div className="result-wrapper">
                {hasResult ?
                    <p className="p--large">{result} %</p> : null
                }
            </div>
        </div>
    )
}

export default ChangeInPercent