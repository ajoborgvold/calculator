import { useEffect, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import { daysArray, monthsArray } from "../../data/timeData"
import { capitalizeFirstLetter, handleChange, calculateTime } from "../../utils/utilityFunctions"

const TimeCalculator = ({ name, heading, description }) => {
    const [timeCalculationData, setTimeCalculationData] = useState({
        day: '',
        month: '',
        year: '',
    })
    const [result, setResult] = useState(null)
    const [isDetailsSelected, setIsDetailsSelected] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const monthIndex = monthsArray.indexOf(timeCalculationData.month)

        if (timeCalculationData.day && timeCalculationData.month && timeCalculationData.year) {
            calculateTime(name, setResult, setIsError, setIsProcessing, setErrorMessage, timeCalculationData.day, monthIndex, timeCalculationData.year)
        } else { setResult(null) }
    }, [timeCalculationData])

    const resultToDisplay = result && isDetailsSelected ? `${result.years} years, ${result.months} months, ${result.days} days`
        : result ? `${result.years} years` : ""

    return (
        <div className="calculator-item-wrapper">
            <div>
                <h2 className="sub-heading">{capitalizeFirstLetter(heading)}</h2>
                <p className="p--italic">{capitalizeFirstLetter(description)}</p>
            </div>
            <form className="form">
                <div className="inner-wrapper space-between">
                    <p>Select a day:</p>
                    <Select
                        data={daysArray}
                        name="days"
                        id="days"
                        value={timeCalculationData.day}
                        handleChange={e => handleChange(e, "day", setTimeCalculationData)}
                        defaultText="Select a day"
                        label="Select a day"
                    />
                </div>
                <div className="inner-wrapper space-between">
                    <p>Select a month:</p>
                    <Select
                        data={monthsArray}
                        name="months"
                        id="months"
                        value={timeCalculationData.month}
                        handleChange={e => handleChange(e, "month", setTimeCalculationData)}
                        defaultText="Select a month"
                        label="Select a month"
                    />
                </div>
                <div className="inner-wrapper space-between">
                    <p>Enter a year:</p>
                    <Input
                        name="year"
                        id="year"
                        value={timeCalculationData.year}
                        handleChange={e => handleChange(e, "year", setTimeCalculationData)}
                    />
                </div>
                <div className="inner-wrapper">
                    <p>Give me all the details:</p>
                    <label htmlFor={`${name}-checkbox`} className="label">Check this checkbox for a full calculation of years, months and days</label>
                    <input
                        type="checkbox"
                        id={`${name}-checkbox`}
                        value={isDetailsSelected}
                        onChange={() => setIsDetailsSelected(!isDetailsSelected)}
                    />
                </div>
                <div className="inner-wrapper space-between result-wrapper">
                    {!isError && <p className="p--large">Result:</p>}
                    {result && !isError && <p className="p--large">{resultToDisplay}</p>}
                    {isError && <p className="p--warning">{isProcessing ? "One moment please..." : errorMessage}</p>}
                </div>
            </form>
        </div>
    )
}

export default TimeCalculator