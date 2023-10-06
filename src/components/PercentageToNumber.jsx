import { useEffect, useState } from "react"

const PercentageToNumber = () => {
    const [data, setData] = useState({percentage: '', total: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.percentage && data.total ? true : false)
    }, [data])
    
    useEffect(() => {
        setResult(data.total * data.percentage / 100)
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
                <input
                    type="text"
                    name="percentage"
                    id="percentage"
                    className="input"
                    placeholder="0"
                    value={data.percentage}
                    onChange={e => handleInputChange(e)}
                />
                <p>percent of</p>
                <input
                    type="text"
                    name="total"
                    id="total"
                    className="input"
                    placeholder="0"
                    value={data.total}
                    onChange={e => handleInputChange(e)}
                />
                <div className="result-wrapper">
                    <p className="p--large">{result ? result : null}</p>
                </div>
            </div>
        </div>
    )
}

export default PercentageToNumber