import { useEffect, useState } from "react"
import Input from "../library/Input"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../../utils/handleInputChange"

const ChangeInPercent = () => {
    const [data, setData] = useState({changeInPctNumOne: '', changeInPctNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        setHasResult(data.changeInPctNumOne && data.changeInPctNumTwo ? true : false)
    }, [data])

    useEffect(() => {
        const dif = data.changeInPctNumOne - data.changeInPctNumTwo
        const positiveDif = dif < 0 ? Math.abs(dif) : dif
        const pct = (positiveDif / data.changeInPctNumOne) * 100
        const pctWithTwoDecimals = limitToTwoDecimalPlaces(pct)
        hasResult ? setResult(dif < 0 ? pctWithTwoDecimals : -pctWithTwoDecimals) : setResult(0)
    }, [data, hasResult])

    return (
        <div className="calculator-wrapper--large">
            <div className="calculator__inner-wrapper">
                <p>How much is a change from the number</p>
                <Input
                    name="changeInPctNumOne"
                    id="changeInPctNumOne"
                    value={data.changeInPctNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
            </div>
            <div className="calculator__inner-wrapper">
                <p>to the number</p>
                <Input
                    name="changeInPctNumTwo"
                    id="changeInPctNumTwo"
                    value={data.changeInPctNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>in percent?</p>
            </div>
            <div className="result-wrapper">
                <p>{`${result} %`}</p>
            </div>
        </div>
    )
}

export default ChangeInPercent