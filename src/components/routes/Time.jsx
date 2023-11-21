import { useEffect, useState } from "react"
import { daysArray, monthsArray, timeData } from "../../data/timeData"
import TimeCalculator from "../library/TimeCalculator"

const Time = () => {
    const timeCalculatorEl = timeData.map(item => {
        return (
            <TimeCalculator
                key={item.name}
                name={item.name}
                heading={item.heading}
                description={item.description}
            />
        )
    })


    return (
        <div className="main-container">
            <h1 className="main-heading">Time calculation</h1>
            <section className="calculators-section">
                {timeCalculatorEl}
            </section>
        </div>
    )
}

export default Time