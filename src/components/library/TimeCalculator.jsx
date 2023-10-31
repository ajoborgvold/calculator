import { useEffect, useState } from "react"
import Select from "./Select"
import Input from "./Input"
import { daysArray, monthsArray } from "../../data/timeData"
import { capitalizeFirstLetter, handleChange } from "../../utils/utilities"

const TimeCalculator = ({ name, heading, description }) => {
    // const [currentDate, setCurrentDate] = useState(new Date())
    const [timeCalculationData, setTimeCalculationData] = useState({
        day: '',
        month: '',
        year: '',
    })
    // console.log(timeCalculationData)

    const [result, setResult] = useState(null)
    const [isDetailsSelected, setIsDetailsSelected] = useState(false)

    useEffect(() => {
        const monthIndex = monthsArray.indexOf(timeCalculationData.month)

        timeCalculationData.day && timeCalculationData.month && timeCalculationData.year
            && calculateAge(name, timeCalculationData.day, monthIndex, timeCalculationData.year)
    }, [timeCalculationData])

    function calculateAge(name, day, month, year) {
        const currentDate = new Date()
        if (name === "time passed") {
            const selectedDate = new Date(year, month, day);
            const timeDiffInMs = currentDate - selectedDate;

            const yearsPassed = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365));
            selectedDate.setFullYear(selectedDate.getFullYear() + yearsPassed);
            const monthDiff = currentDate.getMonth() - selectedDate.getMonth();
            const monthsPassed = monthDiff < 0 ? 12 + monthDiff : monthDiff;
            selectedDate.setMonth(selectedDate.getMonth() + monthsPassed);
            let dayDiff = currentDate.getDate() - selectedDate.getDate();

            if (dayDiff < 0) {
                const lastDayOfPrevMonth = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0
                ).getDate();
                dayDiff += lastDayOfPrevMonth;
            }

            setResult({
                years: yearsPassed,
                months: monthsPassed,
                days: dayDiff,
            });
        } else {
            const selectedDate = new Date(year, month, day);
            const timeDiffInMs = selectedDate - currentDate;

            const yearsToCome = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365));
            selectedDate.setFullYear(selectedDate.getFullYear() + yearsToCome);
            const monthDiff = currentDate.getMonth() - selectedDate.getMonth();

            let monthsToCome = monthDiff;

            if (monthsToCome < 0) {
              monthsToCome += 12;
            }
        
            if (selectedDate.getDate() < currentDate.getDate()) {
              monthsToCome--;
        
              if (monthsToCome < 0) {
                monthsToCome += 12;
              }
            }
        
            currentDate.setMonth(currentDate.getMonth() + monthsToCome);
        
            // Calculate days difference manually
            const dayDiffInMs = selectedDate - currentDate;
            const daysDiff = Math.floor(dayDiffInMs / (1000 * 60 * 60 * 24)) + 1;

            // let monthsToCome = 0;

            // if (monthDiff < 0) {
            //     monthsToCome = 12 - Math.abs(monthDiff);
            // } else if (monthDiff > 0) {
            //     monthsToCome = monthDiff;
            // } else {
            //     if (currentDate.getDate() > selectedDate.getDate()) {
            //         monthsToCome = 11;
            //     }
            // }

            // currentDate.setMonth(currentDate.getMonth() + monthsToCome);

            // // Calculate days difference manually
            // const dayDiffInMs = selectedDate - currentDate;
            // const daysDiff = Math.floor(dayDiffInMs / (1000 * 60 * 60 * 24)) + 1;

            setResult({
                years: yearsToCome,
                months: monthsToCome,
                days: daysDiff,
            });
        }
        
        
        // else {
        //     const selectedDate = new Date(year, month, day);
        //     const timeDiffInMs = selectedDate - currentDate;

        //     const yearsToCome = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365));
        //     currentDate.setFullYear(currentDate.getFullYear() + yearsToCome);

        //     const monthDiff = selectedDate.getMonth() - currentDate.getMonth();

        //     let monthsToCome

        //     if (monthDiff < 0) {
        //         monthsToCome = 12 - Math.abs(monthDiff) - 1
        //     } else if (monthDiff > 0) {
        //         monthsToCome = monthDiff - 1
        //     } else if (selectedDate.getDate() < currentDate.getDate()) {
        //         monthsToCome = 11
        //     } else {
        //         monthsToCome = 0
        //     }

        //     currentDate.setMonth(currentDate.getMonth() + monthsToCome);

        //     // Calculate days difference manually
        //     const dayDiffInMs = selectedDate - currentDate;
        //     const daysDiff = Math.floor(dayDiffInMs / (1000 * 60 * 60 * 24)) + 1

        //     setResult({
        //         years: yearsToCome,
        //         months: monthsToCome,
        //         days: daysDiff,
        //     });
        // }
    }


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
                    <p className="p--large">Result:</p>
                    {result && <p className="p--large">{resultToDisplay}</p>}
                </div>
            </form>
        </div>
    )
}

export default TimeCalculator