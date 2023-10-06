import { useEffect, useState } from "react"
import Input from "./Input"
import limitToTwoDecimalPlaces from "../utils/limitToTwoDecimalPlaces"


const ChangeInPercent = () => {
    const [data, setData] = useState({num1: '', num2: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.num1 && data.num2 ? true : false)
    }, [data])

    useEffect(() => {
        const dif = data.num1 - data.num2
        const positiveDif = dif < 0 ? Math.abs(dif) : dif
        const p = (positiveDif / data.num1) * 100
        const pWithTwoDecimals = limitToTwoDecimalPlaces(p)
        if (hasResult) {
            setResult(dif < 0 ? pWithTwoDecimals : -pWithTwoDecimals)
        }
    }, [data, hasResult])

    const handleInputChange = e => {
        setData(prevData => {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className="container">
            <div className="inner-wrapper">
                <p>A change from</p>
                <Input
                    name="num1"
                    id="num1"
                    value={data.num1}
                    onchange={e => handleInputChange(e)}
                />
                <p>to</p>
                <Input
                    name="num2"
                    id="num2"
                    value={data.num2}
                    onchange={e => handleInputChange(e)}
                />
                <p>is equal to:</p>
                <div className="result-wrapper">
                    {result ? 
                        <p className="p--large">{result} %</p> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ChangeInPercent