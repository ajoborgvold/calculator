import { useEffect } from "react"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}


function handleChange(e, key, setterFunction) {
    setterFunction(prevData => ({...prevData, [key]: e.target.value}))
}


function handleConversion(data, conversionData) {
    const fromUnitData = data.units.find(unit => unit.name === conversionData.fromUnit)
    const toUnitData = data.units.find(unit => unit.name === conversionData.toUnit)
    const numToConvert = Number(conversionData.input)
    const numInBaseUnit = numToConvert * fromUnitData.equalToFactor

    /** Early return if the user has selected the same unit in both select menus **/
    if (fromUnitData.name === toUnitData.name) {
        return numToConvert
    }

    /** Temperature calculations **/
    if (fromUnitData.name === "fahrenheit") {
        const numInCelsius = (numToConvert - fromUnitData.offset) / fromUnitData.equalToFactor
        return numInCelsius * toUnitData.equalToFactor
    } else if (fromUnitData.name === "celsius") {
        return numToConvert * toUnitData.equalToFactor + fromUnitData.offset
    }

    /** All other cases, i.e. !temperature && two different units selected **/
    return numInBaseUnit / toUnitData.equalToFactor
}


function formatResult(num, data) {
    const formattedResult = num.toFixed(2)

    return num < 0.01 && num > 0 ? "(rounded to) 0.00"
        : formattedResult.endsWith(".00") ? num.toFixed(0) : formattedResult
}


function calculateTime(name, setResult, setErrorMessage, day, month, year) {
    const currentDate = new Date()
    const selectedDate = new Date(year, month, day)

    if (name === "time passed") {
        calculateTimePassed(setResult, setErrorMessage, selectedDate, currentDate)
    } else if (name === "future time") {
        calculateFutureTime(setResult, setErrorMessage, selectedDate, currentDate)
    }
}


function calculateTimePassed(setResult, setErrorMessage, selectedDate, currentDate) {
    const timeDiffInMs = currentDate - selectedDate

    if (timeDiffInMs < 0) {
        setErrorMessage("Invalid selection. Selected date must be in the past.")
        return
    } else {
        setErrorMessage("")
    }

    const yearsPassed = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365))
    selectedDate.setFullYear(selectedDate.getFullYear() + yearsPassed)

    const monthDiff = currentDate.getMonth() - selectedDate.getMonth()
    const monthsPassed = monthDiff < 0 ? 12 + monthDiff : monthDiff
    selectedDate.setMonth(selectedDate.getMonth() + monthsPassed)

    let dayDiff = selectedDate.getDate() - currentDate.getDate()
    dayDiff = adjustDayDifference(dayDiff, currentDate)

    setResult({
        years: yearsPassed,
        months: monthsPassed,
        days: dayDiff,
    });
}


function calculateFutureTime(setResult, setErrorMessage, selectedDate, currentDate) {
    const timeDiffInMs = selectedDate - currentDate

    if (timeDiffInMs < 0) {
        setErrorMessage("Invalid selection. Selected date must be in the future.")
        return
    } else {
        setErrorMessage("")
    }

    const yearsToCome = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365))
    selectedDate.setFullYear(selectedDate.getFullYear() + yearsToCome)
    
    const monthDiff = selectedDate.getMonth() - currentDate.getMonth()
    let monthsToCome = monthDiff < 0 ? 12 + monthDiff : monthDiff

    if (selectedDate.getDate() < currentDate.getDate()) {
        monthsToCome--

        if (monthsToCome < 0) {
            monthsToCome += 12
        }
    }

    currentDate.setMonth(currentDate.getMonth() + monthsToCome)

    let dayDiff = selectedDate.getDate() - currentDate.getDate()
    dayDiff = adjustDayDifference(dayDiff, currentDate)

    setResult({
        years: yearsToCome,
        months: monthsToCome,
        days: dayDiff,
    });
}


function adjustDayDifference(dayDiff, currentDate) {
    if (dayDiff < 0) {
        const lastDayOfPrevMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        dayDiff += lastDayOfPrevMonth;
    }
    return dayDiff;
}


function useClickOutside(ref, handler) {
    useEffect(() => {
        let startedInside = false
        let startedWhenMounted = false

        function listener(e) {
            if (startedInside || !startedWhenMounted) return
            if (!ref.current || ref.current.contains(e.target)) return

            handler(e)
        }

        function validateEventStart(e) {
            startedWhenMounted = ref.current
            startedInside = ref.current && ref.current.contains(e.target)
        }

        document.addEventListener("mousedown", validateEventStart)
        document.addEventListener("touchstart", validateEventStart)
        document.addEventListener("click", listener)

        return () => {
            document.removeEventListener("mousedown", validateEventStart)
            document.removeEventListener("touchstart", validateEventStart)
            document.removeEventListener("click", listener)
        }
    }, [ref, handler])
}


export { 
    formatResult,
    capitalizeFirstLetter,
    isVowel,
    handleChange,
    handleConversion,
    calculateTime,
    useClickOutside
}
