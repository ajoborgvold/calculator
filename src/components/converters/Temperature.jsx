import UnitConverter from "../library/UnitConverter"
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