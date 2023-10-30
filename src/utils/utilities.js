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


function handleConversionCalculation(data, conversionData) {
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

    /** All other cases, i.e. not temperature and two different units selected **/
    return numInBaseUnit / toUnitData.equalToFactor
}


function formatResult(num, data) {
    const formattedResult = num.toFixed(2)

    if (data?.name === "temperature") {
        return formattedResult.endsWith(".00") ? num.toFixed(0) : formattedResult
    } else {
        return num < 0.01 ? "(rounded to) 0.00"
            : formattedResult.endsWith(".00") ? num.toFixed(0) : formattedResult
    }
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


export { formatResult, capitalizeFirstLetter, isVowel, handleChange, handleConversionCalculation, useClickOutside }
