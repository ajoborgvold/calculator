function handleConversionCalculation(unitData, conversionData) {
    const fromUnitData = unitData.units.find(unit => unit.name === conversionData.fromUnit)
    const toUnitData = unitData.units.find(unit => unit.name === conversionData.toUnit)
    const numToConvert = conversionData.input

    const numConvertedToReferenceUnit = numToConvert * fromUnitData.equalToFactor
    const result = numConvertedToReferenceUnit / toUnitData.equalToFactor

    return result
}

export default handleConversionCalculation