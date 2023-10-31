import { useEffect, useState } from "react"
import { daysArray, monthsArray, timeData } from "../../data/timeData"
import TimeCalculator from "../library/TimeCalculator"

const Time = () => {

    // useEffect(() => {
    //     const intervalId = setInterval(updateDateTime, 1000)
    //     return () => clearInterval(intervalId)
    // }, [])

    // function updateDateTime() {
    //     setCurrentDate(new Date())
    // }

    // const day = currentDate.getDate()
    // const monthIndex = currentDate.getMonth()
    // const year = currentDate.getFullYear()
    // const hours = currentDate.getHours()
    // const minutes = currentDate.getMinutes()
    // const seconds = currentDate.getSeconds()

    
    // function getFormattedDay() {
    //     if (day === 1 || day === 21 || day === 31) {
    //         return `${day}st`
    //     } else if (day === 2 || day === 22) {
    //         return `${day}nd`
    //     } else if (day === 3 || day === 23) {
    //         return `${day}rd`
    //     } else {
    //         return `${day}th`
    //     }
    // }
    
    // const formattedDay = getFormattedDay()
    // const month = monthsArray[monthIndex]
    
    // const formattedFullDate = `${formattedDay} ${month} ${year}`
    // const currentTime = `${hours}.${minutes}.${seconds}`


    const timeCalculatorEl = timeData.map(item => {
        // console.log(item)
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