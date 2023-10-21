import { useState } from "react"
import TemperatureConverter from "../library/TemperatureConverter"
import { temperatureData } from "../../data/temperatureData"


const Temperature = () => {
    const temperatureElement = temperatureData.map(item => {
        return (
            <TemperatureConverter
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