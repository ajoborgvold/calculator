import { useEffect, useState } from "react"
import Input from "../library/Input"
import formatResult from "../../utils/formatResult"

const PercentageCalculator = props => {
    const { nameOne, nameTwo, textOne, textTwo, textThree, textFour, unit, calculationType } = props

    const [data, setData] = useState({ nameOne: '', nameTwo: '' })
    const [hasResult, setHasResult] = useState(false)
    const [result, setResult] = useState(null)
    
    useEffect(() => {
        setHasResult(data.nameOne && data.nameTwo ? true : false)
    }, [data])
    
    useEffect(() => {
        let newResult = 0

        if (calculationType === "numToPct") {
            newResult = data.nameOne / data.nameTwo * 100
        } else if (calculationType === "changeInPct") {
            const dif = data.nameOne - data.nameTwo
            newResult = dif < 0 ? (Math.abs(dif) / data.nameOne) * 100 : ((dif * -1) / data.nameOne) * 100
        } else if (calculationType === "pctToNum") {
            newResult = data.nameTwo * data.nameOne / 100
        } else if (calculationType === "pctOfTotal") {
            newResult = data.nameTwo / data.nameOne * 100
        }

        getResultValue(newResult)
    }, [data, hasResult])

    const handleInputChange = e => {
        setData(prevData => ({...prevData, [e.target.name]: e.target.value}))
    }

    const getResultValue = newResult => {
        hasResult ? setResult(formatResult(newResult)) : setResult(0)
    }
    
    return (
        <div className="flex__sub-container-item">
            <div className="flex__sub-container-item__inner-wrapper">
                <p>{textOne}</p>
                <Input
                    name="nameOne"
                    id="nameOne"
                    value={data.nameOne}
                    onchange={handleInputChange}
                />
                {textTwo && <p>{textTwo}</p>}
            </div>
            <div className="flex__sub-container-item__inner-wrapper">
                <p>{textThree}</p>
                <Input
                    name="nameTwo"
                    id="nameTwo"
                    value={data.nameTwo}
                    onchange={handleInputChange}
                />
                <p>{textFour}</p>
            </div>
            <p className="result">{result} {unit && unit}</p>
        </div>
    )
}

export default PercentageCalculator
