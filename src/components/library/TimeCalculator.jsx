import { useEffect, useState } from "react"
import { PropTypes } from "prop-types"
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
        } else {
            setResult(null)
            setIsError(false)
        }
    }, [timeCalculationData, name])

    const weekdayText = name === "time passed" ? "It all began on a:" : "It will happen on a:"

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
                    <label htmlFor={`${name}-checkbox`} className="label--visible">Give me all the details:</label>
                    <input
                        type="checkbox"
                        id={`${name}-checkbox`}
                        value={isDetailsSelected}
                        onChange={() => setIsDetailsSelected(!isDetailsSelected)}
                    />
                </div>
                <div className="inner-wrapper space-between result-wrapper">
                    {isError && <p className="p--large p--warning">{isProcessing ? "One moment please..." : errorMessage}</p>}
                    {!isError && !isDetailsSelected && <p className="p--large">Result:</p>}
                    {result && !isDetailsSelected && !isError && <p className="p--large">{result.years} years</p>}
                    {isDetailsSelected && !isError &&
                        <div className="inner-wrapper flex-column">
                            <div className="space-between">
                                <p>Years:</p>
                                {result && <p>{result.years}</p>}
                            </div>
                            <div className="space-between">
                                <p>Months:</p>
                                {result && <p>{result.months}</p>}
                            </div>
                            <div className="space-between">
                                <p>Days:</p>
                                {result && <p>{result.days}</p>}
                            </div>
                            <div className="space-between">
                                <p>{weekdayText}</p>
                                {result && <p>{result.weekday}</p>}
                            </div>
                        </div>
                    }

                </div>
            </form>
        </div>
    )
}

TimeCalculator.propTypes = {
  name: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string
}

export default TimeCalculator