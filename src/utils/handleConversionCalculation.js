function handleConversionCalculation(unitData, conversionData) {
    const fromUnitData = unitData.units.find(unit => unit.name === conversionData.fromUnit)
    const toUnitData = unitData.units.find(unit => unit.name === conversionData.toUnit)
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
    }
    
    if (fromUnitData.name === "celsius") {
        return numToConvert * toUnitData.equalToFactor + fromUnitData.offset
    }

    /** All other cases, i.e. not temperature and two different units selected **/
    return numInBaseUnit / toUnitData.equalToFactor
}

export default handleConversionCalculation