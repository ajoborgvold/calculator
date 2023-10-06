import { useEffect, useState } from "react"

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
        const pWithTwoDecimals = parseFloat(p.toFixed(2))
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
                <input
                    type="text"
                    name="num1"
                    id="num1"
                    className="input"
                    placeholder="0"
                    value={data.num1}
                    onChange={e => handleInputChange(e)}
                />
                <p>to</p>
                <input
                    type="text"
                    name="num2"
                    id="num2"
                    className="input"
                    placeholder="0"
                    value={data.num2}
                    onChange={e => handleInputChange(e)}
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