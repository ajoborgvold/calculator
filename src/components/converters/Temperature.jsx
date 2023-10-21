import { useState } from "react"
// import TemperatureConverter from "../library/TemperatureConverter"
import UnitConverter from "../library/UnitConverter"
// import { temperatureData } from "../../data/temperatureData"
import { unitData } from "../../data/unitData"

const Temperature = () => {
    const temperatureElement = unitData.temperatureData.map(item => {
        return (
            <UnitConverter
                key={item.name}
                {...item}
            />
        )
    })

    return (
        <>{temperatureElement}</>
    )
}

export default Temperature