import { useEffect, useState } from "react"
import Input from "../library/Input"
import limitToTwoDecimalPlaces from "../../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../../utils/handleInputChange"

const NumberToPercentage = () => {
    const [data, setData] = useState({numberToPctNumOne: '', numberToPctNumTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        setHasResult(data.numberToPctNumOne && data.numberToPctNumTwo ? true : false)
    }, [data])
    
    useEffect(() => {
        const resultUnlimitedDecimals = data.numberToPctNumOne / data.numberToPctNumTwo * 100
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        hasResult ? setResult(resultWithTwoDecimals) : setResult(0)
    }, [data, hasResult])

    return (
        <div className="flex__sub-container-item">
            <div className="flex__sub-container-item__inner-wrapper">
                <p>How many percent is the number</p>
                <Input
                    name="numberToPctNumOne"
                    id="numberToPctNumOne"
                    value={data.numberToPctNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
            </div>
            <div className="flex__sub-container-item__inner-wrapper">
                <p>of the number</p>
                <Input
                    name="numberToPctNumTwo"
                    id="numberToPctNumTwo"
                    value={data.numberToPctNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>?</p>
            </div>
            <div className="result-wrapper">
                <p>{`${result} %`}</p>
            </div>
        </div>
    )
 }

 export default NumberToPercentage