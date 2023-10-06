import { useEffect, useState } from "react"
import Input from "./Input"
import limitToTwoDecimalPlaces from "../utils/limitToTwoDecimalPlaces"

const PercentageToNumber = () => {
    const [data, setData] = useState({percentage: '', total: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.percentage && data.total ? true : false)
    }, [data])
    
    useEffect(() => {
        const resultUnlimitedDecimals = data.total * data.percentage / 100
        const resultWithTwoDecimals = limitToTwoDecimalPlaces(resultUnlimitedDecimals)
        hasResult && setResult(resultWithTwoDecimals)
    }, [data, hasResult])

    const handleInputChange = e => {
        setData(prevData => {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className="container">
            <div className="inner-wrapper">
                <p>How much is</p>
                <Input
                    name="percentage"
                    id="percentage"
                    value={data.percentage}
                    onchange={e => handleInputChange(e)}
                />
                <p>percent of</p>
                <Input
                    name="total"
                    id="total"
                    value={data.total}
                    onchange={e => handleInputChange(e)}
                />
                <div className="result-wrapper">
                    <p className="p--large">{result ? result : null}</p>
                </div>
            </div>
        </div>
    )
}

export default PercentageToNumber