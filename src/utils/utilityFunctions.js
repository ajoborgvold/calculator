import { weekdaysArray } from "../data/timeData"

//=== FORMATTING OF STRINGS AND NUMBERS ===//
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function isVowel(letter) {
  return ["a", "e", "i", "o", "u"].includes(letter.toLowerCase())
}

function formatResult(num) {
  const formattedResult = num.toFixed(2)

  return num < 0.01 && num > 0
    ? "(rounded to) 0.00"
    : formattedResult.endsWith(".00")
    ? num.toFixed(0)
    : formattedResult
}

//=== HANDLE FORM DATA BASED ON USER INPUT ===//
function handleChange(e, key, setterFunction) {
  setterFunction((prevData) => ({ ...prevData, [key]: e.target.value }))
}

//=== UNIT CONVERSION ===//
function handleConversion(data, conversionData) {
  const fromUnitData = data.units.find(
    (unit) => unit.name === conversionData.fromUnit
  )
  const toUnitData = data.units.find(
    (unit) => unit.name === conversionData.toUnit
  )
  const numToConvert = Number(conversionData.input)
  const numInBaseUnit = numToConvert * fromUnitData.equalToFactor

  /** Early return if the user has selected the same unit in both select menus **/
  if (fromUnitData.name === toUnitData.name) {
    return numToConvert
  }

  /** Temperature calculations **/
  if (fromUnitData.name === "fahrenheit") {
    const numInCelsius =
      (numToConvert - fromUnitData.offset) / fromUnitData.equalToFactor
    return numInCelsius * toUnitData.equalToFactor
  } else if (fromUnitData.name === "celsius") {
    return numToConvert * toUnitData.equalToFactor + fromUnitData.offset
  }

  /** All other cases, i.e. !temperature && two different units selected **/
  return numInBaseUnit / toUnitData.equalToFactor
}

//=== TIME CALCULATION ===//
function calculateTime(
  name,
  setResult,
  setIsError,
  setIsProcessing,
  setErrorMessage,
  day,
  month,
  year
) {
  const currentDate = new Date()
  const selectedDate = new Date(year, month, day)

  if (name === "time passed") {
    /* JS automatically converts years between 0 and 99 to a 20th century year, e.g. if actual year is 75, JS converts that to 1975.
        Below, we check if the user's selection is a year between 0 and 99, and if so, we create a processedDate with 100 years added to the user selection to allow correct calculations based on the user's selection. When calculating the time difference between current date and user selection, we check again if the user's selection is in the span 0-99, and if so we correct the diff, which would otherwise be off with 100 years */
    const yearAsNum = Number(year)
    const processedYear =
      yearAsNum < 100 && yearAsNum >= 0 ? yearAsNum + 100 : yearAsNum
    const processedDate = new Date(processedYear.toString(), month, day)
    const oneHundredYearsInMs = 3153600000000

    const timeDiffInMs =
      yearAsNum < 100 && yearAsNum >= 0
        ? currentDate - processedDate + oneHundredYearsInMs
        : currentDate - processedDate

    if (timeDiffInMs < 0) {
      setIsError(true)
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        setErrorMessage("Invalid selection. Selected date must be in the past.")
      }, 1250)
      return
    } else {
      setIsProcessing(false)
      setIsError(false)
      setErrorMessage("")
    }

    calculateTimePassed(
      setResult,
      selectedDate,
      processedDate,
      currentDate,
      timeDiffInMs
    )
  } else if (name === "future time") {
    const timeDiffInMs = selectedDate - currentDate

    if (timeDiffInMs < 0) {
      setIsError(true)
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        setErrorMessage(
          "Invalid selection. Selected date must be in the future."
        )
      }, 1250)
      return
    } else {
      setIsProcessing(false)
      setIsError(false)
      setErrorMessage("")
    }

    calculateFutureTime(setResult, selectedDate, currentDate, timeDiffInMs)
  }
}

function calculateTimePassed(
  setResult,
  selectedDate,
  processedDate,
  currentDate,
  timeDiffInMs
) {
  let yearsPassed = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365))
  processedDate.setFullYear(processedDate.getFullYear() + yearsPassed)

  if (currentDate < processedDate) {
    processedDate.setFullYear(processedDate.getFullYear() - 1)
    yearsPassed -= 1
  }

  const monthDiff = currentDate.getMonth() - processedDate.getMonth()
  let monthsPassed = monthDiff < 0 ? 12 + monthDiff : monthDiff

  if (processedDate.getDate() > currentDate.getDate()) {
    monthsPassed--

    if (monthsPassed < 0) {
      monthsPassed += 12
    }
  }

  currentDate.setMonth(currentDate.getMonth() + monthsPassed)

  let dayDiff = currentDate.getDate() - processedDate.getDate()

  if (dayDiff < 0) {
    const lastDayOfPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
    dayDiff =
      lastDayOfPrevMonth - processedDate.getDate() + currentDate.getDate()
  }

  const weekday = capitalizeFirstLetter(weekdaysArray[selectedDate.getDay()])

  setResult({
    years: yearsPassed,
    months: monthsPassed,
    days: dayDiff,
    weekday: weekday,
  })
}

function calculateFutureTime(
  setResult,
  selectedDate,
  currentDate,
  timeDiffInMs
) {
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

  if (dayDiff < 0) {
    const lastDayOfPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
    dayDiff += lastDayOfPrevMonth
  }

  const weekday = capitalizeFirstLetter(weekdaysArray[selectedDate.getDay()])

  setResult({
    years: yearsToCome,
    months: monthsToCome,
    days: dayDiff,
    weekday: weekday,
  })
}

export {
  formatResult,
  capitalizeFirstLetter,
  isVowel,
  handleChange,
  handleConversion,
  calculateTime,
}
