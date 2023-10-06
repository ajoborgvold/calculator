import { useEffect, useState } from "react"
import Input from "./Input"
import limitToTwoDecimalPlaces from "../utils/limitToTwoDecimalPlaces"
import handleInputChange from "../utils/handleInputChange"

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
        <div className="container">
            <h2>Convert a number to a percentage</h2>
            <div className="inner-wrapper">
                {/* <p>How many percent is the number</p> */}
                <Input
                    name="numberToPctNumOne"
                    id="numberToPctNumOne"
                    value={data.numberToPctNumOne}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>is what percent of</p>
                <Input 
                    name="numberToPctNumTwo"
                    id="numberToPctNumTwo"
                    value={data.numberToPctNumTwo}
                    onchange={e => handleInputChange(e, setData)}
                />
                <p>?</p>
                <div className="result-wrapper">
                    {hasResult ? 
                        <p className="p--large">{result} %</p> : null
                    }
                </div>
            </div>
        </div>
    )
 }

 export default NumberToPercentage