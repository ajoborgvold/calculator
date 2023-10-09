import { useEffect, useState } from "react"
import Input from "../library/Input"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../../utils/handleInputChange"

const NumberToPercentage = () => {
    const [data, setData] = useState({numberToPctNumOne: '', numberToPctNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.numberToPctNumOne && data.numberToPctNumTwo ? true : false)
    }, [data])
    
    useEffect(() => {
        const resultUnlimitedDecimals = data.numberToPctNumOne / data.numberToPctNumTwo * 100
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        hasResult && setResult(resultWithTwoDecimals)
    }, [data, hasResult])

    return (
        <div className="calculator-wrapper">
            <div className="calculator--top">
                <p className="calculator__p--top">How many percent is the number</p>
                <Input
                    name="numberToPctNumOne"
                    id="numberToPctNumOne"
                    value={data.numberToPctNumOne}
                    onchange={e => handleInputChange(e, setData)}
                    inputClass="input--top"
                />
            </div>
            <div className="calculator--bottom">
                <p className="calculator__p--center">of the number</p>
                <Input
                    name="numberToPctNumTwo"
                    id="numberToPctNumTwo"
                    value={data.numberToPctNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                    inputClass="input--bottom"
                />
                <p className="calculator__p--bottom">?</p>
            </div>
            <div className="result-wrapper">
                {/* {hasResult ?
                    <p className="p--large">{result} %</p> : null
                } */}
                <p className="p--large">{`${hasResult ? result : ''} %`}</p>
            </div>
        </div>
    )
 }

 export default NumberToPercentage