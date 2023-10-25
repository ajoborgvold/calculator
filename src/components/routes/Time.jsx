import { useEffect, useState } from "react"

const Time = ({setIsMenuOpen}) => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        setIsMenuOpen(false)
        const intervalId = setInterval(updateDateTime, 1000)
        return () => clearInterval(intervalId)
    }, [])

    function updateDateTime() {
        setCurrentDate(new Date())
    }

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const day = currentDate.getDate()
    const monthIndex = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    
    function getFormattedDay() {
        if (day === 1 || day === 21 || day === 31) {
            return `${day}st`
        } else if (day === 2 || day === 22) {
            return `${day}nd`
        } else if (day === 3 || day === 23) {
            return `${day}rd`
        } else {
            return `${day}th`
        }
    }
    
    const formattedDay = getFormattedDay()
    const month = monthsArray[monthIndex]
    
    const formattedFullDate = `${formattedDay} ${month} ${year}`
    const currentTime = `${hours}.${minutes}.${seconds}`


    function calculateAge() {
        const birthDate = new Date(1988, 0, 24)
        let age = currentDate.getFullYear() - birthDate.getFullYear()

        const currentMonth = currentDate.getMonth()
        const birthMonth = birthDate.getMonth()

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
            age--
          }

        return `You're ${age} years old!`
    }

    return (
        <div className="main-container time-container">
            <h1>Time calculation</h1>
            <p>{formattedFullDate} {currentTime}</p>
            {/* <p>{calculateAge()}</p> */}
        </div>
    )
}

export default Time