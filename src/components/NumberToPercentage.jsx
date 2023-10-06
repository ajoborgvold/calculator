import { useEffect, useState } from "react"

const NumberToPercentage = () => {
    const [data, setData] = useState({numOne: '', numTwo: ''})
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState('')

    useEffect(() => {
        setHasResult(data.numOne && data.numTwo ? true : false)
    }, [data])
    
    useEffect(() => {
        hasResult && setResult(data.numOne / data.numTwo * 100)
    }, [data, hasResult])

    const handleInputChange = e => {
        setData(prevData => {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className="container">
            <div className="inner-wrapper">
                <p>How many percent is the number</p>
                <input
                    type="text"
                    name="numOne"
                    id="numOne"
                    className="input"
                    placeholder="0"
                    value={data.numOne}
                    onChange={e => handleInputChange(e)}
                />
                <p>of the number</p>
                <input
                    type="text"
                    name="numTwo"
                    id="numTwo"
                    className="input"
                    placeholder="0"
                    value={data.numTwo}
                    onChange={e => handleInputChange(e)}
                />
                <div className="result-wrapper">
                    {result ? 
                        <p className="p--large">{result} %</p> : null
                    }
                </div>
            </div>
        </div>
    )
 }

 export default NumberToPercentage